import google.generativeai as genai
from mainwork import ary_tou, ary_cul, ary_lei, ary_res, ary_sho, morning_place, keywd
genai.configure(api_key="AIzaSyBGYDnMm9YrvnxWFar4CsidqzaObvYB0v8")
model = genai.GenerativeModel('gemini-pro')
response = model.generate_content("당신은 주어진 정보와 조건을 가지고 하루 여행 계획을 세워서 시간 단위로 계획을 세운 후 여행계획표를 결과로 보여줘야합니다. 일단 {}라는 지역을 중심으로 여행할겁니다. 당연히 식당은 두 곳을 가야합니다. 그리고 당신은 점심, 저녁 시간을 피해 주어진 [관광지, 쇼핑, 레포츠, 문화시설, 축제공연행사, 음식점]카테고리별로 여행지를 추천해줘야 합니다. 아침에 축제공연행사 혹은 문화시설인 {}에 참여합니다. 활동이 짧을 것 같으면 그 주변 가까운 장소에서 관광지인 {} 또는 쇼핑가인 {}에서 한 곳을 방문해야 합니다. 식당은 {} 중 에서 점심과 저녁을 한 번씩 방문해야 합니다. 점심을 먹고 저녁을 먹기 전까지 [관광지, 레포츠, 쇼핑]중에서 적절히 골라 계획을 세우고 저녁을 먹고 귀가를 합니다. 레포츠 활동들은 다음과 같습니다{}".format(keywd, morning_place, ary_tou, ary_sho, ary_res, ary_lei))
print(response.text)