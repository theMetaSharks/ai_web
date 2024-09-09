import React from 'react';
import { BlockchainDetailRow } from '../../components/blockchaindetails';
import { InnerPageLayout } from '../../layout/innderpageLayout';
import { Link } from 'react-router-dom';

export const ContactUsPage = () => {
    return (
        <InnerPageLayout>
            <div className='pageContent py-5'>
                <div className='container'>
                    <div className='bannerContent mb-5'>
                        <div className='row align-items-center'>
                            <div className="col-lg-12">
                                <div className='hmrbannerCnt mt-lg-5'>
                                    <div className='bannerSmTxt'>Lets Talk</div>
                                    <h1 className='bannerTit'>Contact us.</h1>
                                    <p className='bannerPara'>
                                        If you have any suggestion or business partnership inquiries then we are keen to hearing from you. Get in touch with our business team.
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
                       <div className="col-12">
                        <div className="mycard">
                            <div className='cmstitle fw-700 text-center mb-5'>Submit Inquiry</div>
                            <div className='row'>
                                <div className="col-lg-6">
                                    <div className="form-group formInputs contactInputs">
                                        <input className='form-control' type='text' placeholder='*First name'/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group formInputs contactInputs">
                                        <input className='form-control' type='text' placeholder='*Last name'/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group formInputs contactInputs">
                                        <input className='form-control' type='text' placeholder='*Company name'/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group formInputs contactInputs">
                                       <select className='form-control'>
                                          <option>Select inquiry type</option>
                                       </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group formInputs contactInputs">
                                        <input className='form-control' type='text' placeholder='*Email address'/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <input type='file' className='fileattach' id='fileattach' />
                                    <label htmlFor='fileattach' className='btn btn-outline-primary fs-24 fw-700 py-2 h-auto round15 mb-3'>Add attachments</label>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group formInputs contactInputs">
                                        <textarea className='form-control' rows={5} placeholder='*Type your message...'></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-primary rounded-15 fs-24 fw-700 h-auto py-2 btn-w225'>Submit</button>
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
