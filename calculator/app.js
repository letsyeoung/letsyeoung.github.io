//앨리먼트 불러오기
const dayStart = document.querySelector(".d_cal_ing");
const dayStartDate = document.querySelector(".d_cal_data");
const passed = document.querySelector(".d_cal_desc");

//입력창 생성
const inputStartDay = prompt("기념일을 입력하세요", "xxxx-xx-xx")

function inputDayValue(event) {
  event.preventDefault();
}

//시작일 생성
const today = new Date();
const startDay = new Date(inputStartDay);
const year = startDay.getFullYear();
const month = startDay.getMonth()+1; //0부터 시작하기 때문에.
const day = startDay.getDate();
dayStartDate.innerHTML = `${year}년 ${month}월 ${day}일 <br/>`

//날짜 계산
const startMilli = startDay.getTime();
const todayMilli = today.getTime();
const calcDay = 24 * 60 * 60 * 1000; //밀리초->하루 바꾸기.
const passedDay = Math.round((todayMilli-startMilli) /  calcDay);
passed.innerHTML = `${passedDay} 일 지났습니다.`

//기념일 함수
calcDate(100);
calcDate(200);
calcDate(300);
calcDate(365);

 function calcDate(number) {
  const futureMilli = startMilli+(calcDay * number);
  const todayIs = Math.round((futureMilli - todayMilli) / calcDay);
  const newDay = new Date(futureMilli);
  let isYear = newDay.getFullYear( );  // ‘연도’를 가져와 year 변수에 저장합니다.
  let isMonth = newDay.getMonth( ) +1;  // ‘월’을 가져와 month 변수에 저장합니다.
  let isDate = newDay.getDate( );  // ‘일’을 가져와 date 변수에 저장합니다.

document.querySelector("#date"+number).innerHTML = `<b>${todayIs}일</b> 남았습니다 :) <br/> ~${isYear}년 ${isMonth}월 ${isDate}일~` 

 
 }


