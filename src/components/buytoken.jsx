import React, { useState } from 'react';
import {ReactComponent as ArrowBtn } from '../assets/images/btnArrow.svg';
import qustionCircle from '../assets/images/qustion-circle.svg';
import { HelpModal } from './modals/helpModal';

export const BuyTokensSells = () => {
    const [helpModal, setHelpModal] = useState(false);

    return(
        <>
        <section className='bglightclr buyTokensec'>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h2 className='title'>Invest before Pre-sale ends</h2>
                        <div className="row align-items-end">
                            <div className="col-lg">
                                <div className='form-group formInputs'>
                                    <label className='fs-18 fw-700'>You pay</label>
                                    <div className="input-group">
                                        <select className='form-control'>
                                            <option>Solona</option>
                                            <option>Solona</option>
                                            <option>Solona</option>
                                        </select>
                                        <div className="input-group-append w-50">
                                            <input className='form-control text-right' type='text' placeholder='0.0' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-auto mb-4 text-center mt-4 mt-lg-0">
                                <button className='btn btn-round-arrow'>
                                    <ArrowBtn />
                                </button>
                            </div>
                            <div className="col-lg">
                                <div className='form-group formInputs'>
                                <label className='fs-18 fw-700'>Token</label>
                                    <div className="input-group">
                                    <input className='form-control' type='text' readOnly placeholder='$AITO' value='$AITO'/>
                                        <div className="input-group-append w-50">
                                            <input className='form-control text-right' type='text' placeholder='0.0' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center mt-4'>
                            <button className='btn btn-outline-primary btn-w96 mr-1' onClick={()=>setHelpModal(true)}>Help <img src={qustionCircle} alt='qustionCircle' /></button>
                            <button className='btn btn-primary btn-w147 ml-1'>BUY TOKENS</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <HelpModal modalOpen={helpModal} modalClose={()=>setHelpModal(false)} />
        </>
    )
}