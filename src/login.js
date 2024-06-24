import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Login = () => {
    return (
        <div
            className="Auth"
            style={{
                width: 1920,
                height: 1087.71,
                paddingTop: 4,
                paddingBottom: 3.71,
                background: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'inline-flex',
            }}
        >
            <div
                className="Content"
                style={{
                    flex: '1 1 0',
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 24,
                    display: 'inline-flex',
                }}
            >
                <div
                    className="Copy"
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: 4,
                        display: 'flex',
                    }}
                >
                    <div
                        style={{
                            textAlign: 'center',
                            color: 'black',
                            fontSize: 40,
                            fontFamily: 'Inter',
                            fontWeight: '600',
                            lineHeight: 2,
                            wordWrap: 'break-word',
                        }}
                    >
                        환영합니다!
                    </div>
                    <div
                        style={{
                            textAlign: 'center',
                            color: 'black',
                            fontSize: 24,
                            fontFamily: 'Inter',
                            fontWeight: '400',
                            lineHeight: 2,
                            wordWrap: 'break-word',
                        }}
                    >
                        로그인을 위해 아이디와 비밀번호를 입력해주세요.
                    </div>
                </div>
                <div
                    className="InputAndButton"
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: 16,
                        display: 'flex',
                    }}
                >
                    <div
                        className="Field"
                        style={{
                            width: 480,
                            height: 68,
                            paddingLeft: 16,
                            paddingRight: 16,
                            paddingTop: 8,
                            paddingBottom: 8,
                            background: 'white',
                            borderRadius: 8,
                            border: '1px #E0E0E0 solid',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: 16,
                            display: 'inline-flex',
                        }}
                    >
                        <label
                            htmlFor="id"
                            style={{
                                color: '#828282',
                                fontSize: 20,
                                fontFamily: 'Inter',
                                fontWeight: '500',
                                lineHeight: 2,
                                wordWrap: 'break-word',
                            }}
                        >
                            ID
                        </label>
                        <input
                            id="id"
                            type="text"
                            placeholder="Enter your ID"
                            style={{
                                width: '100%',
                                border: 'none',
                                outline: 'none',
                            }}
                        />
                    </div>
                    <div
                        className="Field"
                        style={{
                            width: 480,
                            height: 68,
                            paddingLeft: 16,
                            paddingRight: 16,
                            paddingTop: 8,
                            paddingBottom: 8,
                            background: 'white',
                            borderRadius: 8,
                            border: '1px #E0E0E0 solid',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: 16,
                            display: 'inline-flex',
                        }}
                    >
                        <label
                            htmlFor="password"
                            style={{
                                color: '#828282',
                                fontSize: 20,
                                fontFamily: 'Inter',
                                fontWeight: '500',
                                lineHeight: 2,
                                wordWrap: 'break-word',
                            }}
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            style={{
                                width: '100%',
                                border: 'none',
                                outline: 'none',
                            }}
                        />
                    </div>
                    <Link to="/login_home">
                        <div
                            className="Button"
                            style={{
                                width: 480,
                                height: 68,
                                paddingLeft: 16,
                                paddingRight: 16,
                                background: 'black',
                                borderRadius: 8,
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 8,
                                display: 'inline-flex',
                            }}
                        >
                            <div
                                style={{
                                    color: 'white',
                                    fontSize: 16,
                                    fontFamily: 'Inter',
                                    fontWeight: '500',
                                    lineHeight: 2,
                                    wordWrap: 'break-word',
                                }}
                            >
                                로그인
                            </div>
                        </div>
                    </Link>
                </div>
                <div
                    className="ByClickingContinueYouAgreeToOurTermsOfServiceAndPrivacyPolicy"
                    style={{
                        alignSelf: 'stretch',
                        textAlign: 'center',
                    }}
                >
                    <span
                        style={{
                            color: '#828282',
                            fontSize: 16,
                            fontFamily: 'Inter',
                            fontWeight: '400',
                            lineHeight: 2,
                        }}
                    >
                        By clicking continue, you agree to our{' '}
                    </span>
                    <span
                        style={{
                            color: 'black',
                            fontSize: 16,
                            fontFamily: 'Inter',
                            fontWeight: '400',
                            lineHeight: 2,
                        }}
                    >
                        Terms of Service
                    </span>
                    <span
                        style={{
                            color: '#828282',
                            fontSize: 16,
                            fontFamily: 'Inter',
                            fontWeight: '400',
                            lineHeight: 2,
                        }}
                    >
                        {' '}
                        and{' '}
                    </span>
                    <span
                        style={{
                            color: 'black',
                            fontSize: 16,
                            fontFamily: 'Inter',
                            fontWeight: '400',
                            lineHeight: 2,
                        }}
                    >
                        Privacy Policy
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Login;