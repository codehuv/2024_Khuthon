from dbtomongo import *
from datapreprocess import *
import json



# 데이터 전체 merge 과정
a,b,c,d,e,f = readAllData()
unique = clearOutliers(a,b,c,d,e,f)
a['쇼핑'] = unique

keyDict = a.keys()

for key in keyDict:
  collection_name = key
  collection = create_collection(db, collection_name)
  record = json.loads(a[key].T.to_json()).values()
  insert_records(collection, record)


close_connection(client)