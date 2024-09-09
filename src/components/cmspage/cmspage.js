import React from 'react';
import aboutusImg from '../../assets/images/aboutus.png';

export const CMSpagelayout = ({pageTitle, cmsContent}) => {
    return(
       <div className="mainContent">
         <div className="pageContent">
            <div className='bannercenterBlurcircle'></div>
             <div className="container">
                 <div className='pageTit'>
                    {pageTitle}
                  </div>
                  <div className='bannerimg'>
                    <img src={aboutusImg} alt='cmsImg' className='img-fluid'/>
                  </div>
                    <div className='cmsContent'>
                    {cmsContent}
                    </div>
             </div>
         </div>
       </div>
    )
}

