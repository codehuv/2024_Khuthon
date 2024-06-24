import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StarRating = ({ rating, setRating }) => {
    const handleStarClick = (index) => {
        setRating(index + 1);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {[...Array(5)].map((_, index) => (
                <div
                    key={index}
                    style={{
                        fontSize: 40,
                        color: index < rating ? 'gold' : 'black',
                        cursor: 'pointer',
                    }}
                    onClick={() => handleStarClick(index)}
                >
                    ☆
                </div>
            ))}
        </div>
    );
};

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    return (
        <div
            className="feedback-page"
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
                className="feedback-navigation"
                style={{
                    width: '90%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: 48,
                }}
            ><Link to = '/mypage'>
            <div
                style={{
                    color: 'black',
                    fontSize: 16,
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    lineHeight: '24px',
                }}
            >
                마이페이지
            </div>
            </Link>
                
                <div
                    className="feedback-button-logout"
                    style={{
                        padding: '14px 24px',
                        background: 'black',
                        borderRadius: 8,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    
                ><Link to = '/'>
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

            {/* Main Content */}
            <div
                className="feedback-content"
                style={{
                    width: 1364,
                    height: 888,
                    background: '#F5F5F5',
                    position: 'relative',
                    marginTop: 40,
                    borderRadius: 8,
                }}
            >
                {/* Sidebar */}
                <div
                    className="feedback-sidebar"
                    style={{
                        width: '100%',
                        height: 176,
                        background: 'white',
                        borderRadius: '8px 8px 0 0',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 8,
                    }}
                >
                    <div
                        className="feedback-recommendation-header"
                        style={{
                            width: '90%',
                            height: 40,
                            background: '#EEEEEE',
                            borderRadius: 8,
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
                            추천할만한 명소
                        </div>
                    </div>
                    <div
                        className="feedback-rating"
                        style={{
                            width: '90%',
                            height: 84,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 8,
                        }}
                    >
                        <div
                            style={{
                                color: 'black',
                                fontSize: 24,
                                fontFamily: 'Inter',
                                fontWeight: 500,
                                lineHeight: '36px',
                            }}
                        >
                            이번 여행을 별점으로 평가한다면?
                        </div>
                        <div
                            className="feedback-stars"
                            style={{
                                width: '100%',
                                height: 40,
                                background: 'white',
                                borderRadius: 8,
                                border: '1px solid #E0E0E0',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <StarRating rating={rating} setRating={setRating} />
                        </div>
                    </div>
                </div>

                {/* Two Columns Section */}
                <div
                    className="feedback-main-content"
                    style={{
                        width: '100%',
                        height: 572,
                        padding: '24px',
                        background: 'white',
                        display: 'flex',
                        gap: 24,
                        justifyContent: 'space-between',
                        borderRadius: '0 0 8px 8px',
                    }}
                >
                    {/* Review Column */}
                    <div
                        className="feedback-review-column"
                        style={{
                            width: 645.5,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8,
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
                            Review
                        </div>
                        <div
                            className="feedback-review-field"
                            style={{
                                width: '100%',
                                height: 516,
                                padding: 24,
                                background: 'white',
                                borderRadius: 8,
                                border: '1px solid #E0E0E0',
                                overflow: 'hidden',
                            }}
                        >
                            <textarea
                                value={review}
                                onChange={handleReviewChange}
                                placeholder="여러분의 여행은 어떠셨나요? 여행에 대한 후기를 남겨주세요."
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    border: 'none',
                                    outline: 'none',
                                    resize: 'none',
                                    fontSize: 16,
                                    fontFamily: 'Inter',
                                    color: 'black',
                                }}
                            />
                        </div>
                    </div>

                    {/* Picture Column */}
                    <div
                        className="feedback-picture-column"
                        style={{
                            width: 645.5,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8,
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
                            Picture
                        </div>
                        <div
                            className="feedback-picture-field"
                            style={{
                                width: 645,
                                height: 516,
                                background: '#F5F5F5',
                                borderRadius: 8,
                                border: '1px solid #E0E0E0',
                            }}
                        />
                    </div>
                </div>

                {/* Footer */}
                <div
                    className="feedback-footer"
                    style={{
                        width: '100%',
                        height: 88,
                        background: 'white',
                        position: 'absolute',
                        bottom: 0,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0 20px',
                    }}
                >
                    <div
                        className="feedback-submit-button"
                        style={{
                            width: 217,
                            height: 50,
                            background: 'black',
                            borderRadius: 8,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Inter',
                                fontWeight: 500,
                                lineHeight: '24px',
                            }}
                        >
                            제출
                        </div>
                    </div>
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
        </div>
    );
};

export default Feedback;