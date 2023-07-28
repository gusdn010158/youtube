import React from 'react';
import Main1 from './Main1';
import './Main.css';
import {Link} from "react-router-dom";
function Main() {
    const Mains=[
        [ "https://atimg.sonyunara.com/files/attrangs/new_banner/1681875770_0.png" ,"마인크래프트 최초 하늘섬 발견!!","사진","2일전"]];
        const Main=Mains.map((v)=>(<Main1 img={v[0]} name={v[1]} price={v[2]} day={v[3]}/>));
    return (
        
     <div className="dd"> 
        <Link to="/1">{Main}</Link>
        {Main}{Main}{Main}{Main} 
       </div>
      
    
       
       
          
        
       
    );
}

export default Main;