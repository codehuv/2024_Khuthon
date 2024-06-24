import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyPage = () => {
    const [user, setUser] = useState({
        name: '이규성',
        email: 'GyuseongLee@github.com',
        travelHistory: [
            {
                id: 1,
                destination: '수원',
                date: '2023-03-15',
                review: '자전거 도로가 잘 되어있어서 자전거 여행을 했다.',
                rating: 5,
            },
            {
                id: 2,
                destination: '용인',
                date: '2023-01-10',
                review: '수목원에 방문했다. 좋았다.',
                rating: 4,
            },
            {
                id: 3,
                destination: '남양주',
                date: '2022-11-25',
                review: '농촌 체험 활동을 통해 행복했다.',
                rating: 4,
            },
        ],
    });

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <span key={index} style={{ color: index < rating ? 'gold' : 'black', fontSize: 20 }}>★</span>
        ));
    };

    return (
        <div
            className="mypage"
            style={{
                width: 1440,
                height: 1024,
                position: 'relative',
                background: 'white',
                padding: '40px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {/* Navigation */}
            <div
                className="mypage-navigation"
                style={{
                    width: '90%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: 48,
                }}
            >
                <Link
                    to="/feedback"
                    style={{
                        color: 'black',
                        fontSize: 20,
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        lineHeight: '30px',
                    }}
                >
                    피드백
                </Link>
                <div
                    className="mypage-button-logout"
                    style={{
                        padding: '14px 24px',
                        background: 'black',
                        borderRadius: 8,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                ><Link to = "/">
                    <div
                        style={{
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            lineHeight: '24px',
                        }}
                    >
                        로그아웃
                    </div>
                    </Link>
                </div>
            </div>

            {/* Profile Section */}
            <div
                className="mypage-profile"
                style={{
                    width: 1364,
                    padding: '24px',
                    background: 'white',
                    borderRadius: 8,
                    border: '1px solid #E0E0E0',
                    marginTop: 40,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                }}
            >
                <h2 style={{ fontFamily: 'Inter', fontSize: 24, fontWeight: 500, lineHeight: '32px' }}>프로필</h2>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8,
                    }}
                >
                    <div>
                        <strong>이름:</strong> {user.name}
                    </div>
                    <div>
                        <strong>이메일:</strong> {user.email}
                    </div>
                </div>
            </div>

            {/* Travel History Section */}
            <div
                className="mypage-travel-history"
                style={{
                    width: 1364,
                    padding: '24px',
                    background: 'white',
                    borderRadius: 8,
                    border: '1px solid #E0E0E0',
                    marginTop: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                }}
            >
                <h2 style={{ fontFamily: 'Inter', fontSize: 24, fontWeight: 500, lineHeight: '32px' }}>여행 내역</h2>
                {user.travelHistory.map((trip) => (
                    <div
                        key={trip.id}
                        style={{
                            padding: '16px',
                            background: '#F5F5F5',
                            borderRadius: 8,
                            border: '1px solid #E0E0E0',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8,
                        }}
                    >
                        <div>
                            <strong>목적지:</strong> {trip.destination}
                        </div>
                        <div>
                            <strong>날짜:</strong> {trip.date}
                        </div>
                        <div>
                            <strong>후기:</strong> {trip.review}
                        </div>
                        <div>
                            <strong>평점:</strong> {renderStars(trip.rating)}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div
                className="mypage-footer"
                style={{
                    width: '100%',
                    height: 88,
                    background: 'white',
                    position: 'absolute',
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Link
                    to="/login_home"
                    style={{
                        width: 217,
                        height: 50,
                        background: 'white',
                        borderRadius: 8,
                        border: '1px solid black',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            color: 'black',
                            fontSize: 16,
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            lineHeight: '24px',
                        }}
                    >
                        홈으로
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default MyPage;