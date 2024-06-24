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

const fetchSearchResults = async (city, weekday) => {
    const response = await fetch('http://localhost:5000/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city, weekday }),
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

    const comments = [
        {
            name: '성*혁',
            daysAgo: 7,
            destination: '수원',
            description: `저는 수원 화성을 방문했습니다. 이곳은 조선 시대에 지어진 성곽으로, 유네스코 세계문화유산에 등재되어 있습니다. 도보로 성곽을 한 바퀴 돌면서, 가이드로부터 이곳의 역사와 건축에 대해 배울 수 있었습니다.`,
        },
        {
            name: '이*성',
            daysAgo: 2,
            destination: '화성',
            description: `저는 화성시의 자연을 직접 느낄 수 있는 에코 투어에 참여했습니다. 이 투어를 통해 지역의 다양한 식물과 동물을 관찰하고, 화성시의 생태계를 지키기 위한 노력에 대해 배울 수 있었습니다.`,
        },
        {
            name: '오*혁',
            daysAgo: 5,
            destination: '용인',
            description: `지난 주말, 용인에서 지속 가능한 여행을 경험할 수 있었습니다. 이번 여행은 환경에 미치는 영향을 최소화하면서도 지역 경제에 긍정적인 기여를 하고자 하는 목적으로 계획되었습니다.`,
        },
    ];

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

            {/* Comments Section */}
            <div
                className="comments-section"
                style={{
                    position: 'absolute',
                    top: 500,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 20,
                }}
            >
                {comments.map((comment, index) => (
                    <SocialMediaComment key={index} {...comment} />
                ))}
            </div>
        </div>
        
    );
    
};

export default CourseSelect;