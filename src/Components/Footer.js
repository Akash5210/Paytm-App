import React from 'react';
import '../Styles/Footer.css';

//images and icons
import downloadApple from '../Images/downloadApple.svg';
import downloadGoogle from '../Images/downloadGoogle.svg';
import twitterLogo from '../Images/twitter.svg';
import instagramLogo from '../Images/instagram.svg';
import facebookLogo from '../Images/facebook.svg';
import helpIcon from '../Images/help.svg';
import assuranceIcon from '../Images/assurance.svg';
import trustIcon from '../Images/trust.svg';

import americanExp from '../Images/bankIcon/americanExpress.png';
import dinerClub from '../Images/bankIcon/dinerClub.svg';
import mastercard from '../Images/bankIcon/mastercard.svg';
import pci from '../Images/bankIcon/pci.svg';
import rupay from '../Images/bankIcon/ruPay.svg';
import visa from '../Images/bankIcon/visa.svg';

export default function Footer() {
  const investorRelation = ['Home',"Financials","Filings & Press Releases","News & Events","Corporate Governance","Resources"];
  const company = ["About Us","CSR","Blog","Contact Us","Terms & Conditions","Sustainability"]
  const recharge = ["Mobile Recharge","Mobile Bill Payment","Datacard Recharge","Datacard Bill Payment","Dth Recharge","Electricity Bill Payment",
                    "Landline Bill Payment","Broadband Bill Payment","Gas Bill Payment","Water Bill Payment","Metro Card Recharge","Municipal Recharge",
                    "Toll Recharge","Credit Bill Payment","Cabletv Recharge","Devotion","Rental Bill Payment","Fastag Recharge"];
  
  const payLoan = ['Pay Loan EMI', "Pay Insurance Premium"];
  const bookTravel =["Movie Ticket Booking","Bus Ticket Booking","Flight Tickets Booking","Train Ticket Booking","Events Booking","Upcoming Movies",
                    "Trains Sitemap","Bus Sitemap"];
  const investment = ["Mutual Fund Investments","Miscellaneous"];
  const insurance = ["Car Insurance","Two Wheeler Insurance","Health Insurance", "Life Insurance", "Term Insurance"];
  const loan = ["Postpaid","Credit Cards", "Personal Loan", "Credit Report"];
  const financialTool = ["EMI Calculator", "Personal Loan EMI Calculator","Home Loan EMI Calculator","Car Loan EMI Calculator","IFSC Code Finder", "Financial Tools & Calculators",
                        "Currency Convertor"];
  const aboutUs = ["About Us","24x7 Help","Partner with us","Grievance policy","Blog",
                      "Bug bounty","Privacy","Terms & Conditions"];

  
  return (
    <div className='footer bg-secondary bg-opacity-10 px-5 pt-5'>
        <div className='row my-5'>
          <div className='col-3'>
            <h5 className='downloadApp fw-bold  text-dark'>Download Paytm App <br/>to Pay from anywhere</h5>
          </div>
          <div className='col-5'>
            <a href='#'><img src={downloadApple} className="store me-2" alt="downloadApple" /></a>
            <a href='#'><img src={downloadGoogle} className="store" alt="downloadGoogle" /></a>
          </div>
          <div className='col socialLogo text-end pt-3'>
              <a href='#'><img src={twitterLogo} alt='twitter'/></a>
              <a href='#'><img src={instagramLogo} className="mx-4" alt='instagram'/></a>
              <a href='#'><img src={facebookLogo} alt='facebook'/></a>
          </div>
        </div>
        <hr/>

        <div className='moreAccordion pt-5'>
          <div class="accordion" id="accordionExample">

            <div class="">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Investor Relations
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body row">
                  {investorRelation.map(item => {
                    return <div className='col-2'><a href='#' className='body-item-link'>{item}</a></div>
                  })}
                </div>
              </div>
            </div>

            <div class="">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  More about Paytm
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                <div className=''>
                  <h6 className='mb-3'>Paytm - India's Most Popular Platform for Money Transfer, BHIM UPI Payments, Recharges and other online payments</h6>
                  <p>Paytm - India’s largest mobile e-commerce website is an ultimate destination for prompt <a href='#' className='fw-bolder text-decoration-none text-info'>Online Recharge</a>, DTH, Data Card & Metro Card Recharge and Mobile Bill Payment for Airtel, Aircel, BSNL, Idea, MTNL, Vodafone & other operators for all the circles across India. Enjoy our online recharge and bill payment service along with best bonus packs of internet & roaming within a jiffy.</p>
                  <p>Now you don’t have to look at various websites to find the best entertainment option in your city. You can book movie tickets, event tickets and travel tickets within minutes on Paytm.com. Paytm login is very easy on the <a href='#' className='fw-bolder text-decoration-none text-info'>Paytm app</a> and Paytm website. Just enter your number and Password/OTP to login and process all the transactions instantly on Paytm.</p>
                  
                  <p className='fw-bolder'>Mobile Recharge - Airtel, Vodafone, Idea, Jio, BSNL, MTNL, and More</p>
                  <p>Now making an online recharge has become very easy and safe with your Paytm account on Paytm.com. Effortlessly make payments through our safe methods, processed through secured gateways for 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Airtel Recharge</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Jio Recharge</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Vodafone Idea Recharge</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> MTNL Recharge</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> BSNL Recharge</a>. 
                  Paytm also provide you with exciting cashback and offers on Paytm</p>
                  <p>All The Latest Plans And Packs For Your Mobile Recharge- Paytm makes it very easier for you to make recharge online with Paytm. You can browse all the latest recharge plans and offers right on Paytm itself. More than that, Paytm.com or Paytm app fetches your operator and circle automatically as soon as you enter your number, making the process faster and easier for you.</p>
                  
                  <p className='fw-bolder'>Online Shopping- Find Best Deals Online On Groceries, Appliances And Latest Smart Phones at Paytm</p>
                  <p>Paytm Mall Maha Shopping Festival Sale is back this festive season. Shop on Paytm Mall and enjoy the best ever online Diwali sale you can come across. With a vibrant range of products from electronic gadgets, mobiles and appliances to fashion accessories and footwear collections at unbelievable prices, this online sale is going to be the year’s best shopping experience!</p>
                  <p>Tech Fanatics, if you are eager to buy the best <a href='#' className='fw-bolder text-decoration-none text-info'>mobile</a> phones then here is an ultimate mobile destination for you. Discover the wide selection of mobiles like VIVO V15 Pro, Oppo F11 Pro, Samsung Galaxy A50, iPhone X, Redmi Y2, Lenovo K8 Note, VIVO Y55S, Redmi Note 6 Pro so on that offers the perfect combination of performance and exciting features. There is a lot more for you to explore, check out the exhaustive collection of the latest smartphones at great discounts and Cashbacks on Paytm Mall. Add a brand new vehicle to your collection, enjoy the exclusive online pre-booking service for <a href='#' className='fw-bolder text-decoration-none text-info'>new cars & bikes</a> at Paytm. Be the first one to bring home the newly launched automobile, forget sweating for owning the latest car & bike in the town. With Paytm, you can make pre-booking online for cars & bikes in seconds along with exclusive offers that are especially for you.</p>
                  <p>Cashback would be added as Paytm Cash, which is One97 Communications Ltd. loyalty program. It can be used to pay for goods & services sold by merchants that accept ‘Pay with Paytm’.</p>
                  <p>Grab jaw-dropping <a href='#' className='fw-bolder text-decoration-none text-info'>Paytm Coupons</a>, Deals, Discounts & Cashback Offers while shopping, who wouldn’t love to shop at discounted prices Paytm presents several <a href='#' className='fw-bolder text-decoration-none text-info'>offers</a> across a huge range of products under our stimulating stores. Shop more & save even more at Sunday Bazaar, Bargain Bazaar and Under 199 stores. Double the joy of weekend shopping, avail electrifying offers at our Sunday Bazaar, this is surely going to make your Sunday more amazing Buy your favourites at the lowest price possible with tons of discounts at Under 199 Store and shop more with smartness from our irresistible Bargain Bazaar.</p>
                  
                  <p className='fw-bolder'>Online Tickets - Flight Tickets, Train Tickets, Bus Tickets And Hotels Booking with Great Ease</p>
                  <p>Save money and time by booking your travel tickets on Paytm. You can find <a href='#' className='fw-bolder text-decoration-none text-info'>cheap flight tickets</a>, train tickets and bus tickets on Paytm. Compare the prices, get schedules, pick the best-suited seat and experience easy ticket booking services online. You can also save money on your travel by applying promo codes on flights, buses, trains & <a href='#' className='fw-bolder text-decoration-none text-info'>hotels bookings</a> to get cashback in your Paytm wallet on your travel tickets.</p>
                  <p><span className='fw-bolder'>Flight Tickets-</span> Make your flight booking online on Paytm to find cheap flight tickets and <a href='#' className='fw-bolder text-decoration-none text-info'>flight tickets</a> offers. Just enter your boarding and destination city to know all the flight tickets prices for both <a href='#' className='fw-bolder text-decoration-none text-info'>domestic flights</a> and <a href='#' className='fw-bolder text-decoration-none text-info'>international flights.</a></p>
                  <p><span className='fw-bolder'>Train Ticket Booking-</span>  
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Check PNR status</a>, find train schedule and 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> get train seat availability</a> for your online 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> train ticket bookings</a>. 
                  Just enter your boarding and destination station or city to know all the train ticket prices. Make instant train reservation through Paytm and save money with cashback.</p>
                  <p><span className='fw-bolder'>Bus Tickets-</span> Make fast online <a href='#' className='fw-bolder text-decoration-none text-info'>bus ticket booking</a> for both AC and Non-AC buses, private and government buses on Paytm. Find all the buses and timings along with <a href='#' className='fw-bolder text-decoration-none text-info'>bus ticket offers</a> for your bus tickets.</p>
                  
                  <p className='fw-bolder'>Mobile, DTH and Data Card Recharge & Payment On-The-Go</p>
                  <p>No need to rush to the market for 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> DTH Recharge </a>or 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Mobile Bill Payment</a>, 
                    just login to Paytm and make immediate payments. Cherish your experience with exciting Cashback and Discounts on every recharge or bill payment you make with us. Our online recharge and bill payment service is a one-stop solution for fast & easy Prepaid Mobiles, DTH & Data Card recharge and Postpaid Mobiles.</p>
                  <p><span className='fw-bolder'>DTH Recharge- </span>Make DTH recharge online and get DTH recharge offers on Paytm. 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Tata sky recharge</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Airtel DTH recharge</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Videocon D2H recharge</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Sun Direct recharge</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Dish TV recharge </a>
                  and more on Paytm.com. Find all the latest DTH recharge offers and plans only on Paytm.</p>
                  <p><span className='fw-bolder'>Data Card Recharge- </span>Get your 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Airtel Data Card Recharge</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Vodafone Idea Data Card Recharge</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Jio Data Card Recharge</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> BSNL Data Card Recharge</a> and 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> MTNL Data Card Recharge </a> 
                  now on Paytm.com and avail cashback by applying promo codes.</p>
                  <p><span className='fw-bolder'>Data Card Bill Payment:</span>Pay your data card bills on your postpaid connection of 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Airtel</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Idea</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Vodafone</a>.
                  </p>
                  <p>Visit us and recharge your Prepaid Mobile, DTH and Data Card or Make Postpaid Mobile Bill Payments and other Utility Bill Payments in a click and indulge into an unbelievable online shopping experience.</p>
                  
                  <p className='fw-bolder'>Buy FASTag Online And Move Quickly Through the Toll Lanes:</p>
                  <p>Avoid long queues at the toll lanes and move quickly through them with the help of Paytm <a href='#' className='fw-bolder text-decoration-none text-info'>FASTag</a>. It is very easy to buy FASTag for your vehicle at Paytm in just a few minutes. Order Toll-Tag now or just register for one at Paytm instantly and drive freely with the toll tags.</p>
                  
                  <p className='fw-bolder'>Online Bill Payment Postpaid Bills, Quick Utility Bill, Insurance, Loan & Education Fee Payment</p>
                  <p><span className='fw-bolder'>Postpaid Bill Payment-</span> Mobile Post-paid bill payments for all the renowned operators such as 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Airtel</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Vodafone Idea Postpaid</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Jio</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> BSNL</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> MTNL </a> 
                  are available on Paytm.com</p>
                  <p>Pay
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Electricity Bill</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Gas Bill </a>
                  & Water Bill instantly in just a few clicks Enjoy uncomplicated utility bill online payment service without even travelling to the stores at Paytm. We are no doubt a reliable platform for speedy electricity, gas & water bill payment.</p>
                  <p><span className='fw-bolder'>Electricity Bill Payment-</span>Pay your electricity bills online on Paytm.com and avoid waiting in the queues for hours with Paytm.com. Pay electricity bills in 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Goa Electricity Bill Payment</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Bihar Electricity Bill Payment</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Haryana Electricity Bill Payment</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Maharashtra Electricity Bill Payment</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Punjab Electricity Bill Payment</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Telangana Electricity Bill Payment </a>
                  and many more cities.</p>
                  <p><span className='fw-bolder'>Gas And Water Bill Payment-</span>Pay your water bills within seconds in of 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Delhi Jal Board</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Indore Municipal Corporation</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Gwalior Municipal Corporation</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Bhopal Municipal Corporation</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Bangalore Water Supply and Sewage Board</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Surat Municipal Corporation</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Pune Municipal Corporation</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Nagpur Municipal Corporation</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'>Uttrakhand Jal Sansthan </a>
                  and more.</p>
                  <p><span className='fw-bolder'>Pay gas bills</span>of 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Indraprastha Gas Limited</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Gujarat Gas Limited</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Adani Gas Limited</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Aavantika Gas Limited</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Vadodara Gas Limited</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Maharashtra Natural Gas Ltd </a> 
                  and more.</p>
                  <p><span className='fw-bolder'>Fee Payment, Metro Card Recharge, Insurance Premium and Gold Loan-</span>Forget those gigantic queues, <a href='#' className='fw-bolder text-decoration-none text-info'>pay admission fee </a>or registration fee for various Institutes, Schools & Colleges online here and save your time. We ensure to provide you with a seamless and speedy service every time you visit us. Now you can also <a href='#' className='fw-bolder text-decoration-none text-info'>recharge metro card</a> and instantly <a href='#' className='fw-bolder text-decoration-none text-info'>pay insurance premium</a> & gold loan online with Paytm through the comfort of wherever you are.</p>
                  <p><span className='fw-bolder'>Landline And Broadband Bill Payment -</span>Pay landline and broadband bills of all the major operators such as 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Airtel</a>,
                    <a href='#' className='fw-bolder text-decoration-none text-info'> BSNL</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Hathway</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Asianet Broadband</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Alliance Broadband</a>, 
                    <a href='#' className='fw-bolder text-decoration-none text-info'> Tata Play Fibre </a> 
                  and many more at Paytm.com.</p>
                  
                  <p className='fw-bolder'>Mutual Fund Investments made Simple, Transparent and Accessible with Paytm Money</p>
                  <p>Ab Mutual Funds ke liye bhi Paytm Karo. Presenting, Paytm Money - India's Most Sincere Wealth Adviser. You can now begin your <a href='#' className='fw-bolder text-decoration-none text-info'>mutual fund </a> investment journey on the Paytm Money App with 100% paperless KYC verification. Open your investment account within minutes & start an SIP in mutual funds with just Rs.100 on the very same day. Take an assessment of your appetite for risk with our Free Risk Profile Assessment. Explore and invest in the <a href='#' className='fw-bolder text-decoration-none text-info'>best mutual funds</a> rated by leading research agencies and achieve your personal and financial goals.</p>
                  <p>At Paytm Money, you can manage your SIPs, request portfolio-related statements and view the latest portfolio updates. Enjoy the <a href='#' className='fw-bolder text-decoration-none text-info'> Mutual Fund benefits</a> of absolutely secure investments on the Paytm Money platform with convenient payment options like Net Banking, UPI and auto-Pay</p>
                  
                  <p className='fw-bolder'>Money Bank Transfer Made Instant & Easy With Paytm</p>
                  <p>Transferring money directly to the bank from Paytm is instant and free of cost using Paytm app. Yes, any Paytm user can make a<a href='#' className='fw-bolder text-decoration-none text-info'> bank transfer</a> anytime and anywhere in less than a minute. You can link any bank account using Paytm’s UPI services and no KYC is needed. Moreover, you also get a Cashback of Rs. 50 on your first bank transfer with Paytm. To make money transfer process fast & trouble-free, you can link your account with Paytm in just a few simple steps. Next, you just have to enter the details of the account holder, precisely IFSC code and account number & you are all set to make a bank transfer at 0% charges.</p>
                  
                  <p className='fw-bolder'>Events, Movies and Endless Entertainment- Live, Laugh, Enjoy with Paytm.com</p>
                  <p>Relive the moment and revive your daily routine with an amazing experience at an incredible amusement park. Book tickets for theme parks & water parks in seconds at Paytm.com and get ready to make your day an adventurous one. Enjoy the hottest buzz in the town, do not miss out the latest shows and events of your favourite artists, be it music concert or a carnival, book your tickets online at our portal and catch the beats without any hassle. Our entertainment section enables you to book tickets online for Movies and Events at the matter of a few clicks and escape from your busy schedule.</p>
                  <p><span className='fw-bolder'>Movie Ticket Booking- </span>Find movie showtimes, movie theatres to book your movie tickets online and get movie ticket offers only on Paytm.com</p>
                  <p>Paytm’s <a href='#' className='fw-bolder text-decoration-none text-info'>24x7 Help is always at your service to assist you in case of any difficulties.</a></p>
                  
                  <p className='fw-bolder'>Investments made Simple, Transparent and Accessible with Paytm Money</p>
                  <p><a href='#' className='fw-bolder text-decoration-none text-info'>Presenting Paytm Money - India's Most Sincere Wealth Adviser. You can now begin your Investment </a>journey on the Paytm Money App with 100% paperless KYC verification. Open your investment account within minutes & start investing. Take an assessment of your appetite for risk with our Free Risk Profile Assessment</p>
                  <p><a href='#' className='fw-bolder text-decoration-none text-info'>Mutual Funds -</a>Our first offering to enable users to invest in direct mutual funds. In this, you get to save on commissions & earn up to 1% higher returns than regular funds. Easy SIP management and a fully digital KYC process would make your investing experience more rewarding.</p>
                  <p><a href='#' className='fw-bolder text-decoration-none text-info'>National Pension System (NPS) - </a>This latest addition to our tax-saving product basket helps you to earn market-linked returns and accumulate a higher corpus for a comfortable retirement. Additionally, you get to claim an extra tax deduction of up to Rs 50,000 over and above Section 80C benefit of Rs 1,50,000 and save Rs 62,400 in taxes annually.</p>
                  <p><a href='#' className='fw-bolder text-decoration-none text-info'>Stocks -</a>Stocks are now live on Paytm Money. With a 100% paperless account opening and a fully digital KYC process, you can become investment-ready within 24 hours. Moreover, you can enjoy both intraday trading in stocks & Zero Brokerage on delivery trading for life! Also, you can set price alerts & create multiple watchlists to track real-time price changes of up to 50 stocks.</p>
                  
                  </div>
                  
                  {/* FAQ accordion part */}
                  <div class="accordion" id="accordionExample2">
                    <div class="">
                      <h2 class="accordion-header" id="headingFAQ">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFAQ" aria-expanded="false" aria-controls="collapseFAQ">
                          Frequently Asked Questions
                        </button>
                      </h2>
                      <div id="collapseFAQ" class="accordion-collapse collapse" aria-labelledby="headingFAQ" data-bs-parent="#accordionExample2">
                        <div class="accordion-body">
                          {/* {investorRelation.map(item => {
                            return <div className='col-2'><a href='#' className='body-item-link'>{item}</a></div>
                          })} */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row helpAssureTrust mt-2 text-black'>
                    <div className='col mx-3 px-4 py-3 bg-white'>
                      <div className="row py-3">
                        <div className='col-3'>
                          <img src={helpIcon} alt='helpIcon' className='d-inline-block'/>
                        </div>
                        <div className='col'>
                          <span className='d-block'><strong>24X7 Help</strong> If we fall short of your expectations in any way, let us know.</span>
                        </div>
                      </div>
                    </div>
                    <div className='col mx-3 px-4 py-3 bg-white'>
                      <div className="row py-3">
                          <div className='col-3'>
                            <img src={assuranceIcon} alt='assuranceIcon' className='d-inline-block'/>
                          </div>
                          <div className='col'>
                            <span className='d-block'><strong>100% Assurance</strong>  If you face any issue, your money is 
                              immediately refunded. Sit back shop on.
                            </span>
                          </div>
                      </div>
                    </div>
                    <div className='col mx-3 px-4 py-3 bg-white'>
                      <div className="row py-3">
                        <div className='col-3'>
                          <img src={trustIcon} alt='trustIcon' className='d-inline-block'/>
                        </div>
                        <div className='col'>
                          <span className='d-block'><strong>Paytm Trust</strong> Your money is yours. All refunds come with no question 
                            asked guarantee.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>     

                  {/* aboutUs */}
                  <div className='mb-5 '>
                    <div className='aboutUs d-inline-block p-4 bg-white rounded mt-3'>
                      {aboutUs.map(item => {
                          return <a href='#' className='text-decoration-none text-secondary fw-bold px-3'>{item}</a>
                        })}
                    </div>
                    <div className='becomeSeller d-inline'>
                      <button className='btn btn-outline-info fw-semibold p-3 mx-2 text-dark text-start'>Become a<br/> Seller & Earn</button>
                      <button className='btn btn-outline-info fw-semibold py-3 ps-3 pe-5 text-dark text-start'>Paytm for<br/>Business</button>
                    </div>
                  </div>
                  <div className='row besafeBevigilant'>
                    <div className='col'>
                      <span className='fw-bolder'>Be Safe. Be Vigilant</span>
                      <p>Please do not share your Paytm Wallet password, Credit/Debit card pin, other confidential information with anyone even 
                        if he/she claims to be from Paytm. We advise our customers to completely ignore such communications & report to us at 
                        cybercell@paytmbank.com
                      </p>
                    </div>
                    <div className='col'>
                      <span className='fw-bolder'>Disclaimers</span>
                      <p>
                        Paytm Wallet is issued by Paytm Payments Bank Limited<br/><br/>Cashback is 'Paytm wallet loyalty cashback' given by 'Pay with Paytm' 
                        payment platform. It can be used to pay for goods & services sold by merchants that accept 'Pay with Paytm'
                      </p>
                    </div>
                    <div className='col'>
                      <span className='fw-bolder'>Bank Grade Security with</span>
                      <div>
                        <img src={americanExp} alt="bankImg" style={{width:"110px"}}/>
                        <img src={dinerClub} alt="bankImg" style={{width:"30px"}}/>
                        <img src={pci} alt="bankImg" style={{width:"70px"}}/>
                        <img src={visa} alt="bankImg" style={{width:"60px"}}/>
                        <img src={rupay} alt="bankImg" style={{width:"90px"}}/>
                        <img src={mastercard} alt="bankImg" style={{width:"70px"}}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Company
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body row">
                  {company.map(item => {
                      return <div className='col-2'><a href='#' className='body-item-link'>{item}</a></div>
                    })}
                </div>
              </div>
            </div>

            <div class="">
              <h2 class="accordion-header" id="headingCareer">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCareer" aria-expanded="false" aria-controls="collapseCareer">
                  Career
                </button>
              </h2>
              {/* <div id="collapseCareer" class="accordion-collapse collapse" aria-labelledby="headingCareer" data-bs-parent="#accordionExample">
                <div class="accordion-body row">
                  {recharge.map(item => {
                      return <div className='col-2 pb-4'><a href='#' className='body-item-link'>{item}</a></div>
                    })}
                </div>
              </div> */}
            </div>

            <div class="">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Recharge & Pay bills
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body row">
                  {recharge.map(item => {
                      return <div className='col-2 pb-4'><a href='#' className='body-item-link'>{item}</a></div>
                    })}
                </div>
              </div>
            </div>

            <div class="">
              <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Pay Loan EMI, Insurance Premiums & Education Fee
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div class="accordion-body row">
                  {payLoan.map(item => {
                      return <div className='col-2 pb-4'><a href='#' className='body-item-link'>{item}</a></div>
                    })}
                </div>
              </div>
            </div>

            <div class="">
              <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  Book Travel & Entertainment
                </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div class="accordion-body row">
                  {bookTravel.map(item => {
                      return <div className='col-2 pb-4'><a href='#' className='body-item-link'>{item}</a></div>
                    })}
                </div>
              </div>
            </div>

            <div class="">
              <h2 class="accordion-header" id="headingSeven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                  Investments & Miscellaneous
                </button>
              </h2>
              <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                <div class="accordion-body row">
                  {investment.map(item => {
                      return <div className='col-2 pb-4'><a href='#' className='body-item-link'>{item}</a></div>
                    })}
                </div>
              </div>
            </div>

            <div class="">
              <h2 class="accordion-header" id="headingEight">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                  Insurance (Powered by Paytm Insurance Broking Private Limited)
                </button>
              </h2>
              <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                <div class="accordion-body row">
                  {insurance.map(item => {
                      return <div className='col-2 pb-4'><a href='#' className='body-item-link'>{item}</a></div>
                    })}
                </div>
              </div>
            </div>

            <div class="">
              <h2 class="accordion-header" id="headingNine">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                  Loans and Credit Cards
                </button>
              </h2>
              <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                <div class="accordion-body row">
                  {loan.map(item => {
                      return <div className='col-2 pb-4'><a href='#' className='body-item-link'>{item}</a></div>
                    })}
                </div>
              </div>
            </div>

            <div class="">
              <h2 class="accordion-header" id="headingTen">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                  Financial Tools & Calculators
                </button>
              </h2>
              <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                <div class="accordion-body row">
                  {financialTool.map(item => {
                      return <div className='col-2 pb-4'><a href='#' className='body-item-link'>{item}</a></div>
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bottomLineOne bg-info'></div>
        <div className='bottomLineTwo bg-primary'></div>
    </div>
  )
}
