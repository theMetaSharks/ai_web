import React from 'react';
import { Airdropscomingsoon } from './Airdropscomingsoon';
import { AITOcommunity } from './AITOCommunity';

export const AirdropSection = () => {
    return(
                <div className="row align-items-center">
                            <div className="col-lg-6">
                                <Airdropscomingsoon />
                            </div>
                            <div className='col-lg-3 text-center px-lg-5'>
                                <div className='border-right-black h-100'></div>
                            </div>
                            <div className="col-lg-3 ">
                                <AITOcommunity />
                            </div>
             </div>
    )
}