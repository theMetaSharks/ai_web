import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';


    
export const ConnectWallet = (props) => {    
    const closeBtn = <button className="close" onClick={props.closeModal}>
            <span className=''>x</span>  
        </button>;
    return(
        <Modal isOpen={props.openModal} centered="true" className="mymodal connectWalletModal" backdropClassName="selCurBp">       
        <ModalHeader onClick={props.closeModal} close={closeBtn}></ModalHeader>
        <ModalBody className='py-4'>
            <div className='row'>
                <div className='col-md-6'>
                    <Link to="" className='walletLink'>
                        <div>
                            <img src={require('../../../assets/images/wallet/metaMask.png')} alt='wallet1' />
                        </div>
                        <div className='walletTit'>Metamask</div>
                    </Link>
                </div>
                <div className='col-md-6 borderleftwallet'>
                    <Link to="" className='walletLink'>
                        <div>
                            <img src={require('../../../assets/images/wallet/walletConnect.png')} alt='wallet1' />
                        </div>
                        <div className='walletTit'>Wallet Connect</div>
                    </Link>
                </div>
            </div>
        </ModalBody>
        </Modal>
    )
}