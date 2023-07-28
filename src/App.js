import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faSquareCaretRight} from "@fortawesome/free-solid-svg-icons";
import { faGreaterThan} from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay} from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft} from "@fortawesome/free-solid-svg-icons";
import { faClapperboard} from "@fortawesome/free-solid-svg-icons";
import { faClock} from "@fortawesome/free-solid-svg-icons";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {faFire} from "@fortawesome/free-solid-svg-icons";
import {faMusic} from "@fortawesome/free-solid-svg-icons";
import {faFilm} from "@fortawesome/free-solid-svg-icons";
import {faTowerBroadcast} from "@fortawesome/free-solid-svg-icons";
import {faGamepad} from "@fortawesome/free-solid-svg-icons";
import {faTrophy} from "@fortawesome/free-solid-svg-icons";
import {faLightbulb} from "@fortawesome/free-solid-svg-icons";
import {faGear} from "@fortawesome/free-solid-svg-icons";
import {faFlag} from "@fortawesome/free-solid-svg-icons";
import {faQuestion} from "@fortawesome/free-solid-svg-icons";
import {faExclamation} from "@fortawesome/free-solid-svg-icons";
import './App.css';
import {Link,Routes,Route} from "react-router-dom";
import Main from "./Main";
import Time from "./Time";
import Game from "./Game";
import Time1 from "./Time1";


function App() {
  
  return (
    <div className="App">
      <div className="header1">
<div className="header">
<div className="header_logo">
  <div className="header_logo_menu"><FontAwesomeIcon icon={faBars} /></div>
  <img className="header_logo_y" src={require("./img/youtube.png")} alt="youtube"/>
</div>
<div className="header_search">
 <input className="header_search_input">
  
 </input>
 <button className="header_search_button">
 <FontAwesomeIcon icon={faMagnifyingGlass} />
 </button>
 <div className="header_search_speech"><FontAwesomeIcon icon={faMicrophone} /></div>
  </div>
<div className="header_menu">
  <div className="header_menu_create"><FontAwesomeIcon icon={faFolderPlus} /></div>
  <div className="header_menu_ball"><FontAwesomeIcon icon={faBell} /></div>
  <div className="header_menu_name">이</div>
</div>
</div>


   
  
</div>
<Routes>
<Route path="/1" element={<Time1/>}/>
</Routes>


<div className="nav">
<div className="nav2">
  <div className="nav2_menu">
  <div>
  <FontAwesomeIcon icon={faHouse} />
    <h3>홈</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faPlay} />
  <h3>shorts</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faForward} />
  <h3>구독</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faSquareCaretRight} />
  <h3>Originals</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faGreaterThan} />
  <h3>Youtube Music</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faCirclePlay} />
  <h3>보관함</h3>
  </div>
  </div>

  <div className="nav2_menu2">
  <div>
  <FontAwesomeIcon icon={faClockRotateLeft} />
  <h3>시청기록</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faCirclePlay}/>
  <h3>내 동영상</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faClapperboard} />
  <h3>내 영화</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faClock} />
  <h3>나중에 볼 동영상</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faDownload} />
  <h3>오프라인 저장 동영상</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faAngleDown}/>
  <h3>더보기</h3>
  </div>
  </div>
  <div className="nav2_sub">
    <h3>구독</h3>

  </div>
  <div className="nav2_menu3">
    <h3>탐색</h3>
    <div>
    <FontAwesomeIcon icon={faFire} />
  <h3>인기 급상승</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faMusic} />
  <h3>음악</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faFilm} />
  <h3>영화</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faTowerBroadcast} />
  <h3>실시간</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faGamepad} />
  <h3>게임</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faTrophy} />
  <h3>스포츠</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faLightbulb} />
  <h3>학습</h3>
  </div>
  </div>
  <div className="nav2_menu4">
  <div>
  <FontAwesomeIcon icon={faGear} />
  <h3>설정</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faFlag} />
  <h3>신고 기록</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faQuestion} />
  <h3>고객 센터</h3>
  </div>
  <div>
  <FontAwesomeIcon icon={faExclamation}/>
  <h3>의견 보내기</h3>
  </div>
  </div>
  <div className="nav2_menu5">
    <div>정보보도자료저작권문의하기크리에이터광고개발자</div>
   <div>약관개인정보처리방침정책 및 안전YouTube 작동의 원리새로운 기능 테스트하기</div> 
   <div>© 2023 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain View CA 94043, USA, 0807-882-594 (무료), yt-support-solutions-kr@google.com, 호스팅: Google LLC, 사업자정보, 불법촬영물 신고
크리에이터들이 유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을 판매하지 않으며, 그에 대한 책임을 지지 않습니다.</div>
  </div>
  </div>
    </div>
    <div className="header_bottom">
      <div className="header_b">
      <div className="bottom1"><Link to="/">전체</Link></div>
      <div className="bottom2"><Link to="/Game">게임</Link></div>
      <div className="bottom3"><Link to="/Time">실시간</Link></div>
      <div className="bottom4">음악</div>
     
      <div className="bottom7">스케치 코미디</div>
      <div className="bottom8">동계 스포츠</div>
      <div className="bottom9">애니메이션</div>
      <div className="bottom10">관광지</div>
      <div className="bottom11">요리</div>
      <div className="bottom12">액션 어드벤쳐 게임</div>
      <div className="bottom13">축구</div>
      <div className="bottom14">최근 업로드된 영상</div>
      
      </div>
      <div className="main">
      <div className="main1">
   
        <Routes>
       
      <Route path="/*" element={<Main/>}/>
      <Route path="/Time/*" element={<Time/>}/>
      <Route path="/Game/*" element={<Game/>}/>
      </Routes>
    
     
      </div>
    </div>
</div>

</div>
  );
}

export default App;
