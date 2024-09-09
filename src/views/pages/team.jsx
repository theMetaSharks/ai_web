import React from 'react';
import { BlockchainDetailRow } from '../../components/blockchaindetails';
import { InnerPageLayout } from '../../layout/innderpageLayout';

export const TeamPage = () => {
    return(
        <InnerPageLayout>
            <div className='pageContent py-5'>
            <div className='container'>
                <div className='bannerContent mb-5'>
                    <div className='row align-items-center'>
                        <div className="col-lg-12">
                            <div className='hmrbannerCnt mt-lg-5'>
                                <div className='bannerSmTxt'>Brains behind $AITO</div>
                                <h1 className='bannerTit'>Team</h1>
                                <p className='bannerPara'>
                                AI Toreda is not an accidental token launched that aims to be a currency at any point. AI Toreda comes with a vision to normalise cryptocurrency in everyday transactions. The AITO team came up with the idea to create a crypto token that can support transaction and is applicable in common industries starting from Education, Global tourism, Venture capital support for startups and providing a gateway to ease crypto payments. This is now becoming possible with the support of our influential friends, partners and visionary development team that work day and night and focus on making this vision a reality
                                </p>
                                <div className='btnFlex mb-4'>
                                    <button type="button" className='btn btn-outline-primary'>Support Channel</button>
                                    <button type="button" className='btn btn-outline-primary'>Contact for Inquiriess</button>
                                </div>
                            </div>
                        </div>                          
                    </div>
                </div>
            </div>
            </div>       
        <section className='secdeveloper mb-5'>
            <div className="container">
                <h4 className='cmstitle'>Developers</h4>    
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-6'>
                        <div className='developerCard'></div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6'>
                        <div className='developerCard'></div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6'>
                        <div className='developerCard'></div>
                    </div>
                </div>
            </div>
        </section> 
        <section className='secInvestor mb100px'>
            <div className="container">
                <h4 className='cmstitle'>Investors</h4>    
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-6'>
                        <div className='investorCard'></div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6'>
                        <div className='investorCard'></div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6'>
                        <div className='investorCard'></div>
                    </div>
                </div>
            </div>
        </section> 

        <section className="secrow mb-5">
            <div className="container">
                <BlockchainDetailRow />
            </div>
        </section>
        </InnerPageLayout>
    )
}