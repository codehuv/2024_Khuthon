import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const SelectBasicExample = ({ onChange }) => {
    return (
        <Form.Select
            aria-label="Default select menu"
            style={{ width: 260, height: 62 }}
            onChange={(e) => onChange(e.target.value)}
        >
            <option value="">원하는 요일을 선택하세요.</option>
            <option value="월요일">월요일</option>
            <option value="화요일">화요일</option>
            <option value="수요일">수요일</option>
            <option value="목요일">목요일</option>
            <option value="금요일">금요일</option>
            <option value="토요일">토요일</option>
            <option value="일요일">일요일</option>
        </Form.Select>
    );
};

const fetchSearchResults = async (keyword, weekday) => {
    const response = await fetch('http://localhost:5000/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ keyword, weekday }),
    });
    
    const data = await response.json();
    return data;
};

const SocialMediaComment = ({ name, daysAgo, destination, description }) => {
    return (
        <div
            className="social-media-post"
            style={{
                width: 350,
                height: 'auto',
                background: 'white',
                borderRadius: 8,
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                paddingRight: 95,
                marginBottom: 20,
                textAlign: 'left',
            }}
        >
            <div className="post-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="meta-data" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="name-group" style={{ fontWeight: 600 }}>
                        {name} (최근 여행지: {destination})
                    </div>
                    <div className="day-ago" style={{ color: '#828282' }}>
                        {daysAgo} days ago
                    </div>
                </div>
            </div>
            <div className="post-description">{description}</div>
        </div>
    );
};

const CourseSelect = () => {
    const [city, setCity] = useState('');
    const [weekday, setWeekday] = useState('');
    const [results, setResults] = useState({});

    const handleSearch = async () => {
        if (!city || !weekday) {
            alert('도시와 요일을 입력해주세요!');
            return;
        }
        const searchResults = await fetchSearchResults(city, weekday);
        setResults(searchResults);
    };

    return (
        <div
            className="auth"
            style={{
                width: 1920,
                height: 1080,
                position: 'relative',
                background: 'white',
            }}
        >
            <div
                className="copy"
                style={{
                    position: 'absolute',
                    top: 255,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 4,
                }}
            >
                <div
                    style={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: 40,
                        fontFamily: 'Inter',
                        fontWeight: 600,
                        lineHeight: '60px',
                        wordWrap: 'break-word',
                    }}
                >
                    언제 어느 곳으로 여행하길 원하시나요?
                </div>
            </div>

            {/* Input Fields */}
            <div
                className="input-and-button"
                style={{
                    position: 'absolute',
                    top: 350,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                }}
            >
                <div
                    className="input-field-with-button"
                    style={{
                        width: 700, // Adjusted width
                        display: 'flex',
                        gap: 16,
                        alignItems: 'center',
                    }}
                >
                    <div
                        className="field"
                        style={{
                            flex: 1,
                            height: 62,
                            padding: 16,
                            background: 'white',
                            borderRadius: 8,
                            border: '1px solid #E0E0E0',
                            display: 'flex',
                            alignItems: 'center',
                            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        <input
                            className="label"
                            type="text"
                            placeholder="원하는 도시를 입력하세요."
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            style={{
                                width: '100%',
                                border: 'none',
                                outline: 'none',
                                color: '#828282',
                                fontSize: 20,
                                fontWeight: 500,
                            }}
                        />
                    </div>
                    <SelectBasicExample onChange={setWeekday} />
                    <div
                        className="button-new"
                        style={{
                            padding: '24px 32px',
                            background: 'black',
                            borderRadius: 8,
                            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}
                        onClick={handleSearch}
                    >
                        <div
                            className="flight"
                            style={{
                                color: 'white',
                                fontSize: 20,
                                fontWeight: 500,
                            }}
                        >
                            검색하기!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSelect;