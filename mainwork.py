from mongotopd import *
from random import *

# 검색어 키워드 주어지면 그 지역에 대한 모든 데이터를 가져오고 pandas 를 딕셔너리 형태로 저장함.
keywd = "용인"
keyweek = "월요일"
################## 추후 삭제할 것 #############
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