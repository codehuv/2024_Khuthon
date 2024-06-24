from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import pandas as pd
from datetime import datetime
from mongotopd import *
from random import *
import google.generativeai as genai

# 현재 날짜 형식 지정
current_date = datetime.now().date()
current_date = str(current_date).replace('-', '')

# MongoDB 클라이언트 초기화
uri = ""
client = MongoClient(uri)
keywd = ""
keyweek = ""
ary_lei = {} #10개
ary_res = {} #10개
ary_cul = {} #10개
ary_tou = {} #10개
ary_sho = {} #10개
a = querifyDF(db, KEYLIST, keywd, keyweek)
if(len(a['축제공연행사']) == 0):
    idx_random = randint(0,len(a['문화시설']))
    morning_place = a['문화시설'].iloc[idx_random]
else:
    idx_random = randint(0,len(a['축제공연행사'])-1)
    morning_place = a['축제공연행사'].iloc(idx_random)
lat = morning_place['위도']
lon = morning_place['경도']

def calculLength(lat,lon, alat, alon, name, passingAry):
    pitaLen = (lat-alat)**2 + (lon-alon)**2
    passingAry[name] = pitaLen

for cntRow in range(len(a['레포츠'])):
    aDla = a['레포츠']['위도'].iloc[cntRow]
    aDlo = a['레포츠']['경도'].iloc[cntRow]
    aDna = a['레포츠']['명칭'].iloc[cntRow]
    calculLength(lat, lon, aDla,aDlo, aDna, ary_lei)
sorted(ary_lei.items(),key=lambda x:x[1])
ary_lei = dict(list(ary_lei.items())[0:9])

for cntRow in range(len(a['음식점'])):
    aDla = a['음식점']['위도'].iloc[cntRow]
    aDlo = a['음식점']['경도'].iloc[cntRow]
    aDna = a['음식점']['명칭'].iloc[cntRow]
    calculLength(lat, lon, aDla,aDlo, aDna, ary_res)
sorted(ary_res.items(),key=lambda x:x[1])
ary_res = dict(list(ary_res.items())[0:9])

for cntRow in range(len(a['문화시설'])):
    aDla = a['문화시설']['위도'].iloc[cntRow]
    aDlo = a['문화시설']['경도'].iloc[cntRow]
    aDna = a['문화시설']['명칭'].iloc[cntRow]
    calculLength(lat, lon, aDla,aDlo, aDna, ary_cul)
sorted(ary_cul.items(),key=lambda x:x[1])
ary_cul = dict(list(ary_cul.items())[0:9])

for cntRow in range(len(a['관광지'])):
    aDla = a['관광지']['위도'].iloc[cntRow]
    aDlo = a['관광지']['경도'].iloc[cntRow]
    aDna = a['관광지']['명칭'].iloc[cntRow]
    calculLength(lat, lon, aDla,aDlo, aDna, ary_tou)
sorted(ary_tou.items(),key=lambda x:x[1])
ary_tou = dict(list(ary_tou.items())[0:9])

for cntRow in range(len(a['쇼핑'])):
    aDla = a['쇼핑']['위도'].iloc[cntRow]
    aDlo = a['쇼핑']['경도'].iloc[cntRow]
    aDna = a['쇼핑']['명칭'].iloc[cntRow]
    calculLength(lat, lon, aDla,aDlo, aDna, ary_sho)
sorted(ary_sho.items(),key=lambda x:x[1])
ary_sho = dict(list(ary_sho.items())[0:9])


genai.configure(api_key="AIzaSyBGYDnMm9YrvnxWFar4CsidqzaObvYB0v8")
model = genai.GenerativeModel('gemini-pro')
response = model.generate_content("당신은 주어진 정보와 조건을 가지고 하루 여행 계획을 세워서 시간 단위로 계획을 세운 후 여행계획표를 결과로 보여줘야합니다. 일단 {}라는 지역을 중심으로 여행할겁니다. 당연히 식당은 두 곳을 가야합니다. 그리고 당신은 점심, 저녁 시간을 피해 주어진 [관광지, 쇼핑, 레포츠, 문화시설, 축제공연행사, 음식점]카테고리별로 여행지를 추천해줘야 합니다. 아침에 축제공연행사 혹은 문화시설인 {}에 참여합니다. 활동이 짧을 것 같으면 그 주변 가까운 장소에서 관광지인 {} 또는 쇼핑가인 {}에서 한 곳을 방문해야 합니다. 식당은 {} 중 에서 점심과 저녁을 한 번씩 방문해야 합니다. 점심을 먹고 저녁을 먹기 전까지 [관광지, 레포츠, 쇼핑]중에서 적절히 골라 계획을 세우고 저녁을 먹고 귀가를 합니다. 레포츠 활동들은 다음과 같습니다{}".format(keywd, morning_place, ary_tou, ary_sho, ary_res, ary_lei))
print(response.text)

# Flask 애플리케이션 초기화
app = Flask(__name__)
CORS(app)

# 검색 요청을 처리하는 엔드포인트
@app.route('/search', methods=['POST'])
def search():
    data = request.json
    keywd = data.get('keyword')
    keyweek = data.get('weekday')

    if not keywd or not keyweek:
        return jsonify({"error": "Invalid input"}), 400

    results = querifyDF(db, KEYLIST, keywd, keyweek)

    return jsonify(results)

# 메인 함수
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5050, debug=True)
