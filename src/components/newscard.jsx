import React from 'react';
import newscardImg from '../assets/images/newscardImg.png';

export const NewsCard = ({NcardImg, NcardTitle}) => {
    return(
        <div className='Newscard mb-4'>
        <div className="cardImg">
            {NcardImg===null || NcardImg === undefined ?  <img src={newscardImg} alt='newscardImg' className='img-fluid'/>:  <img src={NcardImg} alt={NcardTitle} className='img-fluid'/>}            
        </div>
        <div className="cardCnt">
            <div className="cardtit">{NcardTitle}</div>            
        </div>
    </div>
    )
}