1.CSS

display : flex
-> 객체들을 수평으로 '정렬'

flex-direction: row,row-reverse,colum,colum-reverse;
-> 가로,가로역방향,세로,세로역방향 기준으로 정렬 방향을 잡는다.

margin - 'direction' : Xpx;
-> direction 방향만큼 띄어준다.

curosr: A;
-> 객체 위에 커서를 대면, A기능을 하도록 한다.

all: unset
-> all은 모든 속성에 대해서, unset은 부모로부터 상속할 값이 존재하면 상속값을, (inherit 키워드)
    아니라면 초깃값을 사용하도록 한다. (initial 키워드)
 
padding: Apx Bpx Cpx Dpx;
-> 'content' 와 'border'의 사이의 공간. 
( A-> 위 B-> 오른쪽 C-> 아래 D-> 왼쪽 )

button:active { ~~ }
-> 버튼이 눌렸을 때, 즉 활성화 되었을 때.

transform: scale( A );
-> A배 만큼 확대합니다.

align-item: A;
-> A쪽으로 자식 객체들을 전부 위치 시킨다.

2.JavaScript

(Canvas type Obj)A.getContext( "A" );
->A 요소를 캔버스 객체에 설정한다. 
context는 캔버스 안에서 픽셀 하나하나를 다루는 것.
즉, 픽셀을 다루는 객체로 설정하는 것이다.
또한 CSS-> 보여주기 위한 크기를 나타낸 것이고,
마찬가지로 기능 구현인 자바스크립트에서도 픽셀을 다루기 위해
캔버스 사이즈를 따로 설정해야 된다.

{
 beginPath() -> A가 위치한 픽셀을 기준으로, 시작점을 정함
 moveTo(x,y) -> x,y좌표로 A가 이동
 lineTo(x,y) -> 그 위치에 선의 끝맺음을 설정.
 stroke() 등등 -> 실제로 선을 그어줌. 그려주는 함수
 