import React from 'react';
import { InnerPageLayout } from '../../../layout/innderpageLayout';
import blogBannerImg from '../../../assets/images/blogBannerImg.png';
import { SimilarPost } from '../../../components/similarPost';
import eventCntImg from '../../../assets/images/eventCntImg.png';
import { ArrowCircleLeft } from '../../../components/circle-arrow-left';
import { ArrowCircleRight } from '../../../components/circle-arrow-right';

export const BlogDetails = () => {
    return (    
        <>
            <InnerPageLayout>
              <div className='pageContent py-5'>
                <div className='container'>
                    <div className='bannerContent mb-5'>
                        <div className='row align-items-center'>
                            <div className="col-lg-7">
                                <div className='hmrbannerCnt mt-lg-5'>
                                    <div className='bannerSmTxt'>Events</div>
                                    <h1 className='bannerTit'>H1 Blog title or topic of&nbsp;the post.</h1>
                                    <p className='bannerPara'>
                                        Blog summary goes here. This location is dedicated to paragraphs that define what the post is all about.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className='bannerImg mt-4 mt-lg-0 text-lg-right text-center'>
                                    <img src={blogBannerImg} alt='roadmapBanner' className='img-fluid' />
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
                                <div className='cmstitle'>Latest blog post about AITO and crypto industry</div>
                                <div className='cmspara'>
                                    <p>This is a wisiwig editor that features admins to add  text &lt;p&gt; heading &lt;h1&gt; - &lt;h5&gt; imgaes media with ALT attributes, hyper links. and HTML code for iframes and imbeds, number list and bullet lists.</p>
                                </div>
                                <div className='text-center mt-4 mb-5' >
                                    <img src={eventCntImg} alt='eventCntImg' className='img-fluid'/>
                                </div>
                                <div className='cmspara'>
                                    <p>This is a wisiwig editor that features admins to add  text &lt;p&gt; heading &lt;h1&gt; - &lt;h5&gt; imgaes media with ALT attributes, hyper links. and HTML code for iframes and imbeds.</p>
                                    <p>This is a wisiwig editor that features admins to add  text &lt;p&gt; heading &lt;h1&gt; - &lt;h5&gt; imgaes media with ALT attributes, hyper links. and HTML code for iframes and imbeds.</p>
                                    <p>This is a wisiwig editor that features admins to add  text &lt;p&gt; heading &lt;h1&gt; - &lt;h5&gt; imgaes media with ALT attributes, hyper links. and HTML code for iframes and imbeds.</p>
                                    <p>This is a wisiwig editor that features admins to add  text &lt;p&gt; heading &lt;h1&gt; - &lt;h5&gt; imgaes media with ALT attributes, hyper links. and HTML code for iframes and imbeds.</p>
                                    <p>This is a wisiwig editor that features admins to add  text &lt;p&gt; heading &lt;h1&gt; - &lt;h5&gt; imgaes media with ALT attributes, hyper links. and HTML code for iframes and imbeds.</p>
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
              
            <SimilarPost />
            </InnerPageLayout>
        </>
    )
}