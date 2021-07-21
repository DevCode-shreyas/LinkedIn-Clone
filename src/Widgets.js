import React from 'react';
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading,subtitle) =>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Easy way to Learn Redux","LinkedIn-clone")}

            {newsArticle("Coronavirus: India updates","Top news - 999 records")}

            {newsArticle("Bitcoin Breaks $22k","crypto - 400 readers")}

            {newsArticle("Tesla in India","soon lounch new car")}

            
        </div>
    )
}

export default Widgets;
