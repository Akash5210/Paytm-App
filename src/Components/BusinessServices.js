import React from 'react';

//images
import acceptPaymentImg from '../Images/acceptPaymentImg.png';
import shopPayment from '../Images/shopPayment.png';
import busiTool1 from '../Images/busiTool1.png';
import busiTool2 from '../Images/busiTool2.png';
import busiTool3 from '../Images/busiTool3.png';
import busiTool4 from '../Images/busiTool4.png';
import paytmMoneyIcon from '../Images/paytmMoney.png';
import money1 from '../Images/moneyTravel/1.png';
import money2 from '../Images/moneyTravel/2.png';
import money3 from '../Images/moneyTravel/3.png';
import money4 from '../Images/moneyTravel/4.png';
import money5 from '../Images/moneyTravel/5.png';
import travelIcon from '../Images/travel.png';
import travel1 from '../Images/moneyTravel/6.png';
import travel2 from '../Images/moneyTravel/7.png';
import travel3 from '../Images/moneyTravel/8.png';
import travel4 from '../Images/moneyTravel/9.png';
import travel5 from '../Images/moneyTravel/10.png';
// import travel6 from '../Images/moneyTravel/11.png';

export default function BusinessServices() {
    const paytmMoney = [
        { link:"#",
          imgSrc: money1,
          imgAlt: "stock",
          description: "Invest in Stocks" 
        },
        { link:"#",
          imgSrc: money2,
          imgAlt: "advertise",
          description: "Apply for IPO" 
        },
        { link:"#",
          imgSrc: money3,
          imgAlt: "market",
          description: "Invest in ETFs" 
        },
        { link:"#",
          imgSrc: money4,
          imgAlt: "gold",
          description: "Buy Gold" 
        },
        { link:"#",
          imgSrc: money5,
          imgAlt: "invest",
          description: "Invest in Mutual Fund" 
        }
    ];
    const paytmTravel = [
        { link:"#",
          imgSrc: travel1,
          imgAlt: "flight",
          description1: "Flat 14% Cashback",
          description2: "with Code WELCOMEFLIGHT"
        },
        { link:"#",
          imgSrc: travel2,
          imgAlt: "shild",
          description1: "100% Refund",
          description2: "With Paytm's Cancellation Protect" 
        },
        { link:"#",
          imgSrc: travel3,
          imgAlt: "bus",
          description1: "Flat 10% Cashback",
          description2: "With code HAPPYBUS"
        },
        { link:"#",
          imgSrc: travel4,
          imgAlt: "medical",
          description1: "Sanitised Bus Options With TravelSafe+",
          description2: ""
        },
        { link:"#",
          imgSrc: travel5,
          imgAlt: "train",
          description1: "Hassle Free Train Ticket Bookings",
          description2: "" 
        }
    ];
  return (
    <div className='businessSer mb-5'>
        <div className='paymentInstrument'>
            <h1 className='text-black fw-bold' style={{fontSize:"50px",}}>
                Business Services by Paytm
            </h1>
            {/* child1- Accept payments online */}
            <div className='row wallet pe-0 mt-4 mx-0 rounded bg-secondary bg-opacity-10'>
                <div className='col-6'>
                    <h2 className='mt-5 pt-5 fs-1 fw-semibold text-black lh-sm'>
                        Accept payments <br/> online with ease
                    </h2>
                    
                    <span className='d-block my-4 walletInfo2 fw-bold'>
                        Grow your business with the payment gateway that powers 
                        India’s largest brands and even the Paytm App
                    </span>
                    <button type="button" className="btn btn-primary rounded-5 learnMore" id=''>
                        Learn More<i class="fa fa-chevron-right ms-3" style={{ fontSize: "15px" }}></i>
                    </button>
                </div>
                <div className='col-6 text-end pe-0'>
                    <img src={acceptPaymentImg} width="85%" alt="balIcon" />
                </div>
            </div>
        </div>

        {/* child2- In-shop payments */}
        <div className='paymentInstrument shop'>
            <div className='row wallet pe-0 mx-0 rounded bg-secondary bg-opacity-10'>
                <div className='col-6'>
                <br/><br/>
                <br/>
                <h2 className='fs-1 fw-semibold text-black lh-sm'>
                    In-shop payments powered by Paytm.
                </h2>
                
                <span className='d-block my-4 walletInfo2 fw-bold'>
                    Millions of small & big businesses use Paytm to accept payments anywhere any 
                    time with a wide range of solutions for all kind of merchants
                </span>
                <button type="button" className="btn btn-primary rounded-5 learnMore" id=''>
                    Learn More<i class="fa fa-chevron-right ms-3" style={{ fontSize: "15px" }}></i>
                </button>
                </div>
                <div className='col-6 text-end pe-0'>
                    <img src={shopPayment} width="85%" alt="balIcon" />
                </div>
            </div>
        </div>

        {/* business tools */}
        <div className='businessTool py-5 mx-5 px-5 text-black'>
            <h1 className='fw-semibold'>
                Business Tools to help<br/> your business grow
            </h1>
            <div className='row mx-0 mt-5 pt-4 gx-5'>
                <div className='col-3'>
                    <img src={busiTool1} alt='toolImg' className='d-block' style={{width:'240px'}} />
                    <h3 className='fw-bold my-4'>POS Billing Software</h3>
                    <h5 className='lh-base'>Say Hello to Smart Retail Business Management</h5>    
                    <a href='#' className='text-decoration-none text-black fw-bold'>
                        Learn More
                        <i class="fa fa-arrow-right ms-3" style={{ fontSize: "15px" }}></i>
                    </a>
                </div>
                <div className='col-3'>
                    <img src={busiTool2} alt='toolImg' className='d-block' style={{width:'240px'}}/>
                    <h3 className='fw-bold my-4'>Paytm for Business App</h3>
                    <h5 className='lh-base'>Everything you need to manage your business on your phone</h5>    
                    <a href='#' className='text-decoration-none text-black fw-bold'>
                        Learn More
                        <i class="fa fa-arrow-right ms-3" style={{ fontSize: "15px" }}></i>
                    </a>
                </div>
                <div className='col-3'>
                    <img src={busiTool3} alt='toolImg' className='d-block' style={{width:'240px'}}/>
                    <h3 className='fw-bold my-4'>Advertise on Paytm</h3>
                    <h5 className='lh-base'>Grow your business by advertising on India’s largest mobile business</h5>    
                    <a href='#' className='text-decoration-none text-black fw-bold'>
                        Learn More
                        <i class="fa fa-arrow-right ms-3" style={{ fontSize: "15px" }}></i>
                    </a>
                </div>
                <div className='col-3'>
                    <img src={busiTool4} alt='toolImg' className='d-block' style={{width:'240px'}}/>
                    <h3 className='fw-bold my-4'>Business<br/> Khata</h3>
                    <h5 className='lh-base'>Managing Khata made easy</h5>    
                    <a href='#' className='text-decoration-none text-black fw-bold'>
                        Learn More
                        <i class="fa fa-arrow-right ms-3" style={{ fontSize: "15px" }}></i>
                    </a>
                </div>
            </div>
        </div>

        {/* Paytm Money */}
        <div className='money ms-5 ps-5 my-5 py-5'>
            <div className='row me-0 pe-0'>
                <div className='col-3 px-5'>
                    <img src={paytmMoneyIcon} alt='moneyIcon' style={{width:"140px"}}/>
                    <p className='lh-base fw-bold mt-5 pt-2'>Get started on wealth creation journey with Zero brokerage 
                        fee & no hidden charges.
                    </p>
                    <a href='#' className='text-info text-decoration-none fw-bold'>
                        Learn More
                    </a>
                </div>
                <div className='col-9 pe-0 me-0'>
                    <div className='row gx-2 me-0'>
                        {paytmMoney.map(item => {
                            return <a href={item.link} className='invest mb-2 col-2 me-3 rounded bg-info bg-opacity-75 text-decoration-none' style={{width:"160px"}}>
                                        <img className='pt-1 ' src={item.imgSrc} style={{width:"151px"}} alt={item.imgAlt}></img>
                                        <h5 className='my-3 px-4 py-1 fw-bold text-light text-center'>
                                            {item.description}
                                        </h5>
                                    </a>
                        })}
                    </div>
                </div>
            </div>
        </div>
        
        {/* Paytm Travel */}
        <div className='travel ms-5 ps-5 mt-5 pt-5'>
            <div className='row me-0 pe-0'>
                <div className='col-3 px-5'>
                    <img src={travelIcon} alt='moneyIcon' style={{width:"144px"}}/>
                    <p className='lh-base fw-bold mt-5 pt-2'>
                        Best travel solutions with quick ticket bookings, great 
                        offers and easy refunds
                    </p>
                    <a href='#' className='text-info text-decoration-none fw-bold'>
                        Learn More
                    </a>
                </div>
                <div className='col-9 pe-0 me-0'>
                    <div className='row gx-2 me-0'>
                        {paytmTravel.map(item => {
                            return <a href={item.link} className='money col-2 me-3 mb-2 border rounded bg-info bg-opacity-75 text-decoration-none' style={{width:"160px"}}>
                                        <img className='pt-4 ps-2' src={item.imgSrc} style={{width:"80px"}} alt={item.imgAlt}></img>
                                        <h5 className='my-2 px-2 pt-3 fw-bold text-light'>
                                            {item.description1}
                                        </h5>
                                        <h6 className=' px-2 small fw-bold text-light lh-base'>
                                           {item.description2}
                                        </h6>
                                    </a>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
