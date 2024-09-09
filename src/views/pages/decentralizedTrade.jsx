import React from 'react';
import { useEffect, useState } from 'react';
import { InnerPageLayout } from '../../layout/innderpageLayout';
import decentralisedTradeImg from '../../assets/images/decentralisedTrade.png';
import sec2Img from '../../assets/images/futuretradefinance.png';
import WhiteGhostDocs from '../../assets/images/home/WhiteGhost_docs_nu.png';

const serviceCardList = [
    {
        title: 'Comprehensive Trade Solution',
        para: 'Facilitates diverse modes of trade finance, including MT payments, LC (Letter of Credit), SBLC (Standby Letter of Credit), DLC (Documentary Letter of Credit), and discounted rates through internationally recognized banks.'
    },
    {
        title: 'Confidence Matrix & Analytics',
        para: 'Our AI-driven confidence matrix evaluates the reliability of stakeholders, ensuring transparent and secure trade relationships.'
    },
    {
        title: 'Real-time discounts',
        para: 'Provides up-to-date information on discounted rates for various trade finance instruments, optimizing financial planning and execution.'
    },
    {
        title: 'Integrated Blockchain and Stakeholders',
        para: 'Our platform ensures secure, transparent transactions using advanced technology, while seamlessly integrating stakeholders and maintaining compliance with key financial regulations.'
    }
]
export const DecentralisedTrade  = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            text: "Buy AI TOREDA in your Phantom Wallet",
            img: "https://moralis.io/wp-content/uploads/2023/11/Phantom-Wallet.png" // Phantom Wallet icon
        },
        {
            text: "Buy AI TOREDA in your Solflare Wallet",
            img: "https://play-lh.googleusercontent.com/waPoKLrd8VeNAmRt6Nv0k4Dph8NHkMjqnreU9UHBKwhLCs_02C7yq4P5k0ebd0G6qZw" // Solflare Wallet icon
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [slides.length]);


    return (
        <InnerPageLayout>
            <div className="bgPrimarbx py-5 mb100px position-relative zindex0"> 
                <div className="container">
                    <div className='bannerContent mb-5'>
                        <div className='row align-items-center'>
                            <div className="col-lg-7">
                                <div className='hmrbannerCnt mt-lg-5 processingBannercnt'>
                                    <div className='bannerSmTxt'>Project</div>
                                    <h1 className='bannerTit mb-2'>Decentralised Trade</h1>
                                    <h4 className='subtitle'>Finance Application powered by 
                                    AI Toreda</h4>
                                    <p className='bannerPara mb-5'>
                                    Empower your trade transactions with our Decentralized Trade Finance App, powered by AI TOREDA Crypto Token. Designed to build trust and transparency among buyers, suppliers, and financial institutions, our platform offers a comprehensive suite of trade finance solutions.
                                    </p>

                                    <div className='listcnt mb-4'>
                                        <ul >
                                            <li>Real-time discounts</li>
                                            <li>Secure</li>
                                            <li>Transparent</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <button className='btn btnEmpty fs-25 fw-700 text-white'>Buy tokens &#8594;</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className='bannerImg mt-4 mt-lg-0 text-lg-right text-center d-lg-none'>
                                    <img src={decentralisedTradeImg} alt='decentralisedTradeImg' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                            <div className='bannerDecentralisedApp d-none d-lg-block'>
                                <img src={decentralisedTradeImg} alt='decentralisedTradeImg' className='img-fluid' />
                            </div>
                    </div>
                </div>
            </div>
            <section className='sec mb100px'>
                <div className='container'>
                    <div className="row align-items-center">
                        <div className="col-lg-5 order-2 order-lg-1">
                            <div className='mb-4 text-center'>
                                <img src={sec2Img} alt='sec2img' className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-7 order-1 order-lg-2">
                            <div className='sec-cnt'>
                                <div className="title">Experience the future of trade finance with unparalleled security and precision</div>
                                <div className='para'>Our Trade Finance Tools are designed to build and enhance trade confidence among ecosystem stakeholders. Recognizing that trade is a crucial driver for any economy, our platform focuses on fostering trust and transparency between buyers and suppliers, while addressing the complexities of trade finance.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sec3'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 sec-cnt">
                            <div className="title text-center mb-3">Why AI TOREDA for finance?</div>
                            <div className='para text-center mb-5'>Our platform revolutionizes the trade finance landscape, offering a comprehensive, secure, and efficient solution that empowers stakeholders to engage in trade with confidence and clarity.</div>
                        </div>
                    </div>
                    <div className="row">
                        {serviceCardList.map((item, index) => (
                            <div className="col-lg-6 col-md-6">
                                <div className="serviceCard">
                                    <h3 className='title'>{item.title}</h3>
                                    <p className='para'>{item.para}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='hmrbannerCnt mb100px'>
               <div className="slider-container">
                    <div className='buyToredaTxt'>
                        <img src={slides[currentSlide].img} alt="wallet icon" className="img-fluid wallet-icon" />
                        <span className="slider-text">{slides[currentSlide].text}</span>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.5" cy="8.5" r="8.5" fill="#909090" />
                            <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Product Sans" fontSize="11" fontWeight="bold" letterSpacing="0em">
                                <tspan x="6" y="13.3885">?</tspan>
                            </text>
                        </svg>
                    </div>
                    <div className="slider-dots">
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </section>
        </InnerPageLayout>
    )
}
