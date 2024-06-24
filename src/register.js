import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Register = () => {
    return (
        <div
            className="Auth"
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                background: 'white',
            }}
        >
            <div
                className="Content"
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingRight:500,
                    margin:380,
                    gap: 24,
                    display: 'flex',
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
                            lineHeight: '60px',
                            wordWrap: 'break-word',
                        }}
                    >
                        처음이신가요? 여러분의 회원가입을 도와드립니다!
                    </div>
                    <div
                        style={{
                            textAlign: 'center',
                            color: 'black',
                            fontSize: 24,
                            fontFamily: 'Inter',
                            fontWeight: '400',
                            lineHeight: '36px',
                            wordWrap: 'break-word',
                        }}
                    >
                        여러분의 이름과 사용하실 아이디, 비밀번호를 입력해주세요.
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
                            marginTop: 16, // Add margin here
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
                            htmlFor="name"
                            className="Label"
                            style={{
                                color: '#828282',
                                fontSize: 20,
                                fontFamily: 'Inter',
                                fontWeight: '500',
                                lineHeight: '30px',
                                wordWrap: 'break-word',
                            }}
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            style={{
                                width: '100%',
                                border: 'none',
                                outline: 'none',
                            }}
                            placeholder="Enter your name"
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
                            marginTop: 16, // Add margin here
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
                            className="Label"
                            style={{
                                color: '#828282',
                                fontSize: 20,
                                fontFamily: 'Inter',
                                fontWeight: '500',
                                lineHeight: '30px',
                                wordWrap: 'break-word',
                            }}
                        >
                            ID
                        </label>
                        <input
                            id="id"
                            type="text"
                            style={{
                                width: '100%',
                                border: 'none',
                                outline: 'none',
                            }}
                            placeholder="Enter your ID"
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
                            marginTop: 16, // Add margin here
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
                            className="Label"
                            style={{
                                color: '#828282',
                                fontSize: 20,
                                fontFamily: 'Inter',
                                fontWeight: '500',
                                lineHeight: '30px',
                                wordWrap: 'break-word',
                            }}
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            style={{
                                width: '100%',
                                border: 'none',
                                outline: 'none',
                            }}
                            placeholder="Enter your password"
                        />
                    </div>
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
                            marginTop: 16, // Add margin here
                        }}
                    >
                        <Link to = "/register_success">
                        <button
                            style={{
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Inter',
                                fontWeight: '500',
                                lineHeight: '24px',
                                wordWrap: 'break-word',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            회원가입
                        </button>
                        </Link>
                    </div>
                </div>
                <div
                    className="ByClickingContinueYouAgreeToOurTermsOfServiceAndPrivacyPolicy"
                    style={{
                        alignSelf: 'stretch',
                        textAlign: 'center',
                        color: '#828282',
                        fontSize: 16,
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        lineHeight: '24px',
                        wordWrap: 'break-word',
                    }}
                >
                    By clicking continue, you agree to our{' '}
                    <span
                        style={{
                            color: 'black',
                            cursor: 'pointer',
                        }}
                    >
                        Terms of Service
                    </span>{' '}
                    and{' '}
                    <span
                        style={{
                            color: 'black',
                            cursor: 'pointer',
                        }}
                    >
                        Privacy Policy
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Register;