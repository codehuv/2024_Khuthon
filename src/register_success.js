import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'

const Register_success = () => {
    return (
        <div className="Auth" style={{width: 1920, height: 1087.71, paddingTop: 4, paddingBottom: 3.71, background: 'white', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
        <div className="Content" style={{flex: '1 1 0', alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
          <img className="Image4" style={{width: 225, height: 225}} src="/check.png" />
          <div className="Copy" style={{width: 500, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex'}}>
            <div style={{textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}>가입이 완료되었습니다!</div>
          </div>
          <div className="InputAndButton" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
            <Link to = "/login">
            <div className="Button" style={{width: 480, height: 68, paddingLeft: 16, paddingRight: 16, background: 'black', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
              <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>로그인</div>
            </div>
            </Link>
          </div>
          <div className="ByClickingContinueYouAgreeToOurTermsOfServiceAndPrivacyPolicy" style={{alignSelf: 'stretch', textAlign: 'center'}}>
  <span style={{color: '#828282', fontSize: '16px', fontFamily: 'Inter', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>By clicking continue, you agree to our </span>
  <span style={{color: 'black', fontSize: '16px', fontFamily: 'Inter', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>Terms of Service</span>
  <span style={{color: '#828282', fontSize: '16px', fontFamily: 'Inter', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}> and </span>
  <span style={{color: 'black', fontSize: '16px', fontFamily: 'Inter', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>Privacy Policy</span>
</div>
</div>
      </div>
    );
};
export default Register_success;