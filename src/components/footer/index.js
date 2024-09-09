import React, { useState } from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

export const Footer = () => {
    const getyear  = useState(new Date().getFullYear());
    return(
        <footer className='footer'>
            <div className="container">
                <div className="row">
                  
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-4 mb-md-0">
                    <div className="footerListTitle">Contact</div>
                        <div>
                            <ul className="footerList">
                                <li><Link to="/">info@aitoreds.com</Link></li>
                                <li><Link to="/">support@aitoreds.com</Link></li>                               
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-4 mb-md-0 pl-lg-5">                    
                        <div className='pl-lg-5'>
                        <div className="footerListTitle">Newsletter</div>
                            <ul className="footerList">                               
                                <li><Link to="/">Terms and Condition</Link></li>
                                <li><Link to="/">Privacy Policy</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 text-md-right">
                    <div className="footerListTitle">Support</div>
                    <div className='supportTxt'>enquiries@AiToreda.io</div>
                        <div className='logo mb-2'>
                            <img src={require('../../assets/images/footerlogo.png')} alt='footerlogo' />
                        </div>                      
                    </div>
                </div>
                <div className='secondfooter'>                
                  Copyright © {getyear} AI Toreda – All Rights Reserved.
                </div>
            </div>            
        </footer>
    )
}
 