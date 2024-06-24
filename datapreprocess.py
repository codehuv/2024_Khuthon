import pandas as pd

def readAllData():
  dfA = pd.read_excel('./datas/entireData.xls', sheet_name = None, engine='xlrd')
  dfB = pd.read_excel('./datas/baekhwa.xls', sheet_name = None, engine='xlrd')
  dfC = pd.read_excel('./datas/taxfree.xls', sheet_name = None, engine='xlrd')
  dfD = pd.read_excel('./datas/bigmart.xls', sheet_name = None, engine='xlrd')
  dfE = pd.read_excel('./datas/oulet.xls', sheet_name = None, engine='xlrd')
  dfF = pd.read_excel('./datas/commonMarket.xls', sheet_name = None, engine='xlrd')
  return dfA, dfB, dfC, dfD, dfE, dfF

def clearOutliers(a,b,c,d,e,f):
  common_b = pd.merge(a['쇼핑'], b['쇼핑'], on = ['명칭'])
  common_c = pd.merge(a['쇼핑'], c['쇼핑'], on = ['명칭'])
  common_d = pd.merge(a['쇼핑'], d['쇼핑'], on = ['명칭'])
  common_e = pd.merge(a['쇼핑'], e['쇼핑'], on = ['명칭'])
  common_f = pd.merge(a['쇼핑'], f['쇼핑'], on = ['명칭'])
  unique_df= pd.merge(a['쇼핑'], common_b, on=['명칭'],how='outer', indicator=True).query('_merge == "left_only"').drop(columns=['_merge'])
  unique_df= pd.merge(a['쇼핑'], common_c, on=['명칭'],how='outer', indicator=True).query('_merge == "left_only"').drop(columns=['_merge'])
  unique_df= pd.merge(a['쇼핑'], common_d, on=['명칭'],how='outer', indicator=True).query('_merge == "left_only"').drop(columns=['_merge'])
  unique_df= pd.merge(a['쇼핑'], common_e, on=['명칭'],how='outer', indicator=True).query('_merge == "left_only"').drop(columns=['_merge'])
  unique_df= pd.merge(a['쇼핑'], common_f, on=['명칭'],how='outer', indicator=True).query('_merge == "left_only"').drop(columns=['_merge'])
  return unique_df

