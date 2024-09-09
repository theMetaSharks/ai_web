import React from 'react';
import { InnerPageLayout } from '../../layout/innderpageLayout';
import { SimilarPost } from '../../components/similarPost';
import tokenlaunching from '../../assets/images/token-launching.png';
import { ArrowCircleLeft } from '../../components/circle-arrow-left';
import { ArrowCircleRight } from '../../components/circle-arrow-right';

export const TokenLaunching = () => {
    return (
        <InnerPageLayout>
            <div className='pageContent py-0'>
                <div className='container'>
                    <div className='bannerContent mb-0'>
                        <div className='row align-items-end form-row'>
                            <div className="col-lg-7">
                                <div className='hmrbannerCnt mt-lg-5'>
                                    <div className='bannerSmTxt'>Events</div>
                                    <h1 className='bannerTit'>Launching $AITO: Available for purchase and invest</h1>
                                    <p className='bannerPara '>
                                        AI Toreda tokens $AITO are now available for purchase starting [launchdate]. To purchase AITO, users need to have Solana in their Phantom wallets.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="text-center">
                                    <img src={tokenlaunching} alt='tokenlaunching' className='img-fluid' />
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
                                <div className='cmspara'>
                                    <p>We are thrilled to announce the upcoming launch of the AI TOREDA token, $AITO. Built on the SOLANA blockchain, $AITO is designed to be more than just a digital currency; it’s a key part of our ecosystem, supporting various projects and day-to-day financial activities.</p>
                                </div>
                                <div className='cmstitle'>What is $AITO?</div>
                                <div className='cmspara'>
                                    <p>$AITO is primarily a transaction token, with a vision to become a widely accepted currency for everyday use. Whether you’re processing a visa, paying for educational services, or handling banking transactions, $AITO is here to make it easier and more cost-effective. In fact, you can enjoy discounts on these services when using $AITO.</p>
                                </div>
                               
                                <div className='cmstitle'>Key features and usecases:</div>
                                <div className='cmspara'>
                                    <ul>
                                        <li>Visa Processing: With the Philippines government on board, $AITO can be used for visa processing payments.</li>
                                        <li>Career Consulting & Crowdfunding: $AITO will also support payments in our career consulting and crowdfunding apps.</li>
                                        <li>Financial Services & Debit Card: We’re also launching an AI TOREDA debit card, enabling you to use $AITO for everyday purchases.</li>
                                    </ul>
                                </div>
                                <div className='cmstitle'>Why invest in $AITO</div>
                                <div className='cmspara'>
                                    <p>
                                    As a crypto enthusiast or technology investor, $AITO presents a unique opportunity. It’s not just about holding a token; it’s about being part of a growing ecosystem that’s building real-world applications. With potential partnerships on the horizon, like the ongoing negotiations with Sheikh Muhammad bin Suleman, and the confirmed contract with the Philippines government, $AITO is poised for significant adoption.
                                    </p>
                                </div>
                                <div className='cmstitle'>How to participate?</div>
                                <div className='cmspara'>
                                    <p>While the exact date for our Initial DEX Offering (IDO) is still being finalized, you can take advantage of the prelaunch period to purchase $AITO tokens. This is your chance to get in early and secure your stake in what promises to be a game-changing currency.</p>
                                    <p>Stay tuned for more details on how to participate and join us as we embark on this exciting journey with $AITO.</p>
                                </div>
                            </div>
                            <div className='row mb-5'>
                                <div className='col-sm-6 '>
                                    <button className='btn btnIcon sliderArrowIcon d-flex align-items-center text-left mb-4 sliderArrowIcon'>                                        
                                        <ArrowCircleLeft />
                                        <div className='ml-3'>
                                            <div className='fs-20 fw-700'>Previous Post</div>
                                            <div className='fs-20 fw-400'>Post title of previous post is displayed here</div>
                                        </div>
                                    </button>
                                </div>
                                <div className='col-sm-6 text-right'>
                                <button className='btn btnIcon sliderArrowIcon d-inline-flex align-items-center text-right mb-4 sliderArrowIcon'>                                
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