import React, { useState } from 'react';
import axios from 'axios';

const Realtime = () => {
  const [responseData, setResponseData] = useState(null);

  const handleClick = () => {
    var url = 'http://apis.data.go.kr/1613000/SubwayInfoService/getSubwaySttnAcctoSchdulList';
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=ABh0rO8gQOEEfBcY6OtLM3GfP36L6wHiFAI7G3hFJQ0A26HNv4wsBAUc0dLFrwrKYri0T0tocsvm3X6wDxLNyA%3D%3D';
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
    queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json');
    queryParams += '&' + encodeURIComponent('subwayStationId') + '=' + encodeURIComponent('MTRARA1A01');
    queryParams += '&' + encodeURIComponent('dailyTypeCode') + '=' + encodeURIComponent('01');
    queryParams += '&' + encodeURIComponent('upDownTypeCode') + '=' + encodeURIComponent('D');

    axios.get(url + queryParams)
      .then(response => {
        // Update the state with the received data
        setResponseData(response.data);
        console.log(response);
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}${minutes}`;
  };

  const calculateArrivalTime = (depTime) => {
    const currentTime = getCurrentTime();
    const timeDiff = parseInt(depTime, 10) - parseInt(currentTime, 10);

    if (timeDiff < 0) {
      return '이미 출발했습니다.';
    } else {
      const minutes = Math.floor(timeDiff / 100); // Assuming depTime format: "HHmm"
      return `약 ${minutes}분 후 도착 예정`;
    }
  };

  return (
    <div>
      <button onClick={handleClick}>API 요청 보내기</button>
      {responseData && (
        <div>
          <h2>지하철 도착 예정 시간:</h2>
          <ul>
            {responseData.response.body.items.item.map((subway, index) => (
              <li key={index}>
                {`${subway.subwayStationNm}행: ${calculateArrivalTime(subway.depTime)}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Realtime;
