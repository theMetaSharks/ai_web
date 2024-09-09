import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import { BlockchainDetailRow } from '../../components/blockchaindetails';
import { InnerPageLayout } from '../../layout/innderpageLayout';
import { Link } from 'react-router-dom';

export const FAQPage = () => {
    const [activeTab, setActiveTab] = useState('General');

    const toggleTab = tab => {
        if(activeTab !==tab) setActiveTab(tab)
    }
    return (
        <InnerPageLayout>
            <div className='pageContent py-5'>
                <div className='container'>
                    <div className='bannerContent mb-5'>
                        <div className='row align-items-center'>
                            <div className="col-lg-7">
                                <div className='hmrbannerCnt mt-lg-5'>
                                    <div className='bannerSmTxt'>Frequently Asked Questions</div>
                                    <h1 className='bannerTit'>FAQs’</h1>
                                    <p className='bannerPara mb-5'>
                                        Get instant answers most frequently asked questions bout AI TOREDA token. If your question is not covered or if you are not satisfied with the answer provided to your question, then feel free to get in touch with us.
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

            <section className='mb100px'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-4">
                            <Nav pills vertical className='faqtab'>
                                <NavItem>
                                    <NavLink className={classnames({ active: activeTab === 'General' })}
                                        onClick={() => { toggleTab('General'); }} >
                                        General
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={classnames({ active: activeTab === 'Funtionality' })}
                                        onClick={() => { toggleTab('Funtionality'); }} >
                                        Funtionality
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={classnames({ active: activeTab === 'AcquisitionTrading' })}
                                        onClick={() => { toggleTab('AcquisitionTrading'); }} >
                                        Acquisition & Trading
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={classnames({ active: activeTab === 'Tokenization' })}
                                        onClick={() => { toggleTab('Tokenization'); }} >
                                        Tokenization
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={classnames({ active: activeTab === 'TechnologyCode' })}
                                        onClick={() => { toggleTab('TechnologyCode'); }} >
                                        Technology and Code
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={classnames({ active: activeTab === 'AuthenticationSecurity' })}
                                        onClick={() => { toggleTab('AuthenticationSecurity'); }} >
                                        Authentication and Security
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                        <div className="col-lg-8">
                            <div className="faqMaincard scroller">
                                <div className=''>
                                <TabContent activeTab={activeTab}>
                                <TabPane tabId="General">
                                    <div className='faqcard'>
                                        <div className='faqTit'>What is AI TOREDA - $AITO?</div>
                                        <div className='faqPara'>AITOREDA is a groundbreaking cryptocurrency that leverages the power of Trust Relationship Domains (TRDs) to create a secure and efficient digital ecosystem. Unlike traditional cryptocurrencies that rely on complex mining processes, AITOREDA offers a user-friendly and sustainable approach to digital currency.</div>
                                    </div>
                                    <div className='faqcard'>
                                        <div className='faqTit'>What are the benefits of using AITOREDA?</div>
                                        <div className='faqPara'>
                                            <p><b>Security:</b> AITOREDA's TRD-based system enhances security and trust within the network.</p>
                                            <p><b>Efficiency:</b> Transactions are processed rapidly and with minimal fees.</p>
                                            <p><b>Sustainability:</b> AITOREDA operates without the energy-intensive processes associated with mining.</p>
                                            <p><b>Accessibility:</b> The platform is designed to be user-friendly, making it accessible to a wide range of users.</p>
                                        </div>
                                    </div>
                                    <div className='faqcard'>
                                        <div className='faqTit'>How is AI TOREDA different from other crypto currencies?</div>
                                        <div className='faqPara'>AITOREDA stands out by its unique TRD-based architecture, which prioritizes trust and security. Unlike many other cryptocurrencies that rely on complex algorithms and energy-intensive mining, AITOREDA offers a simpler and more sustainable approach.</div>
                                    </div>
                                    <div className='faqcard'>
                                        <div className='faqTit'>Who is the team behind AITOREDA?</div>
                                        <div className='faqPara'>
                                            [Provide information about the AITOREDA team, including their expertise and experience in the blockchain and cryptocurrency industry.]                                            
                                        </div>
                                        <div className='mt-4'><Link to={''} className="learnMoreLink">Learn more about AI TOREDA team and its investors here &#8594;</Link></div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="Funtionality">
                                
                                </TabPane>
                                <TabPane tabId="AcquisitionTrading">
                                </TabPane>
                                <TabPane tabId="Tokenization">
                                </TabPane>
                                <TabPane tabId="TechnologyCode">
                                </TabPane>
                                <TabPane tabId="AuthenticationSecurity">
                                </TabPane>
                                </TabContent>
                                </div>
                            </div>
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