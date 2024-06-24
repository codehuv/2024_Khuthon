import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'

const Login_home = () => {
  return (
    <div className="Group4" style={{width: 1760, height: 818, position: 'relative'}}>
  <div className="Group3" style={{width: 1760, height: 818, left: 0, top: 0, position: 'absolute'}}>
    <div className="Copy" style={{width: 948.18, height: 351.02, left: 0, top: 466.98, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
      <div style={{alignSelf: 'stretch', color: '#828282', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', paddingLeft:50, textAlign:'left', lineHeight: 2, wordWrap: 'break-word'}}><br></br><br></br>방문객과 지역 공동체의 요구를 충족하며 현재와 미래의 경제적·사회적·환경적 영향을 고려하는 여행을 의미합니다. <br/><br/>친환경 교통수단과 숙소를 이용하고, 일회용품을 줄이고, 에너지 소비를 줄이고, 캠페인 및 체험 활동에 참여하는 것을 통해 지속 가능한 여행을 즐겨보는 것은 어떨까요?</div>
    </div>
    <div className="Header" style={{width: 1067, height: 276, left: 354, top: 150, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
      <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>트래비스</div>
      <div style={{alignSelf: 'stretch', textAlign: 'center', color: '#828282', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', lineHeight: 2, wordWrap: 'break-word'}}>당신은 지금 당장 떠나고 싶다.</div>
      <Link to="/course_select">
      <div className="Button" style={{width: 152, height: 73, paddingLeft: 24, paddingRight: 24, paddingTop: 14, paddingBottom: 14, background: 'black', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <div style={{color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>시작하기</div>
      </div>
      </Link>
    </div>
    <div className="Navigation" style={{width: 1760, height: 146.27, paddingTop: 56, paddingBottom: 38.27, paddingLeft: 1216, paddingRight: 18, left: 0, top: 0, position: 'absolute', background: 'white', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
      <div className="Items" style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 48, display: 'inline-flex'}}>
      <Link to = "/mypage">
        <div style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>마이페이지</div>
        </Link>
        <Link to = "/">
        <div className="Button" style={{paddingLeft: 24, paddingRight: 24, paddingTop: 14, paddingBottom: 14, background: 'black', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
          <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>로그아웃</div>
        </div>
        </Link>
      </div>
    </div>
    <img className="Image2" style={{ width: '709.5px', height: '338.03px', left: '1025.75px', top: '466.27px', position: 'absolute' }} src="/background.png" alt="Background" />
  </div>
  <div style={{width: 631, height: 133, left: 150, top: 373, position: 'absolute', color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}><br></br>지속 가능한 여행이란?</div>
</div>
  );
};

export default Login_home;