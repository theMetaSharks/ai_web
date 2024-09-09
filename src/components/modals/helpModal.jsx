import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

export const HelpModal = ({ modalOpen, modalClose }) => {
  //model  close button
  const closeBtn = (
    <button className="close" onClick={modalClose}>
      <span className="">x</span>
    </button>
  );
  return (
    <Modal isOpen={modalOpen} centered="true" className="mymodal connectWalletModal" backdropClassName="selCurBp">
      <ModalHeader onClick={modalClose} close={closeBtn}></ModalHeader>
      <ModalBody className="py-4">
        <div className="stepTit">$AITO Buying Guide:</div>
        <div className="mb-4">
          <div className="stepNo">Step1: choose your wallet</div>
          <div className="step-desc">To use, trade, or hold AITO, you'll need a wallet. You can choose a wallet that best suits your needs.</div>
        </div>
        <div className="mb-4">
          <div className="stepNo">Step2: configure your wallet</div>
          <div className="step-desc">After downloading, you can configure your wallet.</div>
        </div>
        <div className="mb-4">
          <div className="stepNo">Step3: get some AITO</div>
          <div className="step-desc">Buy AITO tokens today to unlock your potential benefits.</div>
        </div>
      </ModalBody>
    </Modal>
  );
};
