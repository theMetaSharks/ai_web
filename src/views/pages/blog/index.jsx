import React, { useState } from 'react';
import { InnerPageLayout } from '../../../layout/innderpageLayout';
import blogBannerImg from '../../../assets/images/blogBannerImg.svg';
import newscardImg from '../../../assets/images/newscardImg.png';
import { NewsCard } from '../../../components/newscard';
import newsPostImg from '../../../assets/images/newsPostImg.png';

import { Link } from 'react-router-dom';
import { ArrowCircleLeft } from '../../../components/circle-arrow-left';
import { ArrowCircleRight } from '../../../components/circle-arrow-right';

const newscardlist = [
  {
    img: newscardImg,
    title: 'Latest publication on the website',
  },
  {
    img: newscardImg,
    title: 'Latest publication on the website 2',
  },
  {
    img: newscardImg,
    title: 'Latest publication on the website 3',
  },
];

const newspostList = [
  {
    type: 'News',
    img: 'static/media/token-launching.34a7185d59cdba327599.png',
    title: 'Launching $AITO: Available for Purchase and Investment',
    desc: 'We are thrilled to announce the upcoming launch of the AI TOREDA token, $AITO. Built on the SOLANA blockchain, $AITO is designed to be more than just a digital currency. It’s a key part of our ecosystem, supporting various projects and enabling day-to-day financial activities in a decentralized manner.',
    date: '00/00/0000',
    url: '/token-launch',
  },
  {
    type: 'Blog',
    img: 'static/media/Decentralisedfinance.ae85211002df24893cbd.png',
    title: 'Blockchain Beyond Bitcoin: The Future of Decentralised Finance',
    desc: 'Blockchain technology, originally conceived as the backbone of Bitcoin, has evolved far beyond its initial use case. While Bitcoin remains the most well-known application, the underlying technology—blockchain—has the potential to revolutionize a wide array of industries, with decentralized finance (DeFi) emerging as one of the most promising sectors.',
    date: '00/00/0000',
    url: '/decentralised-finance',
  },
  {
    type: 'Blog',
    img: 'static/media/mainstreamuse.82247b6dcbd5c26bc550.png',
    title: 'The Evolution of Cryptocurrencies: From Niche Beginnings to Mainstream Use',
    desc: 'Cryptocurrencies have transformed from the debut of Bitcoin in 2009 by Satoshi Nakamoto into a global force, reshaping finance, investment, and even art. This blog traces the key phases of their evolution, from early adoption by tech enthusiasts to becoming a mainstream financial instrument.',
    date: '00/00/0000',
    url: '/mainstream-use',
  },
  {
    type: 'Blog',
    img: 'http://localhost:3000/static/media/cryptoinvestor.ad9facd8a33543d8b0d0.png',
    title: 'Pump, Dump, and HODL: The Daily Life of a Cryptocurrency Investor',
    desc: 'The world of cryptocurrency is thrilling, fast-paced, and often unpredictable. For those who live and breathe this market, the phrases "Pump," "Dump," and "HODL" are more than jargon; they are a way of life. This blog explores the rollercoaster experience of being a crypto investor, shedding light on these essential terms.',
    date: '00/00/0000',
    url: '/crypto-investor',
  },
  {
    type: 'Blog',
    img: 'http://localhost:3000/static/media/cryptoBeginner.6da504f61f5290af3b1c.png',
    title: 'Cryptocurrency for Beginners: It’s Not Magic, It’s Just Math',
    desc: 'Cryptocurrency may seem complex, but it is not magic—it is just math. This blog breaks down the mathematical principles behind cryptocurrencies to make them more accessible for beginners, showing how understanding these fundamentals can unlock the potential of the blockchain world.',
    date: '00/00/0000',
    url: '/crypto-beginners',
  },
  {
    type: 'News',
    img: 'http://localhost:3000/static/media/carrerDevelopment.88ae926ae0e03d2b404c.png',
    title: 'Leveraging AiToreda for Career Development: Transforming Growth',
    desc: 'Blockchain technology, originally conceived as the backbone of Bitcoin, has applications far beyond its initial use case. AiToreda is positioning itself as a tool for career development, offering professionals new opportunities for personal and professional growth in the evolving decentralized world.',
    date: '00/00/0000',
    url: '/career-development',
  },
  {
    type: 'Blog',
    img: 'http://localhost:3000/static/media/buzzwords.7c56718b2703e4f8ec95.png',
    title: 'Blockchain Buzzwords Decoded: Understanding the Jargon',
    desc: 'Blockchain technology has become a hot topic in recent years, often accompanied by a flood of buzzwords that can be difficult to decipher. In this blog, we break down the essential blockchain buzzwords and their meanings, providing clarity for anyone looking to engage with this fast-moving technology.',
    date: '00/00/0000',
    url: '/buzzwords',
  },
  {
    type: 'Blog',
    img: 'http://localhost:3000/static/media/revolutionizing.247dad11627763580d2b.png',
    title: 'Revolutionizing Trade Finance with AiToreda: A Decentralized Approach',
    desc: 'Trade finance is crucial for international commerce, fueling cross-border transactions. However, traditional trade finance faces inefficiencies, reliance on paper, and slow processing. AiToreda’s decentralized approach aims to revolutionize the sector by improving access and reducing the $2.6 trillion global SME lending gap.',
    date: '00/00/0000',
    url: '/revolutionizing',
  },
  {
    type: 'News',
    img: 'http://localhost:3000/static/media/visaprocessingBlockchain.a433bcbe60bd410d57db.png',
    title: 'AiToreda: Revolutionizing Visa Processing with Blockchain Technology',
    desc: 'In a world where international travel is increasingly common, the demand for efficient, secure, and reliable visa processing services has never been higher. AiToreda leverages blockchain technology to streamline and secure the visa processing experience, offering a more efficient solution for global travelers.',
    date: '00/00/0000',
    url: '/visa-process',
  },
  {
    type: 'Blog',
    img: 'http://localhost:3000/static/media/diverse-projects.4441203f11c77c773d21.png',
    title: 'The Impact of AiToreda Across Diverse Projects: Revolutionizing Blockchain Applications',
    desc: 'AiToreda, a cutting-edge digital currency, is set to revolutionize various sectors by integrating into key projects like decentralized trade finance, career development, and visa processing applications. These integrations will unlock new opportunities, streamline operations, and enhance sector functionalities using blockchain technology.',
    date: '00/00/0000',
    url: '/diverse-projects',
  },
  {
    type: 'News',
    img: 'http://localhost:3000/static/media/NexusTech.9253c5b9418f43945bba.png',
    title: 'AiToreda and Tech Nexus: Pioneering the Future of Tech Startups',
    desc: 'Tech startups drive innovation but face challenges like securing funding and technical development. Tech Nexus, a tech hub incubator, supports these startups with resources and tools. By integrating AiToreda, a blockchain-powered currency, Tech Nexus aims to revolutionize how startups operate and grow in the evolving tech landscape.',
    date: '00/00/0000',
    url: '/tech-nexus',
  },
];

export const BlogPage = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Filter the news posts based on the selected tag
  const filteredPosts = newspostList.filter((post) => {
    if (selectedTag === 'All') return true;
    return post.type === selectedTag;
  });

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredPosts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <InnerPageLayout>
        <div className="pageContent py-0">
          <div className="container">
            <div className="bannerContent mb-0">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="hmrbannerCnt mt-lg-5">
                    <div className="bannerSmTxt">$AITO</div>
                    <h1 className="bannerTit">News & Blogs</h1>
                    <p className="bannerPara">Creating a robust ecosystem that addresses real-world challenges and opens up new opportunities for growth and development.</p>
                    <div className="mb-5">
                      <button className={`btn btn-secondary btn-w186 btn-h69 fs-20 fw-400 mr-2 ${selectedTag === 'All' ? 'active' : ''}`} onClick={() => setSelectedTag('All')}>
                        All
                      </button>
                      <button className={`btn btn-secondary btn-w186 btn-h69 fs-20 fw-400 mr-2 ${selectedTag === 'Blog' ? 'active' : ''}`} onClick={() => setSelectedTag('Blog')}>
                        Blog
                      </button>
                      <button className={`btn btn-secondary btn-w186 btn-h69 fs-20 fw-400  ${selectedTag === 'News' ? 'active' : ''}`} onClick={() => setSelectedTag('News')}>
                        News
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bannerImg mt-4 mt-lg-0 text-lg-right text-center">
                    <img src={blogBannerImg} alt="roadmapBanner" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <section className='sec2 blog-lightbgsection mb-5'>
                    <div className='container'>
                        <div className="row mb-3">
                            <div className="col-lg-12">
                                <div className="b-secTitle text-center">Latest Publications</div>
                            </div>
                        </div>
                        <div className='row'>
                            {newscardlist.map((item, index) => (
                                <div className='col-lg-4 col-md-4 col-sm-6' key={index}>
                                    <NewsCard NcardImg={item.img} NcardTitle={item.title} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

        <section className="mb-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {currentPosts.map((item, index) => (
                  <div className="newspostCard" key={index}>
                    <div className="d-flex flex-column flex-md-row">
                      <div className="text-center text-md-left np-img">
                        <div className="d-inline-block position-relative">
                          <img src={item.img} alt="newsPostImg.png" className="img-fluid" />
                          <div className="np-label">
                            {item.type === 'News' && <span className={`label newsLabel`}>News</span>}
                            {item.type === 'Blog' && <span className={`label eventLabel`}>Blog</span>}
                            {item.type === 'Guide' && <span className={`label guideLabel`}>Guide</span>}
                            {item.type === 'Crypto Investor' && <span className={`label cryptoInvestorLabel`}>Crypto Investor</span>}
                            {item.type === 'Career Development' && <span className={`label careerDevelopmentLabel`}>Career Development</span>}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="np-title">{item.title}</div>
                        <div className="np-para">{item.desc}</div>
                        <div className="d-flex justify-content-md-between flex-column flex-md-row">
                          <div className="np-date mb-3 mb-md-0">Published on : {item.date}</div>
                          <Link to={item.url} className="np-readpost">
                            Read full post &#8594;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="text-center d-flex align-items-center justify-content-center mb-5">
                  <button className="btn btnIcon sliderArrowIcon" onClick={handlePrevPage} disabled={currentPage === 1}>
                    <ArrowCircleLeft />
                  </button>
                  <span className="px-1 fs-20 fw-400">
                    {currentPage} of {Math.ceil(filteredPosts.length / postsPerPage)}
                  </span>
                  <button className="btn btnIcon sliderArrowIcon" onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredPosts.length / postsPerPage)}>
                    <ArrowCircleRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </InnerPageLayout>
    </>
  );
};
