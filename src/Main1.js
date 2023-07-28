import React from 'react';
import './Main.css';


function Main1(props) {
    return (
        <div className="main1_item">
           <img className="main1_ssam" src={props.img} alt="dd"/>
            
            <div className="main1_bottom">
                <div className="main1_pt">
                    <div>{props.price}</div>
                </div>
                <div className="main1_name">
                    <div className="main1_title">{props.name}</div>
                    <div className="main1_day">{props.day}</div>
                </div>
            </div>
           
           
        </div>
    );
}

export default Main1;