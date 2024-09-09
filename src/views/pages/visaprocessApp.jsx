import React from 'react';
import { useEffect, useState } from 'react';
import { InnerPageLayout } from '../../layout/innderpageLayout';
import visaBannerImg from '../../assets/images/visaproccessImg.png';
import sec2Img from '../../assets/images/furureoftravelSec.png';
import WhiteGhostDocs from '../../assets/images/home/WhiteGhost_docs_nu.png';

const serviceCardList = [
    {
        title: 'End-to-End Visa Services',
        para: 'From initial consultation to final approval, we handle every aspect of the visa process to ensure smooth processing.'
    },
    {
        title: 'Travel Facilitation',
        para: 'Beyond visas, we offer services to assist with travel planning and logistics, tailored to individual needs.'
    },
    {
        title: 'User Centric Design',
        para: 'Our platform prioritizes ease of use, with clear guidance and support throughout the application process.'
    },
    {
        title: 'Expert network integration',
        para: 'Collaboration with seasoned immigration lawyers and service providers ensures efficient case handling.'
    }
]


export const VISAprocessApp = () => {
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
                    <div className='bannerContent mb-5 '>
                        <div className='row align-items-end'>
                            <div className="col-lg-6">
                                <div className='hmrbannerCnt mt-lg-5 processingBannercnt'>
                                    <div className='bannerSmTxt'>Project</div>
                                    <h1 className='bannerTit mb-2'>VISA&nbsp;Processing&nbsp;App</h1>
                                    <h4 className='subtitle'>Simplify Your Visa Process with AI-Powered&nbsp;Precision</h4>
                                    <p className='bannerPara mb-5'>
                                        Experience seamless visa applications with our cutting-edge app, powered by AI TOREDA Crypto Token. Navigate the complexities of visa processing effortlessly, from document submission to approval, all in one secure platform.
                                    </p>

                                    <div className='listcnt mb-4'>
                                        <ul >
                                            <li>Faster processing times,</li>
                                            <li>Accurate information,</li>
                                            <li>Hassle-free journey to your destination.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <button className='btn btnEmpty fs-25 fw-700 text-white'>Buy tokens &#8594;</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='bannerImg mt-4 mt-lg-0 text-lg-right text-center d-xl-none'>
                                    <img src={visaBannerImg} alt='visaBannerImg' className='img-fluid' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='bannerNexusApp mr-5 pr-5 mb-5 d-xl-block d-none'>
                        <img src={visaBannerImg} alt='visaBannerImg' className='img-fluid' />
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
                                <div className="title">Future of travel with the power of AI and cryptocurrency.</div>
                                <div className='para'>Our Visa Processing Tool is a comprehensive and reliable platform designed for purpose-driven travel. Leveraging cutting-edge technology and deep expertise in visa and travel facilitation services, we provide a one-stop solution for all types of visas and related needs. Our system integrates a network of trusted immigration lawyers, service providers, and travel facilitators to streamline and simplify the visa application process.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sec3'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 sec-cnt">
                            <div className="title text-center mb-3">Why AI TOREDA for “visa” processing and travel?</div>
                            <div className='para text-center mb-5'>Our commitment is to make international travel accessible and hassle-free, empowering travelers with a seamless and trustworthy visa processing experience.</div>
                        </div>
                    </div>
                    <div className="row">
                        {serviceCardList.map((item) => (
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
