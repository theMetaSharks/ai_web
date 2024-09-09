import React from 'react';
import { useEffect, useState } from 'react';

import { InnerPageLayout } from '../../layout/innderpageLayout';
import careerdevelopementBanner from '../../assets/images/careerdevelopement-appBanner.png';
import sec2Img from '../../assets/images/aiCareerdevelopment.png';
import WhiteGhostDocs from '../../assets/images/home/WhiteGhost_docs_nu.png';

const serviceCardList = [
  {
    title: 'Career and Candidate Assessment',
    para: 'Our AI-driven analysis identifies areas for improvement and growth based on individual profiles and career aspirations.',
  },
  {
    title: 'Tailored Development Pathways',
    para: 'Customized plans are crafted to address identified gaps, guiding users through targeted learning and skill enhancement.',
  },
  {
    title: 'Mentoring and Monitoring',
    para: 'This groundbreaking system connects users with expert mentors and tracks progress, setting new industry standards for personal development.',
  },
  {
    title: 'Secure Integration',
    para: 'Our tools are designed for seamless integration with third-party KPI systems and tools, ensuring comprehensive support and data security.',
  },
];
export const CarrerDevelopement = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      text: 'Buy AI TOREDA in your Phantom Wallet',
      img: 'https://moralis.io/wp-content/uploads/2023/11/Phantom-Wallet.png', // Phantom Wallet icon
    },
    {
      text: 'Buy AI TOREDA in your Solflare Wallet',
      img: 'https://play-lh.googleusercontent.com/waPoKLrd8VeNAmRt6Nv0k4Dph8NHkMjqnreU9UHBKwhLCs_02C7yq4P5k0ebd0G6qZw', // Solflare Wallet icon
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <InnerPageLayout>
      <div className="bgPrimarbx py-lg-5 pt-5 pb-0 mb100px position-relative zindex0">
        <div className="container">
          <div className="bannerContent my-lg-5 mb-0">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="hmrbannerCnt processingBannercnt">
                  <div className="bannerSmTxt">Project</div>
                  <h1 className="bannerTit mb-2">Career Development</h1>
                  <h4 className="subtitle">Elevate Your Career with AI-Driven Precision</h4>
                  <p className="bannerPara mb-5">
                    Unlock your full potential with our revolutionary Career Development App, powered by AI TOREDA Crypto Token. Our platform is designed to identify and bridge
                    skill gaps, offering personalized development pathways tailored to your unique career goals.
                  </p>

                  <div className="listcnt mb-4">
                    <ul>
                      <li>Ai driven assesments</li>
                      <li>Customized learning plans</li>
                      <li>Access to expert mentors</li>
                    </ul>
                  </div>
                  <div className="mobilehide">
                    <button className="btn btnEmpty fs-25 fw-700 text-white">Buy tokens &#8594;</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                {/* <div className="bannerImg mt-4 mt-lg-0 text-lg-right text-center d-lg-none">
                  <img src={careerdevelopementBanner} alt="careerdevelopementBanner" className="img-fluid" />
                </div> */}
              </div>
            </div>
            <div style={{ marginRight: '-50px', textAlign: 'right' }} className="bannerCareerApp outerimg d-none d-lg-block">
              <img style={{ width: '80%' }} src={careerdevelopementBanner} alt="careerdevelopementBanner" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <section className="sec mb100px">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="mb-4 text-center">
                <img src={sec2Img} alt="sec2img" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <div className="sec-cnt">
                <div className="title">Empower your journey to success with the future of career development.</div>
                <div className="para">
                  Our Personal and Career Development Tools are cutting-edge solutions designed to identify and fulfill the unique needs of individuals seeking to advance their
                  careers. Utilizing a proprietary AI model, our platform accurately pinpoints skills gaps and provides tailored development pathways, ensuring effective and
                  personalized growth for each user.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 sec-cnt">
              <div className="title text-center mb-3">Why AI TOREDA for career development?</div>
              <div className="para text-center mb-5">
                Our tools empower users to achieve their career goals with confidence, setting a new benchmark for personal and professional development in the industry.
              </div>
            </div>
          </div>
          <div className="row">
            {serviceCardList.map((item, index) => (
              <div className="col-lg-6 col-md-6">
                <div className="serviceCard">
                  <h3 className="title">{item.title}</h3>
                  <p className="para">{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="hmrbannerCnt mb100px">
        <div className="slider-container">
          <div className="buyToredaTxt">
            <img src={slides[currentSlide].img} alt="wallet icon" className="img-fluid wallet-icon" />
            <span className="slider-text">{slides[currentSlide].text}</span>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8.5" cy="8.5" r="8.5" fill="#909090" />
              <text fill="white" xmlSpace="preserve" style={{ whiteSpace: 'pre' }} fontFamily="Product Sans" fontSize="11" fontWeight="bold" letterSpacing="0em">
                <tspan x="6" y="13.3885">
                  ?
                </tspan>
              </text>
            </svg>
          </div>
          <div className="slider-dots">
            {slides.map((_, index) => (
              <span key={index} className={`dot ${currentSlide === index ? 'active' : ''}`} onClick={() => setCurrentSlide(index)}></span>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
};
