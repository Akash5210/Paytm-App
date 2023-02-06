import React from 'react';
import '../Styles/PaymentInstruments.css';

//images
import wallet from '../Images/wallet.png';
import walletBalance from '../Images/walletBalance.png';
import UPI from '../Images/UPI.png';
import paidSuccessfully from '../Images/paidSuccessfully.png';
import postpaidIcon from '../Images/postpaidIcon.png';
import postpaid from '../Images/postpaid.png';
import sbiCard from '../Images/sbiCard.png';
import hdfcCard from '../Images/hdfcCard.png';
import card1 from '../Images/card1.png';
import card2 from '../Images/card2.png';

export default function PaymentInstruments() {
  return (
    <div className='paymentInstrument bg-secondary bg-opacity-10'>
      <h1 className='text-black fw-bold' style={{fontSize:"50px",}}>
        Paytm Payment Instruments
      </h1>
      {/* child1- fastast way*/}
      <div className='row mt-4 rounded wallet bg-white'>
        <div className='col-6 pe-5 adjecentChild'>
          <br/><br/>
          <img src={wallet} width="80px" alt="wallIcon"/>
          <span className='fw-bold d-inline-block text-black lh-sm walletInfo1' style={{width: "70px"}}>
            Paytm  Wallet
          </span><br/><br/><br/>
          <h2 className='fs-2 fw-semibold text-black lh-sm'>The Fastest Way to <br/> Pay In-store & Online.</h2>
          
          <span className='d-block my-4 walletInfo2 fw-bold'>Load up your Paytm Wallet for free and make payments in 
            a jiffy at over 21 million stores, websites and apps.
          </span>
          <button type="button" className="btn btn-outline-dark reverse rounded-5 px-4 py-2 fw-semibold">
            Download the App 
            <i class="fab fa-apple" style={{width: '30px',fontSize:"20px"}} />
            <i class="fab fa-google-play"  />
          </button>
        </div>
        <div className='col-6 adjecentChild'>
          <img src={walletBalance} width="100%" alt="balIcon" />
        </div>
      </div>

      {/* child2- pay anyone */}
      <div className='row mt-5 rounded wallet bg-white'>
        <div className='col-6 pe-5 adjecentChild'>
          <img src={UPI} width="80px" alt="wallIcon"/>
          <span className='fw-bold d-inline-block text-black lh-sm walletInfo1' style={{width: "90px"}}>
            UPI Money Transfer
          </span><br/><br/><br/>
          <h2 className='fs-2 fw-semibold text-black lh-sm'>Pay anyone directly <br/> from your bank <br/> account.</h2>
          
          <span className='d-block my-4 walletInfo2 fw-bold'>Pay anyone, everywhere. Make contactless & 
            secure payments in-stores or online using Paytm Wallet or Directly from your Bank Account. 
            Plus, send & receive money from anyone.
          </span>
          <button type="button" className="btn btn-outline-dark reverse rounded-5 px-4 py-2 fw-semibold">
            Download the App 
            <i class="fab fa-apple" style={{width: '30px',fontSize:"20px"}} />
            <i class="fab fa-google-play"  />
          </button>
        </div>
        <div className='col-6 adjecentChild'>
          <img src={paidSuccessfully} width="100%" alt="balIcon" />
        </div>
      </div>

      {/* child3- want it? */}
      <div className='row mt-5 rounded wallet bg-white'>
        <div className='col-6 adjecentChild pe-5'>
          <br/>
          <img src={postpaidIcon} width="190px" alt="wallIcon"/>
          <br/><br/><br/>
          <h2 className='fs-2 fw-semibold text-black lh-sm'>Want it?<br/>No more waiting for it.</h2>
          
          <span className='d-block my-4 walletInfo2 fw-bold'>With Paytm Postpaid, your wishlist 
            doesn't have to be on the waitlist. Shop for the things you want today and 
            pay for them next month.
          </span>
          <button type="button" className="btn btn-primary rounded-5 learnMore" id=''>
            Learn More<i class="fa fa-chevron-right ms-3" style={{fontSize:"15px"}}></i>
          </button>
        </div>
        <div className='col-6 adjecentChild'>
          <img src={postpaid} width="100%" alt="balIcon" className=''/>
        </div>
      </div>

      {/* child4- HDFC and SBI card*/}
      <div className='row justify-content-between mt-5 wallet child4'>
        <div className='col-5 adjecentChild bg-light'>
          <br/>
          <img src={hdfcCard} width="190px" alt="wallIcon"/>
          <br/><br/>
          <h2 className='fs-1 fw-semibold text-black lh-sm'>Unlimited Cashback<br/>Every time</h2>
          
          <span className='d-block my-4 walletInfo2 fw-bold'>Paytm HDFC Bank Select Credit Card. 
            A card with assured Cashback and incredible offers.
          </span>
          <img src={card1} width="100%" alt="balIcon" className='mt-4'/>
        </div>
        
        <div className='col-5 adjecentChild bg-light'>
          <br/>
          <img src={sbiCard} width="190px" alt="wallIcon"/>
          <br/><br/>
          <h2 className='fs-1 fw-semibold text-black lh-sm'>India’s Most <br/> Sincere Credit Card</h2>
          
          <span className='d-block my-4 walletInfo2 fw-bold'>Paytm SBI Card SELECT - With 
            Intelligent Features & Great Rewards that Never Expire
          </span>
          <img src={card2} width="100%" alt="balIcon" className='mt-4'/>
        </div>
      </div>

    </div>
  )
}
