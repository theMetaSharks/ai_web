import React from 'react';
import { InnerPageLayout } from '../../layout/innderpageLayout';
import { SimilarPost } from '../../components/similarPost';
import { ArrowCircleLeft } from '../../components/circle-arrow-left';
import { ArrowCircleRight } from '../../components/circle-arrow-right';
import buzzwords from '../../assets/images/buzzwords.png';

const Buzzwords = () => {
    return (
        <InnerPageLayout>
            <div className='pageContent py-5'>
                <div className='container'>
                    <div className='bannerContent mb-4'>
                        <div className='row align-items-center'>
                            <div className="col-lg-7">
                                <div className='hmrbannerCnt mt-lg-5'>
                                    <div className='bannerSmTxt'>Events</div>
                                    <h1 className='bannerTit'>
                                        Blockchain Buzzwords Decoded: What Are You Really Talking About?
                                    </h1>
                                    <p className='bannerPara'>
                                        Blockchain technology has become a hot topic in recent years, often accompanied by a flood of buzzwords that can be difficult to decipher. Understanding these terms is essential for anyone looking to engage with blockchain or cryptocurrency effectively. Here's a breakdown of some key buzzwords that you’re likely to encounter:
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className='text-center'>
                                    <img src={buzzwords} alt='buzzwords' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-12">


                            <div className='mycard'>

                                <div className="cmstitle">Cryptography:</div>

                                <div className="cmspara">
                                    <p>At the heart of blockchain technology is cryptography, the mathematical method of encoding and decoding data to ensure secure communication. It is fundamental to the protection of information in cryptocurrencies like Bitcoin, ensuring that only authorized parties can access transaction details.</p>
                                </div>

                                <div className="cmstitle">Consensus Mechanisms:</div>

                                <div className="cmspara">
                                    <p>This refers to the processes that ensure all participants in a blockchain network agree on the validity of transactions. Two widely discussed mechanisms are Proof of Work (PoW), used by Bitcoin, and Proof of Stake (PoS), used by newer blockchains like Ethereum 2.0. PoW requires computational power to solve complex puzzles, while PoS relies on validators who lock up tokens as a stake in the network.</p>
                                </div>

                                <div className="cmstitle">Smart Contracts:</div>

                                <div className="cmspara">
                                    <p>These are self-executing contracts with the terms of the agreement directly written into code. Smart contracts automatically enforce the contract when conditions are met, removing the need for intermediaries and reducing the risk of human error or fraud.</p>
                                </div>

                                <div className="cmstitle">DeFi (Decentralized Finance):</div>

                                <div className="cmspara">
                                    <p>DeFi refers to financial systems built on blockchain networks that operate without a central authority. DeFi platforms allow for peer-to-peer transactions, lending, borrowing, and trading of assets, democratizing access to financial services and often operating on the Ethereum blockchain.</p>
                                </div>

                                <div className="cmstitle">Mining:</div>

                                <div className="cmspara">
                                    <p>In the context of blockchain, mining is the process by which transactions are verified and added to the blockchain ledger. Miners use computational power to solve complex cryptographic problems, which, when solved, allow them to add a new block to the chain and earn cryptocurrency rewards.</p>
                                </div>

                                <div className="cmstitle">Forks:</div>

                                <div className="cmspara">
                                    <p>A fork occurs when there’s a change in a blockchain’s protocol, resulting in a split where two versions of the blockchain continue independently. A hard fork can create a completely new cryptocurrency, as was the case with Bitcoin and Bitcoin Cash.</p>
                                </div>

                                <div className="cmstitle">Gas:</div>

                                <div className="cmspara">
                                    <p>On platforms like Ethereum, "gas" refers to the computational work required to execute operations, such as transactions or smart contracts. Users pay gas fees in Ether, the platform's native currency, to incentivize miners to include their transactions in the blockchain.</p>
                                </div>

                                <div className="cmstitle">P2P (Peer-to-Peer):</div>

                                <div className="cmspara">
                                    <p>This term describes the direct exchange of assets between individuals without the need for intermediaries. Blockchain networks are inherently P2P, allowing participants to transact directly with each other.</p>

                                    <p>Understanding these terms can help demystify blockchain discussions, allowing you to better grasp the implications and innovations driving this revolutionary technology. Whether you’re a beginner or a seasoned professional, staying informed about the latest terminology is crucial as the industry continues to evolve.</p>
                                </div>

                                <div className="cmspara">
                                    <p>For further reading, consider checking out detailed glossaries and articles from resources like
                                        FinTech Magazine and Coinhako
                                        (<a href="https://fintechmagazine.com/financial-services-finserv/140-blockchain-and-crypto-words-ultimate-z-glossary" target='_blank' className='text-color text-underline'>Home of FinTech & Banking News</a>)
                                        (<a href="https://blog.coinhako.com/10-blockchain-buzzwords-you-need-to-know/" target='_blank' className="text-color text-underline">Coinhako</a>).
                                    </p>
                                </div>

                            </div>


                            <div className='row mb-5'>
                                <div className='col-sm-6 '>
                                    <button className='btn btnIcon sliderArrowIcon d-flex align-items-center text-left mb-4'>                                        
                                        <ArrowCircleLeft />
                                        <div className='ml-3'>
                                            <div className='fs-20 fw-700'>Previous Post</div>
                                            <div className='fs-20 fw-400'>Post title of previous post is displayed here</div>
                                        </div>
                                    </button>
                                </div>
                                <div className='col-sm-6 text-right'>
                                    <button className='btn btnIcon sliderArrowIcon d-inline-flex align-items-center text-right mb-4'>
                                        <div className='mr-3'>
                                            <div className='fs-20 fw-700'>Next Post</div>
                                            <div className='fs-20 fw-400'>Post title of Next post is displayed here</div>
                                        </div>                                        
                                        <ArrowCircleRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-5">
                <SimilarPost />
            </div>
        </InnerPageLayout>
    )
}
export default Buzzwords;