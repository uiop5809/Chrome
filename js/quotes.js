const quotes = [
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "사무엘존슨",
  },
  {
    quote: "피할 수 없으면 즐겨라",
    author: "로버트 엘리엇",
  },
  {
    quote:
      "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
    author: "L.론허바드",
  },
  {
    quote: "행복은 습관이다. 그것을 몸에 지니라",
    author: "허버드",
  },
  {
    quote: "그대의 하루 하루를 그대의 마지막 날이라고 생각하라",
    author: "호라티우스",
  },
  {
    quote: "당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 믿는 대로 될 것이다.",
    author: "헨리 포드",
  },
  {
    quote: "최고에 도달하려면 최저에서 시작하라",
    author: "P.시루스",
  },
  {
    quote: "한 번 실패와 영원한 실패를 혼동하지 마라",
    author: "F.스콧 핏제랄드",
  },
  {
    quote: "실패는 잊어라 그러나 그것이 준 교훈을 절대 잊으면 안 된다",
    author: "하버트 개서",
  },
  {
    quote: "평생 살 것처럼 꿈을 꾸어라. 그리고 내일 죽을 것처럼 오늘을 살아라",
    author: "제임스 딘",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuoto = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuoto.quote;
author.innerText = todayQuoto.author;

// innerText와 textContent차이
// innderText는 해당 element 내에서 사용자에게 보여지는 텍스트 값을 읽음
// textContent는 script나 style 태그에 상관없이 노드가 갖고 있는 텍스트 값을 그대로 읽음
