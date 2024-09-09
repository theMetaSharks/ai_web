import React, { useEffect, useRef, useState } from 'react';
// import bannerImg from '../../../assets/images/home/bannerImg.png';
import WhiteGhostDocs from '../../../assets/images/home/WhiteGhost_docs_nu.png';
import { BlockchainDetailRow } from '../../../components/blockchaindetails';
import { BuyTokensSells } from '../../../components/buytoken';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import { Airdropscomingsoon } from '../../../components/Airdropscomingsoon';
import { AITOcommunity } from '../../../components/AITOCommunity';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { InvestorCard } from '../../../components/investorcard';
import { Link } from 'react-router-dom';
import { AirdropSection } from '../../../components/ADcomingsoon';
import { ConnectWallet } from '../../../components/modals/connectwallet';
import bannerhmeImg from '../../../assets/images/home/homeBannerImg.svg';
import cryptoDepitcardImg from '../../../assets/images/home/cryptoDepitcardImg.svg';
import capifyLogo from '../../../assets/images/home/capify-logo.png';
import fundingcircle from '../../../assets/images/home/fundingcircle.png';

const SliderDataList = [
  {
    url: '/visa-processing-app',
    title: 'Global VISA Processing App',
    paraList: [
      'A comprehensive and reliable platform designed for purpose-driven travel. ',
      'Leveraging cutting-edge technology and deep expertise in visa and travel facilitation services offering a one-stop solution for all types of visas and related needs. ',
      'Our system integrates a network of trusted immigration lawyers, service providers, and travel facilitators to streamline and simplify the visa application process.',
    ],
  },
  {
    url: '/career-development-app',
    title: 'Career Development Project App',
    paraList: [
      'Our Personal and Career Development app is designed to identify and fulfil the unique needs of individuals seeking to advance their careers.',
      'Utilizing a proprietary AI model, our platform accurately pinpoints skills gaps and provides tailored development pathways, ensuring effective and personalized growth for each user.',
    ],
  },
  {
    url: '/decentralised-trade',
    title: 'Decentralised Trade App',
    paraList: [
      'Empower your trade transactions with our Decentralized Trade Finance App, powered by AI TOREDA Crypto Token.',
      'Designed to build trust and transparency among buyers, suppliers, and financial institutions, our platform offers a comprehensive suite of trade finance solutions.',
    ],
  },
  {
    url: '/tech-nexus-app',
    title: 'Tech Nexus App',
    paraList: [
      'Tech Nexus stands at the forefront of innovation, offering an unparalleled tech hub incubator designed to propel startups and emerging tech businesses to new heights.',
      'Our mission is to be the catalyst for the next wave of tech entrepreneurship, providing comprehensive support that includes funding, technological expertise, and strategic growth opportunities to ensure rapid and sustainable success.',
    ],
  },
];

const investorList = [
  {
    img: fundingcircle,
    title: 'FundingCircle',
    para: 'Founded in UK, to provide small to medium size businesses easy access to finance through funding. Generated over  $10 billions from 2010.',
  },
  {
    img: capifyLogo,
    title: 'Capify.co.uk',
    para: 'Supporting UK SMEs with businesses financing from £5,000 - £750,000.',
  },
];

const faqdataList = [
  {
    qus: 'What is AITOREDA?',
    ans: [
      'AITOREDA is a groundbreaking cryptocurrency that leverages the power of Trust Relationship Domains (TRDs) to create a secure and efficient digital ecosystem. Unlike traditional cryptocurrencies that rely on complex mining processes, AITOREDA offers a user-friendly and sustainable approach to digital currency.',
    ],
  },
  {
    qus: 'What are the benefits of using AITOREDA?',
    ans: [
      `Security: AITOREDA's TRD-based system enhances security and trust within the network.`,
      `Efficiency: Transactions are processed rapidly and with minimal fees.`,
      `Sustainability: AITOREDA operates without the energy-intensive processes associated with mining.`,
      `Accessibility: The platform is designed to be user-friendly, making it accessible to a wide range of users.`,
    ],
  },
  {
    qus: 'How is AITOREDA different from other cryptocurrencies?',
    ans: [
      'AITOREDA stands out by its unique TRD-based architecture, which prioritizes trust and security. Unlike many other cryptocurrencies that rely on complex algorithms and energy-intensive mining, AITOREDA offers a simpler and more sustainable approach.',
    ],
  },
  {
    qus: 'How does AITOREDA work?',
    ans: [
      'AITOREDA operates on a decentralized network where transactions are verified and validated through a network of Trust Relationship Domains (TRDs). These TRDs establish trust between users, ensuring the integrity of the system.',
    ],
  },
  {
    qus: 'What is the role of Trust Relationship Domains (TRDs) in AITOREDA?',
    ans: [
      `TRDs serve as the foundation of AITOREDA's security and trust system. They represent relationships between users and contribute to the overall reliability of the network.`,
    ],
  },
  {
    qus: 'How can I use AITOREDA for transactions?',
    ans: [
      'AITOREDA can be used for various transactions, including peer-to-peer payments, online purchases, and remittances. You can store your AITOREDA in a secure digital wallet and easily transfer funds to other users.',
    ],
  },
  {
    qus: 'Where can I use AITOREDA?',
    ans: [
      'AITOREDA can be used for various transactions, including peer-to-peer payments, online purchases, and remittances. You can store your AITOREDA in a secure digital wallet and easily transfer funds to other users.',
    ],
  },
  {
    qus: 'Where can I use AITOREDA?',
    ans: ['AITOREDA can be acquired through various methods, including purchasing it on cryptocurrency exchanges or participating in future token distribution events.'],
  },
];

export const HomePage = () => {
  const [connectWallet, setConnectWallet] = useState(false);
  const [activeTab, setActiveTab] = useState('system');
  const [activeHTab, setActiveHTab] = useState('tab1');

  const fullWidth = useRef(null);
  const containerWidth = useRef(null);

  // const [screenWidth, setScreenWidth] = useState(0);
  const [elementWidth, setElementWidth] = useState(0);

  let sliderRef = useRef(null);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const toggleTab = (tab) => {
    if (activeHTab !== tab) setActiveHTab(tab);
  };

  useEffect(() => {
    const updateWidth = () => {
      if (fullWidth.current && containerWidth.current) {
        const fullscreenwidth = fullWidth.current.clientWidth;
        const containerelement = containerWidth.current.clientWidth;

        setElementWidth(Math.abs(fullscreenwidth - containerelement) / 2);
      }
    };

    updateWidth();

    window.addEventListener('resize', updateWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // speed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // speed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const nextSlider = () => {
    sliderRef.slickNext();
  };
  const previousSlider = () => {
    sliderRef.slickPrev();
  };

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
    <>
      <div className="mainContent">
        <div className="pageContent py-5 pt-3">
          <div className="container">
            <div className="bannerContent hmeBannerContent">
              <div className="hmebanneroutImg">
                <img src={bannerhmeImg} width={'90%'} alt="homebannerImg" className="img-fluid" />
              </div>
              <div className="row">
                <div className="col-lg-6 ">
                  {/* <div className='bannerImg mb-4 mb-lg-0 d-lg-none'>
                                            <img src={bannerhmeImg} alt='homebannerImg' className='img-fluid' />
                                        </div> */}
                </div>
                <div className="col-lg-6">
                  <div className="hmrbannerCnt">
                    <div className="bannerSmTxt">$AITO</div>
                    <h1 className="bannerTit">
                      Combining <br className="d-none d-lg-block" />
                      Artificial&nbsp;Intelligence <br className="d-none d-lg-block" />
                      with <span className="text-primary">Blockchain</span>
                    </h1>
                    <p className="bannerPara">Creating a robust ecosystem that addresses real-world challenges and opens up new opportunities for growth and development.</p>
                    <div className="btnFlex mb-5">
                      <Link to="/whitepaper">
                        <button className="btn btn-outline-primary btn-w147">WHITEPAPER</button>
                      </Link>
                    </div>

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
                  </div>
                </div>
              </div>
            </div>
            <section className="bcdetailsrow mb-4">
              <BlockchainDetailRow />
            </section>
            <section className="buyTokensell">
              <BuyTokensSells />
            </section>
            <section className="whatisAIToreda-sec">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div>
                    <h3>What is AI TOREDA?</h3>
                    <p className="paraTxt">
                      Ai-Toreda is a groundbreaking project dedicated to merging artificial intelligence with blockchain technology to offer innovative solutions across various
                      sectors. Our platform aims to enhance efficiency, security, and innovation through our unique AI-driven approach. By leveraging the power of AI, we are
                      creating a robust ecosystem that addresses real-world challenges and opens up new opportunities for growth and development.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="text-lg-right text-center">
                    <img src={require('../../../assets/images/home/WhatisAIToreda.svg').default} alt="WhatisAIToreda.svg" className="img-fluid" />
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="fourTabCnt">
                    <Nav pills vertical className="hmeTabsec">
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === 'system' })}
                          onClick={() => {
                            toggle('system');
                          }}
                        >
                          The system
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === 'tech' })}
                          onClick={() => {
                            toggle('tech');
                          }}
                        >
                          The Tech
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === 'tokenomics' })}
                          onClick={() => {
                            toggle('tokenomics');
                          }}
                        >
                          Tokenomics
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === 'coinstructure' })}
                          onClick={() => {
                            toggle('coinstructure');
                          }}
                        >
                          Coin structure
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <div className="tabsecmainCnt">
                      <TabContent activeTab={activeTab}>
                        <TabPane tabId="system">
                          <div className="theSystemTab">
                            <Nav pills className="">
                              <NavItem>
                                <NavLink
                                  className={classnames({ active: activeHTab === 'tab1' })}
                                  onClick={() => {
                                    toggleTab('tab1');
                                  }}
                                >
                                  <img src={require('../../../assets/images/home/tab/icon1.svg').default} alt="icon1" className="iconTab" />
                                  <span className="tabTxt">Blockchain Platform</span>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({ active: activeHTab === 'tab2' })}
                                  onClick={() => {
                                    toggleTab('tab2');
                                  }}
                                >
                                  <img src={require('../../../assets/images/home/tab/icon2.svg').default} alt="icon2" className="iconTab" />
                                  <span className="tabTxt">Security</span>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({ active: activeHTab === 'tab3' })}
                                  onClick={() => {
                                    toggleTab('tab3');
                                  }}
                                >
                                  <img src={require('../../../assets/images/home/tab/icon3.svg').default} alt="icon3" className="iconTab" />
                                  <span className="tabTxt">Low Fees</span>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({ active: activeHTab === 'tab4' })}
                                  onClick={() => {
                                    toggleTab('tab4');
                                  }}
                                >
                                  <img src={require('../../../assets/images/home/tab/icon4.svg').default} alt="icon4" className="iconTab" />
                                  <span className="tabTxt">Decentralized</span>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({ active: activeHTab === 'tab5' })}
                                  onClick={() => {
                                    toggleTab('tab5');
                                  }}
                                >
                                  <img src={require('../../../assets/images/home/tab/icon5.svg').default} alt="icon5" className="iconTab" />
                                  <span className="tabTxt">Buy Back & Burn Cycle</span>
                                </NavLink>
                              </NavItem>
                            </Nav>
                          </div>
                          <div className="tabcnt innerCntMain">
                            <TabContent activeTab={activeHTab}>
                              <TabPane tabId={'tab1'}>
                                <div className="innerTab">
                                  <h3>Blockchain Platform</h3>
                                  <p>
                                    <ul style={{ fontSize: '16px' }}>
                                      <li>Constructed on the secure, transparent Solana framework.</li>
                                      <li>Tokenization approach in harmony with DeFi tenets.</li>
                                      <li>Focuses on a user-oriented platform that emphasizes ease of use and continuous innovation.</li>
                                    </ul>
                                  </p>
                                </div>
                              </TabPane>
                              <TabPane tabId={'tab2'}>
                                <div className="innerTab">
                                  <h3>Security</h3>
                                  <p>
                                    <ul style={{ fontSize: '16px' }}>
                                      <li>Regular independent audits to ensure maximum safeguarding of user assets.</li>
                                      <li>Enforces class-leading security protocols, cultivating trust and assurance within our network.</li>
                                    </ul>
                                  </p>
                                </div>
                              </TabPane>
                            </TabContent>
                          </div>
                        </TabPane>
                        <TabPane tabId="tech">
                          <div className="tabcnt">
                            <p>
                              The Al Toreda Token is built upon a robust, future-ready technological foundation designed to ensure seamless integration, rapid development, and
                              exceptional scalability. Our strategic adoption of the MERN stack underscores our unwavering commitment to creating a token ecosystem that not only
                              meets but exceeds the expectations of our users and stakeholders.
                            </p>
                            <div className="techImages">
                              <img src={require('../../../assets/images/home/tech/mongodb.png')} alt="mongodb" />
                              <img src={require('../../../assets/images/home/tech/Nodejs.png')} alt="Nodejs" />
                              <img src={require('../../../assets/images/home/tech/React.png')} alt="React" />
                              <img src={require('../../../assets/images/home/tech/expressjs.png')} alt="expressjs" />
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tabId="tokenomics">
                          <div className="tabcnt">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="text-center">
                                  <img src={require('../../../assets/images/home/tokenamicsImg.png')} alt="tokenamicsImg.png" className="img-fluid" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="row tokenamicsMainCnt">
                                  <div className="col-5">
                                    <div className="tokenamicsCnt">
                                      <div className="tokensLabel">Blockchain</div>
                                      <div className="tokensVal">Solona</div>
                                    </div>
                                  </div>
                                  <div className="col-1">
                                    <div className="borderVertical"></div>
                                  </div>
                                  <div className="col-5">
                                    <div className="tokenamicsCnt">
                                      <div className="tokensLabel">Token Name</div>
                                      <div className="tokensVal">AI toreda</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row tokenamicsMainCnt">
                                  <div className="col-5">
                                    <div className="tokenamicsCnt">
                                      <div className="tokensLabel">Decimals</div>
                                      <div className="tokensVal">06 </div>
                                    </div>
                                  </div>
                                  <div className="col-1">
                                    <div className="borderVertical"></div>
                                  </div>
                                  <div className="col-5">
                                    <div className="tokenamicsCnt">
                                      <div className="tokensLabel">Token Symbol</div>
                                      <div className="tokensVal">$AITO</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row tokenamicsMainCnt">
                                  <div className="col-5">
                                    <div className="tokenamicsCnt">
                                      <div className="tokensLabel">BURN Function</div>
                                      <div className="tokensVal">Yes</div>
                                    </div>
                                  </div>
                                  <div className="col-1">
                                    <div className="borderVertical"></div>
                                  </div>
                                  <div className="col-5">
                                    <div className="tokenamicsCnt">
                                      <div className="tokensLabel">Token Supply</div>
                                      <div className="tokensVal">12,000,00 M</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tabId="coinstructure">
                          <div className="tabcnt">
                            <div className="row">
                              <div className="col-lg-7">
                                <div className="chatLegent">
                                  <div className="chatlabel">
                                    <img src={require('../../../assets/images/arrow-right.svg').default} alt="arrow-right" /> Presale
                                  </div>
                                  <div className="chatRightLabel">
                                    <div className="chatpercent">25%</div>
                                    <div className="chatval">400,000,000</div>
                                    <div>
                                      <span className="squareBx clr1"></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="chatLegent">
                                  <div className="chatlabel">
                                    <img src={require('../../../assets/images/arrow-right.svg').default} alt="arrow-right" /> Liquidity{' '}
                                  </div>
                                  <div className="chatRightLabel">
                                    <div className="chatpercent">35%</div>
                                    <div className="chatval">200,000,000</div>
                                    <div>
                                      <span className="squareBx clr2"></span>
                                    </div>
                                  </div>
                                </div>

                                <div className="chatLegent">
                                  <div className="chatlabel">
                                    <img src={require('../../../assets/images/arrow-right.svg').default} alt="arrow-right" /> Marketing{' '}
                                  </div>
                                  <div className="chatRightLabel">
                                    <div className="chatpercent">5%</div>
                                    <div className="chatval">100,000,000</div>
                                    <div>
                                      <span className="squareBx clr3"></span>
                                    </div>
                                  </div>
                                </div>

                                <div className="chatLegent">
                                  <div className="chatlabel">
                                    <img src={require('../../../assets/images/arrow-right.svg').default} alt="arrow-right" /> Exchange Listings{' '}
                                  </div>
                                  <div className="chatRightLabel">
                                    <div className="chatpercent">8%</div>
                                    <div className="chatval">100,000,000</div>
                                    <div>
                                      <span className="squareBx clr4"></span>
                                    </div>
                                  </div>
                                </div>

                                <div className="chatLegent">
                                  <div className="chatlabel">
                                    <img src={require('../../../assets/images/arrow-right.svg').default} alt="arrow-right" /> Burned{' '}
                                  </div>
                                  <div className="chatRightLabel">
                                    <div className="chatpercent">10%</div>
                                    <div className="chatval">100,000,000</div>
                                    <div>
                                      <span className="squareBx clr5"></span>
                                    </div>
                                  </div>
                                </div>

                                <div className="chatLegent">
                                  <div className="chatlabel">
                                    <img src={require('../../../assets/images/arrow-right.svg').default} alt="arrow-right" /> Development{' '}
                                  </div>
                                  <div className="chatRightLabel">
                                    <div className="chatpercent">15%</div>
                                    <div className="chatval">100,000,000</div>
                                    <div>
                                      <span className="squareBx clr6"></span>
                                    </div>
                                  </div>
                                </div>

                                <div className="chatLegent">
                                  <div className="chatlabel">
                                    <img src={require('../../../assets/images/arrow-right.svg').default} alt="arrow-right" /> Team{' '}
                                  </div>
                                  <div className="chatRightLabel">
                                    <div className="chatpercent">2%</div>
                                    <div className="chatval">100,000,000</div>
                                    <div>
                                      <span className="squareBx clr7"></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-5">
                                <div className="text-center">
                                  <img src={require('../../../assets/images/home/sampleChart.png')} alt="sampleChart.png" className="img-fluid" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabPane>
                      </TabContent>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="bglightsec mb100px cryptoDCSec">
          <div className="container" ref={containerWidth}>
            <div className="row">
              <div className="col-lg-7">
                <div className="dc-card-sec mb-4 mb-lg-0">
                  <h3>Decentralized Crypto Debit Card</h3>
                  <div className="paraTxt1">
                    <p>
                      Step into a realm where your digital assets redefine convenience and unlock a world of exclusive perks. With the AITO Debit Card and AIToreda, your everyday
                      transactions are transformed into rewarding experiences.
                    </p>

                    <p>
                      Our AITO Debit Card is your gateway to a curated selection of special offers, tailored just for you. Through strategic partnerships with top merchants
                      globally, AIToreda ensures that you receive unmatched value every time you use your card.
                    </p>
                    <p>
                      Embrace a new way of spending where each transaction with your AITO Debit Card not only simplifies your life but also grants you access to exclusive benefits
                      that elevate your lifestyle. Become a part of the AIToreda community today and turn every purchase into an opportunity to enhance your world.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-1"></div> */}
              {/* <div className="col-lg-4">
                <div className="cryptoImgsec d-none d-lg-block">
                  <img src={cryptoDepitcardImg} alt="cryptoDepitcardImg" className="img-fluid" />
                </div>
              </div> */}
            </div>
          </div>
          <div className="cryptoImgsec d-none d-lg-block">
            <img src={cryptoDepitcardImg} alt="cryptoDepitcardImg" style={{ float: 'right', width: '75%' }} />
          </div>
        </section>

        <section className="mb100px sliderSection" ref={fullWidth}>
          <div className="row no-gutters">
            <div className="col-xl-12" style={{ paddingLeft: elementWidth }}>
              {/* col-xl-10 offset-xl-2 pl-xl-4 */}
              <div className="d-flex flex-column flex-md-row align-items-md-center mb-4">
                <div className="secTit mr-5">Our AI Projects Utilizing $AITO</div>
                <div className="sliderprevnextBtn text-md-left">
                  <button className="btn btnEmpty sliderArrowIcon" onClick={previousSlider}>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.500002 19C0.500003 8.78273 8.78274 0.499997 19 0.499998C29.2173 0.499999 37.5 8.78273 37.5 19C37.5 29.2173 29.2173 37.5 19 37.5C8.78273 37.5 0.500001 29.2173 0.500002 19Z"
                        fill="white"
                        stroke="#9649FD"
                      />
                      <path
                        d="M10.7576 18.6464C10.5623 18.8417 10.5623 19.1583 10.7576 19.3536L13.9395 22.5355C14.1348 22.7308 14.4514 22.7308 14.6466 22.5355C14.8419 22.3403 14.8419 22.0237 14.6466 21.8284L11.8182 19L14.6466 16.1716C14.8419 15.9763 14.8419 15.6597 14.6466 15.4645C14.4514 15.2692 14.1348 15.2692 13.9395 15.4645L10.7576 18.6464ZM28 18.5L11.1111 18.5L11.1111 19.5L28 19.5L28 18.5Z"
                        fill="#9649FD"
                      />
                    </svg>
                  </button>
                  <button className="btn btnEmpty sliderArrowIcon" onClick={nextSlider}>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M37.5 19C37.5 29.2173 29.2173 37.5 19 37.5C8.78273 37.5 0.5 29.2173 0.5 19C0.5 8.78273 8.78273 0.5 19 0.5C29.2173 0.5 37.5 8.78273 37.5 19Z"
                        fill="white"
                        stroke="#9649FD"
                      />
                      <path
                        d="M28.2424 19.3536C28.4377 19.1583 28.4377 18.8417 28.2424 18.6464L25.0605 15.4645C24.8652 15.2692 24.5486 15.2692 24.3534 15.4645C24.1581 15.6597 24.1581 15.9763 24.3534 16.1716L27.1818 19L24.3534 21.8284C24.1581 22.0237 24.1581 22.3403 24.3534 22.5355C24.5486 22.7308 24.8652 22.7308 25.0605 22.5355L28.2424 19.3536ZM11 19.5H27.8889V18.5H11V19.5Z"
                        fill="#9649FD"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="slideHomeBx">
                <Slider
                  ref={(slider) => {
                    sliderRef = slider;
                  }}
                  {...settings}
                >
                  {SliderDataList.map((item, index) => (
                    <div className="sliderBx" key={index}>
                      <div>
                        <div className="title">{item.title}</div>
                        <div className="paraTxt">
                          {item.paraList.map((paratxt) => (
                            <p>{paratxt}</p>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <button className="btn btnReadMore" key={index}>
                          Read more about this app &#8594;{' '}
                        </button>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>

        <section className="secBx mb100px">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="secTitle">Backed By Industry Leaders from the UK</div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Slider {...settings2} className="leaderSlider">
                  {investorList.map((item, index) => (
                    <div className="leaderCardsSlider" key={index}>
                      <InvestorCard IcardTitle={item.title} IcardTxt={item.para} Icardimg={item.img} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>

        <section className="secBx mb60px">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="secTitle text-center">Frequently Asked Questions</div>
              </div>
            </div>
            <div className="row">
              {faqdataList.map((item, index) => (
                <div className="col-lg-6 col-md-6" key={index}>
                  <div className="faqList">
                    <h4 className="faqQus">{item.qus}</h4>
                    <div className="faqAns">
                      {item.ans.map((answer, i) => (
                        <p key={i}>{answer}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lightBgsection mb100px">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="secTitle2 mb-3">Want to get more instant answers?</div>
              </div>
              <div className="col-lg-6 text-lg-right">
                <Link to={'/faq'} className="btn btn-outline-primary round15 fs-24 h-auto py-2">
                  Frequently Asked Questions
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="secWhite mb100px">
          <div className="container">
            <AirdropSection />
          </div>
        </section>
      </div>

      <ConnectWallet openModal={connectWallet} closeModal={() => setConnectWallet(false)} />
    </>
  );
};
