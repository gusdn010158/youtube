import React from 'react';
import Main1 from './Main1';
function Time(props) {
    const Times=[
        [ "https://andar.co.kr/web/product/small/202303/bbfe47bb11413fcc1f24283eaf759442.jpg" ,"마인크래프트 최초 하늘섬 발견!!","사진","2일전"],
        [ "https://andar.co.kr/web/product/small/202303/bbfe47bb11413fcc1f24283eaf759442.jpg" ,"마인크래프트 최초 하늘섬 발견!!","사진","2일전"],
        [ "https://andar.co.kr/web/product/small/202303/bbfe47bb11413fcc1f24283eaf759442.jpg" ,"마인크래프트 최초 하늘섬 발견!!","사진","2일전"],
        [ "https://andar.co.kr/web/product/small/202303/bbfe47bb11413fcc1f24283eaf759442.jpg" ,"마인크래프트 최초 하늘섬 발견!!","사진","2일전"],
        [ "https://andar.co.kr/web/product/small/202303/bbfe47bb11413fcc1f24283eaf759442.jpg" ,"마인크래프트 최초 하늘섬 발견!!","사진","2일전"],
        [ "https://andar.co.kr/web/product/small/202303/bbfe47bb11413fcc1f24283eaf759442.jpg" ,"마인크래프트 최초 하늘섬 발견!!","사진","2일전"]
      ];
        const Time=Times.map((v)=>(<Main1 img={v[0]} name={v[1]} price={v[2]} day={v[3]}/>));
    return (
        <div className="dd">
        {Time}
       </div>
    );
}

export default Time;