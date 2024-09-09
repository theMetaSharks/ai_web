import React from 'react';
import { BlockchainDetailRow } from '../../components/blockchaindetails';
import { InnerPageLayout } from '../../layout/innderpageLayout';
import { Link } from 'react-router-dom';

export const CustomerSupport = () => {
    return (
        <InnerPageLayout>
            <div className='pageContent py-5'>
                <div className='container'>
                    <div className='bannerContent mb-5'>
                        <div className='row align-items-center'>
                            <div className="col-lg-12">
                                <div className='hmrbannerCnt mt-lg-5'>
                                    <div className='bannerSmTxt'>Platform</div>
                                    <h1 className='bannerTit'>Customer Support</h1>
                                    <p className='bannerPara'>
                                    We have your back so no need to worry rest assured.. AITO is committed to bridging the gap between the platform and customers. For your reference we have compiled frequently asked questions to solve your queries, If you need further assistance you can get in touch with us on out Telegram channel or submit an inquiry through the contact form.
                                    </p>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='sec mb100px'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="cutomerSupportCard">
                            <div className='support-title'>Support</div>
                            <div className='support-para mb-5'>Reach out to our support team directly with your concerns through the given channels. </div>
                                <div className='support-label mb-3'><strong>Email:</strong> support@aitoreda.io</div>
                                <div className='support-label'><strong>Telegram:</strong> Join telegram channel</div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="cutomerSupportCard">
                            <div className='support-title'>Contact</div>
                            <div className='support-para mb-5'>We are open to suggestions, complaints and business collaborations. Reach out to us to partner.</div>
                            <div>
                                <button className='btn btn-primary fs-24 fw-700 rounded-15 h-auto px-4 py-2'>Contact us</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='lightBgsection mb100px'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="secTitle2 mb-3">
                                    Want to get more instant answers? 
                            </div>
                            <p className='fs-20 fw-400'>Visit our FAQs page to get instant answers to your queries.</p>
                        </div>
                        <div className="col-lg-4 text-lg-right">
                                <Link to={''} className='btn btn-outline-primary round15'>Frequently Asked Questions </Link>
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
