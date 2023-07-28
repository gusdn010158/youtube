import React from 'react';
import './Main.css';
import Main1 from './Main1';
function Game(props) {
    const Games=[
        [ "https://atimg.sonyunara.com/files/attrangs/new_banner/1681121086_0.png" ,"마인크래프트 최초 하늘섬 발견!!","사진","2일전"],
        [ "https://atimg.sonyunara.com/files/attrangs/new_banner/1681121086_0.png" ,"마인크래프트 최초 하늘섬 발견!!","사진","2일전"],
        [ "https://atimg.sonyunara.com/files/attrangs/new_banner/1681121086_0.png" ,"마인크래프트 최초 하늘섬 발견!!","사진","2일전"],
        [ "https://atimg.sonyunara.com/files/attrangs/new_banner/1681121086_0.png" ,"마인크래프트 최초 하늘섬 발견!!","사진","2일전"],
        [ "https://atimg.sonyunara.com/files/attrangs/new_banner/1681121086_0.png" ,"마인크래프트 최초 하늘섬 발견!!","사진","2일전"],
        [ "https://atimg.sonyunara.com/files/attrangs/new_banner/1681121086_0.png" ,"마인크래프트 최초 하늘섬 발견!!","사진","2일전"]];
        const Game=Games.map((v)=>(<Main1 img={v[0]} name={v[1]} price={v[2]} day={v[3]}/>));
    return (
        <div className="dd">
        {Game}
       </div>
    );
}

export default Game;