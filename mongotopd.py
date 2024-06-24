from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import pandas as pd
from datetime import datetime

current_date = datetime.now().date()
current_date = str(current_date).replace('-','')


# 검색어 키워드 주어지면 그 지역에 대한 모든 데이터를 가져오고 pandas 를 딕셔너리 형태로 저장함.
# keywd = "성남시"
# keyweek = "월요일"
################## 추후 삭제할 것 #############


EXCEPTLIST = ['여행코스','숙박']
EXCLUDEDKEYWORD_CH = ["빙상","운동장", "수련원", "클럽", "낚시", "휘트니스", "경기장", "리조트", "스키장", "체육", "사격", "썰매", "그린피아", "스포", "아난티"]

uri = "mongodb+srv://lgs2927:lgs2927@cluster0.opn7gy2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# DB접근 후 주어진 키워드에 대해서 콜렉션 수집
client = MongoClient(uri)
db = client['plannerDB']
print(db)
key_list = db.list_collection_names()
print(key_list)
KEYLIST = list(set(key_list)-set(EXCEPTLIST))

object_dict = {}
def querifyDF(db, KEYLIST, keywd, keyweek):
    for key in KEYLIST:
        collection = db[key]
        if(key == "축제공연행사"):
            cursor = collection.find({
                "행사시작일":{'$lte':current_date},
                "행사종료일":{'$gte':current_date},
                "주소":{"$regex":keywd},
                "쉬는날":{"$not":{"$regex":keyweek[0]}}
                })
        elif(key == "레포츠"):
            cursor = collection.find({
                "명칭":{"$not":{"$regex":'|'.join(EXCLUDEDKEYWORD_CH)}},
                "주소":{"$regex":keywd}
            })
        elif(key == "음식점"):
            cursor = collection.find({
                "명칭":{
                    "$not":{"$regex":"분식"}
                },
                "대표메뉴":{
                    "$not":{
                        "$regex":'|'.join(["카페","카노","커피"])}
                },
                "주소":{"$regex":keywd}
            })
        elif(key == "문화시설"):
            cursor = collection.find({
                "명칭":{
                    "$not":{"$regex":'|'.join(["어린이","도서관","기독교","출판","액션"])}},
                "주소":{"$regex":keywd}
            })
        else:
            cursor = collection.find({"주소": {'$regex' : keywd}})
        df = pd.DataFrame(list(cursor))
        object_dict[key] = df
    return object_dict

# 1순위 축제공연행사 1개
# 2순위 문화시설 1개
# 3순위 관광지 3개
# 4순위 쇼핑 1개
# 5순위 음식점 2개(점 저?)
# 6순위 레포츠