import React from 'react';
import '../Styles/PaymentInstruments.css';

//images
import paytmPayment from '../Images/paytmPayment.png';
import paytmCard from '../Images/paytmCard.png';
import paytmMoney from '../Images/paytmMoney.png';
import paytmMoneyImg from '../Images/paytmMoneyImg.png';
import insuranceB from '../Images/insuranceB.png';
import insuranceImg from '../Images/insuranceImg.png';
import personalLoan from '../Images/personalLoan.png';
import personalLoanImg from '../Images/personalLoanImg.png';



export default function FinantialServices() {
    return (
        <div className='finServices'>
            <div className='paymentInstrument'>
                <h1 className='text-black fw-bold' style={{ fontSize: "50px", }}>
                    Financial Services by Paytm
                </h1>
                {/* child1 */}
                <div className='row wallet rounded'>
                    <div className='col-6 ps-0'>
                        <br />
                        <img src={paytmPayment} width="220px" alt="paytmBankIcon" />
                        <br /><br /><br />
                        <h2 className='fs-1 fw-semibold text-black lh-sm'>
                            India's most sincere <br /> bank.
                        </h2>

                        <span className='fs-5 d-block my-5 walletInfo2 text-black'>
                            Paytm Payments Bank offers secure, transparent and risk-free banking at
                            your fingertips. With instant account opening, virtual debit card and
                            zero balance requirements, experience the future of banking today.
                        </span>
                        <button type="button" className="btn btn-primary rounded-5 learnMore" id=''>
                            Learn More<i class="fa fa-chevron-right ms-3" style={{ fontSize: "15px" }}></i>
                        </button>
                    </div>
                    {/* <div className=''></div> */}
                    <div className='col-6 pe-0 text-end'>
                        <img src={paytmCard} width="80%" alt="cardImg" />
                    </div>
                </div>
            </div>
            
            {/* child2 - paytm money*/}
            <div className='row payMoney mt-4 gx-0 bg-secondary bg-opacity-10'>
                <div className='col'>
                    <img src={paytmMoneyImg} width="460px" alt="cardImg" />
                </div>
                <div className='col'>
                    <img src={paytmMoney} width="145px" alt="paytmBankIcon" />
                    <br /><br /><br />
                    <h2 className='fs-1 fw-semibold text-black lh-sm'>
                        Build Long-term<br /> Wealth & Achieve <br />your Goals.
                    </h2>

                    <span className='d-block my-4 fs-5 walletInfo2'>
                        Investing on Paytm Money is transparent, low-cost and commission-free.
                        Buy stocks & mutual funds that can help you create wealth & realise
                        your dreams.
                    </span>
                    <button type="button" className="btn btn-primary rounded-5 learnMore" id=''>
                        Learn More<i class="fa fa-chevron-right ms-3" style={{ fontSize: "15px" }}></i>
                    </button>
                </div>
            </div>

            {/* child3 */}
            <div className='row paymentInstrument'>
                <div className='col'>
                    <br />
                    <img src={insuranceB} width="170px" alt="paytmBankIcon" />
                    <br /><br /><br />
                    <h2 className='fs-1 fw-semibold text-black lh-sm'>
                        Insurance made easy.
                    </h2>

                    <span className='fs-5 d-block my-5 walletInfo2 text-black pe-4'>
                        Buying insurance does not have to be tedious, time-consuming & confusing.
                        Paytm Insurance removes the worry of getting insured by making it simple, 
                        convenient & easy-to-understand.

                    </span>
                    <button type="button" className="btn btn-primary rounded-5 learnMore" id=''>
                        Learn More<i class="fa fa-chevron-right ms-3" style={{ fontSize: "15px" }}></i>
                    </button>
                </div>
                {/* <div className=''></div> */}
                <div className='col pe-0 text-end'>
                    <img src={insuranceImg} width="460px" alt="cardImg" />
                </div>
            </div>  

            {/* child4- Get a Personal Loan */}
            <div className='row payMoney mt-4 gx-0 bg-secondary bg-opacity-10'>
                <div className='col'>
                    <img src={personalLoanImg} width="460px" alt="cardImg" />
                </div>
                <div className='col'>
                    <br/><br/>
                    <img src={personalLoan} width="145px" alt="paytmBankIcon" />
                    <br /><br /><br />
                    <h2 className='fs-1 fw-semibold text-black lh-sm'>
                        Get a Personal Loan in 2 Minutes.
                    </h2>

                    <span className='d-block my-4 fs-6 fw-bold walletInfo2'>
                        Paytm offers India's quickest multi-purpose, hassle-free loan. 
                        It is 100% digital, transparent and paperless.
                    </span>
                    <button type="button" className="btn btn-primary rounded-5 learnMore" id=''>
                        Learn More<i class="fa fa-chevron-right ms-3" style={{ fontSize: "15px" }}></i>
                    </button>
                </div>
            </div>  
        </div>
    )
}
