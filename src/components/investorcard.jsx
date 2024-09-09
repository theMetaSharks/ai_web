import React from 'react';
import investorcardImg from '../assets/images/home/investorcardImg.png';

export const InvestorCard = ({Icardimg, IcardTitle, IcardTxt}) => {
    return(
        <div className='invertorcard mb-4'>
            <div className="cardImg">
                {Icardimg===null || Icardimg === undefined ?  <img src={investorcardImg} alt='investorcardImg' className='img-fluid' />:  <img src={Icardimg} alt={IcardTitle} className='img-fluid'/>}                
            </div>
            <div className="cardCnt">
                <div className="cardtit">{IcardTitle}</div>
                <div className="cardPara">{IcardTxt}</div>
            </div>
        </div>
    )
}