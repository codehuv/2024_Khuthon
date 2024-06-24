import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'

const Course_result = () => {
  return (
    <div className="About" style={{width: 1920, height: 1080, position: 'relative', background: 'white'}}>
  <div className="Headline" style={{height: 116, left: 80, top: 244, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', color: 'black', fontSize: 48, fontFamily: 'Inter', textAlign:'left', fontWeight: '700', wordWrap: 'break-word'}}>짠! 당신의 여행 코스가 <br/>완성되었어요!</div>
  </div>
  <div className="Paragraph" style={{width: 624, left: 94, top: 452, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', textAlign:'left', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>AI가 당신이 선택한 도시에서 즐길 수 있는 여정을 준비했어요!<br/>준비된 코스를 따라 여행하고, 지속 가능한 여행에 대해서 체험해 본 뒤, 후기도 남겨봐요!</div>
  <div className="Navigation" style={{width: 1920, height: 164, paddingTop: 56, paddingBottom: 56, paddingLeft: 1593, paddingRight: 80, left: 0, top: 0, position: 'absolute', background: 'white', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
    <div className="Items" style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 48, display: 'inline-flex'}}>
        <Link to = "/mypage">
      <div style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>마이페이지</div>
      </Link>
      <Link to = '/'>
      <div className="Button" style={{paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10, background: 'black', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
        <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>로그아웃</div>
      </div>
      </Link>
    </div>
  </div>
  <Link to = '/feedback'>
  <div className="Button" style={{width: 300, height: 80, paddingLeft: 16, paddingRight: 16, left: 94, top: 780, position: 'absolute', background: 'black', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
    <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>여행을 마쳤다면, 후기 남기러 가기</div>
  </div>
  </Link>
</div>
  );
};

export default Course_result;