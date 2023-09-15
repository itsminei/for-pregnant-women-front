
// const TrainArrivalTime = () => {
//   const [trainArrivalTime, setTrainArrivalTime] = useState('');
//   const [currentTime, setCurrentTime] = useState('');

//   useEffect(() => {
//     const fetchTrainArrivalTime = async () => {
//       const url = 'http://apis.data.go.kr/1613000/SubwayInfoService/getSubwaySttnAcctoSchdulList';
//       const queryParams = {
//         serviceKey: 'ABh0rO8gQOEEfBcY6OtLM3GfP36L6wHiFAI7G3hFJQ0A26HNv4wsBAUc0dLFrwrKYri0T0tocsvm3X6wDxLNyA%3D%3D',
//         pageNo: '1',
//         numOfRows: '10',
//         _type: 'json',
//         subwayStationId: 'MTRARA1A01',
//         dailyTypeCode: '01',
//         upDownTypeCode: 'D',
//       };

//       try {
//         const response = await axios.get(url, { params: queryParams });
//         const data = response.data;
//         console.log(data); // 데이터를 콘솔에 출력하거나 원하는 대로 가공합니다.
//         // 여기서는 열차 도착 시간 정보를 추출하여 setTrainArrivalTime 함수를 사용해 업데이트합니다.
//         console.log(response)
//         setTrainArrivalTime(data.response.body.items.item[0].depTime);
//       } catch (error) {
//         console.error('Error fetching train arrival time:', error);
//       }
//     };

//     // 열차 도착 시간 정보를 가져온 후 매 1분마다 열차 도착 시간과 현재 시간의 차이를 업데이트합니다.
//     fetchTrainArrivalTime();
//     const interval = setInterval(fetchTrainArrivalTime, 60000);

//     // 컴포넌트가 unmount 될 때 interval을 정리합니다.
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       {trainArrivalTime ? (
//         <p>{`열차 도착까지 약 ${trainArrivalTime}분 남았습니다.`}</p>
//       ) : (
//         <p>열차 도착 정보를 가져오는 중입니다...</p>
//       )}
//     </div>
//   );
// };

// export default TrainArrivalTime;
