import React from 'react';
import './Login.css';

const Card = (props) => {
    return (
        <div className="card">
            <div className="left">

            </div>
            <div className="right">
                <div className={props.div}>
                    {props.text1}
                </div>
                <div className={"text2"}>
                    {props.text2}
                </div>
            </div>
        </div>
    );
};

export default Card;
