import React from 'react';
//import roadmapBanner from '../../../assets/images/roadmap-BannerImg.png';
import roadmapBanner from '../../../assets/images/roadmapBannerImg.svg';
import { BuyTokensSells } from '../../../components/buytoken';
import { BlockchainDetailRow } from '../../../components/blockchaindetails';
import { InnerPageLayout } from '../../../layout/innderpageLayout';

const roadmapDataList = [
  {
    quarter: 'Quarter 3',
    duration: 'July - Sep (2024)',
    dept: 'Platform Deployment',
    stepTitle: ['Initial Setup and Development', 'Token launch', 'Beta testing', 'Marketing (Phase 1)'],
    step: [
      {
        title: 'Initial Setup and Development',
        list: [
          'Establish core development team and infrastructure.',
          'Finalize tokenomics and smart contract development.',
          'Deploy smart contract on blockchain (Testnet).',
          'Develop and test basic product prototypes.',
          'Set up governance framework for decentralized decision-making.',
        ],
      },
      {
        title: 'Token launch',
        list: [
          'Launch AI Toreda Token (AIT) on a select blockchain network.',
          'Conduct an Initial DEX Offering (IDO) on key decentralized exchanges (DEXs).',
          'Engage early investors and community members.',
          'Distribute tokens to early adopters and contributors.',
        ],
      },
      {
        title: 'Beta testing',
        list: [
          'Initiate closed beta testing for early product features.',
          'Gather feedback and optimize product functionalities.',
          'Address security vulnerabilities and optimize smart contracts.',
        ],
      },
      {
        title: 'Marketing Phase 1',
        list: [
          'Execute a comprehensive marketing campaign to build brand awareness.',
          'Partner with influencers and thought leaders in the crypto space.',
          'Conduct a series of AMAs (Ask Me Anything) and community engagement activities.',
          'Launch social media campaigns to drive community growth.',
        ],
      },
    ],
  },
  {
    quarter: 'Quarter 4',
    duration: 'Oct - Dec (2024)',
    dept: 'DEX Listing',
    stepTitle: ['Listing on DEXs', 'Research & Development Fund Allocation', 'Products Prototyping', 'Community Growth and Engagement'],
    step: [
      {
        title: 'Listing on DEXs',
        list: [
          'List AI Toreda Token on additional decentralized exchanges (DEXs).',
          'Implement liquidity mining programs to incentivize trading.',
          'Expand to centralized exchange listings for wider accessibility.',
        ],
      },
      {
        title: 'Research & Development Fund Allocation',
        list: [
          'Allocate a significant portion of funds towards R&D for product innovation.',
          'Explore emerging technologies in blockchain and AI for future integration.',
          'Collaborate with academic institutions for joint research initiatives.',
        ],
      },
      {
        title: 'Products Prototyping',
        list: [
          'Develop advanced prototypes for key products, including the AI Toreda platform.',
          'Conduct user testing and gather feedback to refine product design.',
          'Begin integration of AI algorithms into the platform for enhanced functionality.',
        ],
      },
      {
        title: 'Community Growth and Engagement',
        list: [
          'Launch initiatives to grow the AI Toreda community globally.',
          'Host events, webinars, and hackathons to engage developers and enthusiasts.',
          'Introduce community rewards and incentive programs.',
        ],
      },
    ],
  },
  {
    quarter: 'Quarter 1',
    duration: 'Jan - Mar (2025)',
    dept: 'DeFi Platform Dev',
    stepTitle: ['Develop DeFi Platform', 'Products Development', 'More Exchange Listing', 'Marketing (Phase 2)'],
    step: [
      {
        title: 'Develop DeFi Platform',
        list: [
          'Begin development of the AI Toreda DeFi platform with a focus on user experience.',
          'Integrate staking, lending, and yield farming functionalities.',
          'Enable seamless integration with the AI Toreda token.',
        ],
      },
      {
        title: 'Products Development (Visa, Technology Investment Platform)',
        list: [
          'Accelerate development of AI Toreda’s core products.',
          'Focus on scalability and security to support mass adoption.',
          'Introduce user-friendly interfaces and enhanced features based on beta feedback.',
        ],
      },
      {
        title: 'More Exchange Listings',
        list: ['Expand exchange listings, ', 'Secure global exchange listings to increase token liquidity.', 'Establish market-making partnerships to ensure stable trading.'],
      },
      {
        title: 'Marketing Phase 2',
        list: [
          'Launch targeted marketing campaigns to attract institutional investors.',
          'Expand into new geographical markets with tailored strategies.',
          'Focus on brand positioning as a leading AI-powered blockchain solution.',
        ],
      },
    ],
  },
  {
    quarter: 'Quarter 2',
    duration: 'Apr - June (2025)',
    dept: 'Binance Listing',
    stepTitle: ['Cross-chain Interoperability Framework', 'Worldwide AI Toreda Card Adoption Champaign', 'Listing on Binance', 'Global Agreements'],
    step: [
      {
        title: 'Cross-chain Interoperability Framework',
        list: [
          'Develop a cross-chain interoperability framework to allow seamless asset transfers between different blockchains.',
          'Collaborate with other blockchain ecosystems to enhance interoperability.',
          'Test and optimize the framework for performance and security.',
        ],
      },
      {
        title: 'Worldwide AI Toreda Card Adoption Campaign',
        list: [
          'Launch a global campaign to promote the AI Toreda Card.',
          'Collaborate with payment providers to enable AI Toreda token payments.',
          'Implement incentives for merchants and users to adopt the AI Toreda Card.',
        ],
      },
      {
        title: '$ AITO Listing on More DEX Exchanges',
        list: [
          'Achieve listing on more DEX exchanges.',
          'Conduct marketing activities around the listing to drive awareness and trading volume.',
          'Ensure sufficient liquidity and trading pairs on exchanges.',
        ],
      },
      {
        title: 'Global Agreements',
        list: [
          'Secure global partnerships and agreements with financial institutions, tech companies, and governments.',
          'Focus on long-term collaborations that drive ecosystem growth.',
          'Explore opportunities in emerging markets for AI Toreda adoption.',
        ],
      },
    ],
  },
  {
    quarter: 'Quarter 3',
    duration: 'Jul - Sep (2025)',
    dept: 'AITO Staking',
    stepTitle: ['Beta Version of payment Gateways', 'Token Integration', 'AITO Staking launch date'],
    step: [
      {
        title: 'Beta Version of Payment Gateway & AITO Debit Card',
        list: [
          'Launch the beta version of AI Toreda’s payment gateway for select users.',
          'Test and optimize the gateway for speed, security, and user experience.',
          'Gather feedback and prepare for full - scale launch.',
          'Introduction AITO Debit Card and set launch date.',
        ],
      },
      {
        title: 'Launch Date for AI Toreda Staking Enablement',
        list: [
          'Announce the official launch date for staking on the AI Toreda platform.',
          'Introduce staking rewards and incentives for long - term holders.',
          'Enable staking for various lock- up periods with flexible options.',
        ],
      },
      {
        title: 'Token Integration',
        list: [
          'Integrate AI Toreda Token into a broader range of products and services.',
          'Facilitate token usage in DeFi, e - commerce, and real - world applications.',
          'Enable seamless token transfers and interactions within the AI Toreda ecosystem.',
        ],
      },
    ],
  },
  {
    quarter: 'Quarter 4',
    duration: 'Oct - Dec (2025)',
    dept: 'Token Integration',
    stepTitle: ['Products Launch', 'Products Marketing', 'AI Toreda App'],
    step: [
      {
        title: 'Products Launch',
        list: [
          'Officially launch AI Toreda’s core products to the market.',
          'Ensure smooth deployment with comprehensive user guides and support.',
          'Scale up marketing efforts to drive adoption and usage.',
        ],
      },
      {
        title: 'Products Marketing',
        list: ['Launch of Product web platform for users', 'Global social and organic marketing campaigns.'],
      },
      {
        title: 'AI Toreda App Prototyping and Development',
        list: ['Build prototype and design mockups;', 'Initiate App development for Android and IOS users.;'],
      },
    ],
  },
  {
    quarter: '2026',
    duration: 'and BEYOND',
    dept: 'Global Growth & Sustainability',
    stepTitle: ['Global Reach', 'Sustainable Growth'],
    step: [
      {
        title: 'Global Reach',
        list: [
          'Focus on expanding AI Toreda’s presence globally.',
          'Enter new markets and establish regional hubs for support and growth.',
          'Leverage partnerships and collaborations to achieve widespread adoption.',
        ],
      },
      {
        title: 'Sustainable Growth',
        list: [
          'Continue to innovate and develop new products that align with market needs.',
          'Prioritize sustainability in growth strategies, ensuring long-term value for token holders.',
          'Maintain a strong focus on community engagement and decentralized governance.',
        ],
      },
    ],
  },
];

export const RoadmapPage = () => {
  return (
    <>
      <InnerPageLayout>
        <div className="pageContent pb-5">
          <div className="container">
            <div className="bannerContent mb100px position-relative">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="hmrbannerCnt roadmapBannerCnt">
                    <div className="bannerSmTxt">$AITO</div>
                    <h1 className="bannerTit">Roadmap</h1>
                    <p className="bannerPara">
                      AITO roadmap lays out a strategic path for AI Toreda’s growth and development, emphasizing key milestones and objectives to drive success in the blockchain
                      and AI space.
                    </p>
                    <div className="btnFlex">
                      <button className="btn btn-outline-primary btn-w147">WHITEPAPER</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  {/* <div className="bannerImg mt-n5 mt-lg-0 d-lg-none">
                    <img src={roadmapBanner} alt="roadmapBanner" className="img-fluid" />
                  </div> */}
                </div>
              </div>
              <div className="roadmapBanner d-none d-lg-block">
                <img src={roadmapBanner} alt="roadmapBanner" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <section className="roadmapSection">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="roadmapListMain">
                  {roadmapDataList.map((item, index) => (
                    <div className="roadmaplist">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="rm-quater">{item.quarter}</div>
                          <div className="rm-duration">{item.duration}</div>
                          <div className="rm-dept">{item.dept}</div>
                          <div className="rm-arrow"></div>
                          <div className="rm-listmain">
                            <ul>
                              {item.stepTitle.map((stepTitle) => (
                                <li>{stepTitle}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="rm-rightmainbx">
                            <div className="rmcard">
                              {item.step.map((step) => (
                                <>
                                  <div className="rmcard-tit">{step.title}</div>
                                  <div className="rmcard-list">
                                    <ul>
                                      {step.list.map((list) => (
                                        <li>{list}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* <div className='roadmaplist'>
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <div className="rm-quater">Quarter 3</div>
                                                <div className="rm-duration">July - Sep (2024)</div>
                                                <div className="rm-dept">Platform Deployment</div>
                                                <div className="rm-arrow"></div>
                                                <div className='rm-listmain'>
                                                    <ul>
                                                        <li>Initial Setup and Development</li>
                                                        <li>Token launch</li>
                                                        <li>Beta testing</li>
                                                        <li>Marketing (Phase 1)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="rm-rightmainbx">
                                                    <div className="rmcard">
                                                        <div className="rmcard-tit">Initial Setup and Development</div>
                                                        <div className='rmcard-list'>
                                                            <ul>
                                                                <li>Establish core development team and infrastructure.</li>
                                                                <li>Finalize tokenomics and smart contract development.</li>
                                                                <li>Deploy smart contract on blockchain (Testnet).</li>
                                                                <li>Develop and test basic product prototypes.</li>
                                                                <li>Set up governance framework for decentralized decision-making.</li>
                                                            </ul>
                                                        </div>
                                                        Token launch
                                                        Launch AI Toreda Token (AIT) on a select blockchain network.
                                                        Conduct an Initial DEX Offering (IDO) on key decentralized exchanges (DEXs).
                                                        Engage early investors and community members.
                                                        Distribute tokens to early adopters and contributors.
                                                        Beta testing
                                                        Initiate closed beta testing for early product features.
                                                        Gather feedback and optimize product functionalities.
                                                        Address security vulnerabilities and optimize smart contracts.
                                                        Marketing phase 1
                                                        Execute a comprehensive marketing campaign to build brand awareness.
                                                        Partner with influencers and thought leaders in the crypto space.
                                                        Conduct a series of AMAs (Ask Me Anything) and community engagement activities.
                                                        Launch social media campaigns to drive community growth.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="buyTokensell mb-5">
          <BuyTokensSells />
        </section>
        <section className="bcdetailsrow my-5 mb100px">
          <div className="container">
            <BlockchainDetailRow />
          </div>
        </section>
      </InnerPageLayout>
    </>
  );
};
