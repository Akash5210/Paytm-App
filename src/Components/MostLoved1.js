import React from 'react';
import '../Styles/MostLoved1.css';

//images
import paytmIcon from '../Images/paytmIcon.png';
import smartphone from '../Images/smartphone.png';
import icon1 from "../Images/icon/1.png";
import icon2 from "../Images/icon/2.png";
import icon3 from "../Images/icon/3.png";
import icon4 from "../Images/icon/4.png";
import icon5 from "../Images/icon/5.png";
import icon6 from "../Images/icon/6.png";
import icon7 from "../Images/icon/7.png";
import icon8 from "../Images/icon/8.png";
import icon9 from "../Images/icon/9.png";
import icon10 from "../Images/icon/10.png";
import icon11 from "../Images/icon/11.png";
import icon12 from "../Images/icon/12.png";
import icon13 from "../Images/icon/13.png";
import icon14 from "../Images/icon/14.png";


export default function MostLoved1() {
  return (
    <div>
        <div className='text-center bg-body-secondary kyc'>
          <p className='fw-semibold'>No Wallet KYC Required 
          <span className='fs-4 lh-1'> &#128522;</span>
          <span className='fw-normal'> to pay using UPI on Paytm. </span>
          <a className='btn fw-semibold ps-0'>Learn more.</a></p>
        </div>
        <div className='row mostLoved ms-5 me-0'>
            <div className='col-6'>
                <img src={paytmIcon} width="80px" className='shadow '/>
                <h1 className='mt-5 text-black'>India's Most-loved Payments App</h1>
                <p className='text-start text-black'>Recharge & pay bills, book flights & movie tickets, open a savings 
                    account, invest in stocks & mutual funds, and do a lot more.
                </p>
                <button type="button" className="btn btn-outline-dark reverse rounded-5 px-4 py-2 fw-semibold">Download Paytm App 
                  <i class="fab fa-apple" style={{width: '30px',fontSize:"20px"}} />
                  <i class="fab fa-google-play"  />
                </button>
            </div>
            <div className='col-6 text-end pe-0'><img src={smartphone} width="85%" alt='smartphone' /></div>
        </div>

        <div className='rechargeAndBook'>
          <div className='text-white  recharge'>
              <h2 className='fw-bold'>Recharge & Pay Bills on Paytm.</h2>
              <div className='row mx-2 mt-4 '>
                  <div className='col me-4 rounded p-0 '><a href='#' className='fw-semibold btn btn-outline-primary text-start pb-4 pt-3'><img src={icon1} className="d-block mb-3" width="63px" role="button"/>Recharge <p className='mb-0'>Prepaid</p><p className='mb-0'>Mobile <i class="fa fa-chevron-right" style={{fontSize:"12px"}}></i></p></a></div>
                  <div className='col me-4 rounded p-0'><a href='#' className='fw-semibold btn btn-outline-primary text-start pb-4 pt-3'><img src={icon2} className="d-block mb-3" width="63px" role="button"/>Pay <p className='mb-0'>Electricity</p><p className='mb-0'>Bill <i class="fa fa-chevron-right" style={{fontSize:"12px"}}></i></p></a></div>
                  <div className='col me-4 rounded p-0'><a href='#' className='fw-semibold btn btn-outline-primary text-start pb-4 pt-3'><img src={icon3} className="d-block mb-3" width="63px" role="button"/>Recharge <p className='mb-0'>DTH</p><p className='mb-0'>Connection <i class="fa fa-chevron-right" style={{fontSize:"12px"}}></i></p></a></div>
                  <div className='col me-4 rounded p-0'><a href='#' className='fw-semibold btn btn-outline-primary text-start pb-4 pt-3'><img src={icon4} className="d-block mb-3" width="63px" role="button"/>Book <p className='mb-0'>Gas</p><p className='mb-0'>Cylinder <i class="fa fa-chevron-right" style={{fontSize:"12px"}}></i></p></a></div>
                  <div className='col me-4 rounded p-0'><a href='#' className='fw-semibold btn btn-outline-primary text-start pb-4 pt-3'><img src={icon5} className="d-block mb-3" width="63px" role="button"/>Pay <p className='mb-0'>Broadband &</p><p className='mb-0'>Landline Bill <i class="fa fa-chevron-right" style={{fontSize:"12px"}}></i></p></a></div>
                  <div className='col me-4 rounded p-0'><a href='#' className='fw-semibold btn btn-outline-primary text-start pb-4 pt-3'><img src={icon6} className="d-block mb-3" width="63px" role="button"/>Pay <p className='mb-0'>Education</p><p className='mb-0'>Fee <i class="fa fa-chevron-right" style={{fontSize:"12px"}}></i></p></a></div>
                  <div className='col rounded p-0'><a href='#' className='fw-semibold btn btn-outline-primary text-start pb-4 pt-3'><img src={icon7} className="d-block mb-3" width="63px" role="button"/>All <p className='mb-0'>Payment</p><p className='mb-0'>Services <i class="fa fa-chevron-right" style={{fontSize:"12px"}}></i></p></a></div>
              </div>
          </div>
          <div className='text-white  andBook'>
              <h2 className='fw-bold'>Book & Buy on Paytm.</h2>
              <div className='row mx-2 mt-4 '>
                  <div className='col me-4 rounded p-0 '><a href='#' className='fw-bold btn btn-outline-primary text-start pb-3 pt-3'><img src={icon8} className="d-block mb-3" width="63px" role="button"/> <p className='mb-0'>Movie</p><p className='mb-0'>Tickets <i class="fa fa-chevron-right" style={{fontSize:"12px"}}></i></p></a></div>
                  <div className='col me-4 rounded p-0'><a href='#' className='fw-bold btn btn-outline-primary text-start pb-3 pt-3'><img src={icon9} className="d-block mb-3" width="63px" role="button"/> <p className='mb-0'>Flight</p><p className='mb-0'>Tickets <i class="fa fa-chevron-right" style={{fontSize:"12px"}}></i></p></a></div>
                  <div className='col me-4 rounded p-0'><a href='#' className='fw-bold btn btn-outline-primary text-start pb-3 pt-3'><img src={icon10} className="d-block mb-3" width="63px" role="button"/> <p className='mb-0'>Bus</p><p className='mb-0'>Tickets <i class="fa fa-chevron-right" style={{fontSize:"12px"}}></i></p></a></div>
                  <div className='col me-4 rounded p-0'><a href='#' className='fw-bold btn btn-outline-primary text-start pb-3 pt-3'><img src={icon11} className="d-block mb-3" width="63px" role="button"/> <p className='mb-0'>Train</p><p className='mb-0'>Tickets <i class="fa fa-chevron-right" style={{fontSize:"12px"}}></i></p></a></div>
                  <div className='col me-4 rounded p-0'><a href='#' className='fw-bold btn btn-outline-primary text-start pb-3 pt-3'><img src={icon12} className="d-block mb-3" width="63px" role="button"/> <p className='mb-0'>Buy</p><p className='mb-0'>Insurance<i class="fa fa-chevron-right" style={{fontSize:"12px"}}></i></p></a></div>
                  <div className='col me-4 rounded p-0'><a href='#' className='fw-bold btn btn-outline-primary text-start pb-3 pt-3'><img src={icon13} className="d-block mb-3" width="63px" role="button"/> <p className='mb-0'>International</p><p className='mb-0'>Flights <i class="fa fa-chevron-right" style={{fontSize:"12px"}}></i></p></a></div>
                  <div className='col rounded p-0'><a href='#' className='fw-bold btn btn-outline-primary text-start pb-3 pt-3'><img src={icon14} className="d-block mb-3" width="63px" role="button"/> <p className='mb-0'>Invest</p><p className='mb-0'>in Stocks <i class="fa fa-chevron-right" style={{fontSize:"12px"}}></i></p></a></div>
              </div>
          </div>
        </div>
    </div>
  )
}
