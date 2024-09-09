import React from 'react';
import { useEffect, useState } from 'react';
import { InnerPageLayout } from '../../layout/innderpageLayout';
import nexusBannerImg from '../../assets/images/nexusImg.svg';
import sec2Img from '../../assets/images/nexusImg.png';
import WhiteGhostDocs from '../../assets/images/home/WhiteGhost_docs_nu.png';
import { GoalmapSection } from '../../components/goalsetSection';

const serviceCardList = [
  {
    title: 'Fundraising and Financial Support',
    para: [
      '<strong>Venture Capital Network:</strong> Leverage our extensive network of venture capitalists, angel investors, and financial institutions. We specialize in crafting compelling pitch decks, sophisticated financial models, and robust business plans to captivate and secure investment from the right stakeholders.',
      '<strong>Crowdfunding Strategy:</strong> Receive expert guidance on utilizing crowdfunding platforms to garner capital while simultaneously building a dedicated community around your product or service.',
      '<strong>Grant and Subsidy Assistance:</strong> Benefit from our expertise in identifying and applying for government grants, innovation funds, and various financial aids that align with your business objectives.',
    ],
  },
  {
    title: 'Tech Development',
    para: [
      '<strong>Dedicated Development Teams:</strong> Gain access to elite developers, engineers, and designers who will work collaboratively to build, test, and optimize your technological solutions, ensuring they meet the highest standards of scalability, security, and user experience.',
      '<strong>Tech Mentorship:</strong> Connect with seasoned tech mentors who provide invaluable insights into technology stack selection, best practices, and strategic product development to elevate your startup’s technology.',
      '<strong>Access to Cutting-Edge Resources:</strong> Enjoy preferential access to state-of-the-art development tools, cloud services, and software solutions, often at discounted rates or included in our comprehensive support package.',
    ],
  },
  {
    title: 'Business Expansion',
    para: [
      '<strong>In-Depth Market Insights:</strong> Receive thorough market research and strategic planning services to pinpoint growth opportunities, target customer segments, and forge valuable partnerships.',
      '<strong>Global Networking and Visibility:</strong> Participate in exclusive networking events, workshops, and international conferences designed to connect you with influential industry leaders, potential clients, and strategic partners.',
      '<strong>Legal and Compliance Expertise:</strong> Navigate the complexities of business scaling with support from legal experts who specialize in intellectual property, regulatory compliance, and contract negotiation.',
    ],
  },
  {
    title: 'Digital Currency Integration',
    para: [
      '<strong>Unified Business Ecosystem:</strong> With a goal to onboard over 300 businesses within the first year, AITO will create a cohesive, interconnected network where seamless collaboration and transactions are the norm.',
      '<strong>Innovative Loyalty Programs:</strong> AITO will drive dynamic loyalty and rewards programs, offering businesses and their customers incentives that foster ongoing engagement and retention within the Tech Nexus community.',
      '<strong>Blockchain-Powered Smart Contracts:</strong> Utilize smart contracts facilitated by AITO to ensure transparency, security, and automation in business agreements and transactions.',
      '<strong>Tokenized Equity Opportunities:</strong> Empower startups to tokenize their equity using AITO, providing a cutting-edge method for raising capital and attracting investors.',
    ],
  },
];
export const TechNexusApp = () => {
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
      <div className="bgPrimarbx pt-5 pb-xl-2 pb-0 mb100px nexusappbanner">
        <div className="container">
          <div className="bannerContent mb-xl-5">
            <div className="row align-items-center form-row">
              <div className="col-xl-6">
                <div className="hmrbannerCnt mt-xl-5 processingBannercnt">
                  <div className="bannerSmTxt">Project</div>
                  <h1 className="bannerTit mb-2">Tech Nexus</h1>
                  <h4 className="subtitle">A Comprehensive Tech Hub Incubator powered by AI Toreda</h4>
                  <p className="bannerPara mb-5">
                    Tech Nexus stands at the forefront of innovation, offering an unparalleled tech hub incubator designed to propel startups and emerging tech businesses to new
                    heights. Our mission is to be the catalyst for the next wave of tech entrepreneurship, providing comprehensive support that includes funding, technological
                    expertise, and strategic growth opportunities to ensure rapid and sustainable success.
                  </p>
                  <div>
                    <button style={{ padding: '0px' }} className="btn btnEmpty fs-25 fw-700 text-white">
                      Buy tokens &#8594;
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="bannerImg mt-4 mt-xl-0 text-xl-right text-center d-xl-none">
                  <img src={nexusBannerImg} alt="nexusBannerImg" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-none d-xl-block bannerOuterImg">
          <img src={nexusBannerImg} alt="nexusBannerImg" className="img-fluid" />
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
                <div className="title">About Tech Nexus</div>
                <div className="para">
                  Tech Nexus is not just an incubator—it is a transformative platform that bridges the gap between visionary ideas and tangible success. By integrating
                  comprehensive financial support, cutting-edge technological development, and strategic business expansion services with a pioneering digital currency, Tech Nexus
                  is set to redefine the startup landscape and foster a dynamic, interconnected ecosystem of thriving businesses.
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
              <div className="title text-center mb-3">Why AI TOREDA for Tech Nexus?</div>
              <div className="para text-center mb-5">
                Tech Nexus will lead the way in integrating a proprietary digital currency, <b>AiToreda (AITO)</b>, within our ecosystem. Nexus-Coin will revolutionize transactions
                among member businesses, providing a unified, secure, and efficient medium of exchange. Key features include:
              </div>
            </div>
          </div>
          <div className="row mb100px">
            {serviceCardList.map((item, index) => (
              <div className="col-lg-6 col-md-6">
                <div className="serviceCard nexuspageCard">
                  <h3 className="title">{item.title}</h3>
                  <div className="para text-left">
                    {item.para.map((text, i) => (
                      <p className="para text-left" key={i} dangerouslySetInnerHTML={{ __html: text }}></p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mb100px">
        <div className="container">
          <GoalmapSection />
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
