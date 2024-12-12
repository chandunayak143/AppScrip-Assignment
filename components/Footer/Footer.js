import React, { useState } from 'react'
import { FaInstagram,FaLinkedin } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

import './Footer.css'

const listMetta =[
    {
        name : 'About Us'
    },
    {
        name : 'Stories'
    },
    {
        name : 'Artisans'
    },
    {
        name : 'Boutiquest'
    },
    {
        name : 'Contact Us'
    },
    {
        name : 'EU Compliance DOCS'
    },
]

const listQuickLinks =[
    {
        name : 'Order & Shipping'
    },
    {
        name : 'Join / Login as a seller'
    },
    {
        name : 'Payment & Pricing'
    },
    {
        name : 'Return & Refunds'
    },
    {
        name : 'FAQS'
    },
    {
        name : 'Privacy & Policy'
    },
    {
        name : 'Terms & Conditions'
    }
]

const Footer = () => {

  return (
    <>
    <div className="footer-container">

        <div className="footer-items-container">

            <div className="footer-input">
            <h3 className="footer-text">Be the first to know</h3>
            <p className="footer-description">
            Sign up for updates from mettā muse.</p>
            <p className="mobile-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
                 <div className="input-submit">
                    <input type="email" className='email' placeholder='Enter Your e-mail...'/>
                    <button className="subscribe-button">SUBSCRIBE</button>
               
           
             <div className="contact-details">
                 <div className="call-us">
                    <h3>CONTACT US</h3>
                    <div className='contact-num-email'>
                  <p className="number">+44 221 133 5360</p>
                  <p className="customer-email">customercare@mettamuse.com</p>
                 </div>
                 </div>
                 </div>
                 </div>
                 <div className="currency">
                    <h3>CURRENCY</h3>
                    <div className="image-and-text">
                    <img src="https://i.pinimg.com/736x/ae/5a/6b/ae5a6b4237c293d7d2954f68f1200216.jpg" 
                    className="currency-country" alt="CURRENCY IMAGE"/>
                    <p> + USD</p>
                    </div>
                    <p className="text">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                 </div>

                 <div className="metta-list">
                    <hr className="hr-line"/>
                    <div className="heading-and-arrow">
                    <span>Metta</span>
                    <RiArrowDropDownLine className='icon-arraow' />
                    </div>
                    {listMetta.map((eachItem) => {
                        <select>
                            <option key={eachItem.id}>{eachItem}</option>
                        </select>
                    })}
                 </div>

                 <div className="metta-list">
                    <hr className="hr-line"/>
                    <div className="heading-and-arrow">
                    <span>Quick Links</span>
                    <RiArrowDropDownLine className='icon-arraow' />
                    </div>
                    {listMetta.map((eachItem) => {
                        <select>
                            <option key={eachItem.id}>{eachItem}</option>
                        </select>
                    })}
                 </div>

                 <div className="metta-list">
                    <hr className="hr-line"/>
                    <div className="heading-and-arrow">
                    <span>Follow Us</span>
                    <RiArrowDropDownLine className='icon-arraow' />
                    </div>
                    {listMetta.map((eachItem) => {
                        <select>
                            <option key={eachItem.id}>{eachItem}</option>
                        </select>
                    })}
                 </div>

                 <div className="bottom-images">
                    <h4 className="bottome-text">
                    mettā muse Accepts
                    </h4>
                    <div className="payment-logos">
                        <img src="https://i.pinimg.com/736x/1e/44/12/1e4412694927683d28fc28a6de2c5738.jpg" className="image" alt="G Pay Image"/>
                        <img src="https://i.pinimg.com/236x/c6/81/28/c681288c53c57b64ab63681fecf23b4c.jpg" className="image" alt="Master Card Image"/>
                        <img src="https://i.pinimg.com/736x/8d/e0/97/8de097c07e08973cca9f0b2eeb62fcc2.jpg" className="image" alt="PayPal Image"/>
                        <img src="https://i.pinimg.com/236x/f1/81/de/f181de7d99dba5c08ceefeaa5a38c20f.jpg" className="image" alt="America Express Image"/>
                        <img src="https://i.pinimg.com/236x/05/46/be/0546be74d36efa0f579bd192ab326610.jpg" className="image" alt="Iphone Pay Image"/>
                        <img src="https://tse1.mm.bing.net/th?id=OIP.mK9tphoiE6JEEnt7HDEkDwAAAA&pid=Api&P=0&h=180" className="image" alt="O Pay Image"/>
                    </div>
                    <p className='mobile-copy-right'>Copyright © 2023 mettamuse. All rights reserved.</p>
                </div>

                </div>
                
            </div>
            <hr className="hr-line"/>
            <div className="footer-bottom">
                <div className="fotter-left">
                    <h1 className="footer-bottome-heading">
                    mettā muse
                    </h1>
               <ul className="un-ordered-list">
               <li>About us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
               </ul>
                </div>
                <div className="fotter-center">
                    <h3>Quick Links</h3>
                    <ul className="un-ordered-list-two">
                        <li>Orders & Shipping</li>
                        <li>Join/Login as a Seller</li>
                        <li>Payment & Pricing</li>
                        <li>Return & Refunds</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="fotter-right">
                <div className="follo-us-container">
                    <h3 className="follow-us-text">FOLLOW US</h3>
                    <div className="insta-con">
                        <FaInstagram className="insta-icon"/>
                        <FaLinkedin className="insta-icon"/>
                    </div>
                </div>
                <div className="bottom-container">
                    <h4 className="bottome-text">
                    mettā muse Accepts
                    </h4>
                    <div className="payment-images">
                        <img src="https://i.pinimg.com/736x/1e/44/12/1e4412694927683d28fc28a6de2c5738.jpg" className="image" alt="G Pay Image"/>
                        <img src="https://i.pinimg.com/236x/c6/81/28/c681288c53c57b64ab63681fecf23b4c.jpg" className="image" alt="Master Card Image"/>
                        <img src="https://i.pinimg.com/736x/8d/e0/97/8de097c07e08973cca9f0b2eeb62fcc2.jpg" className="image" alt="PayPal Image"/>
                        <img src="https://i.pinimg.com/236x/f1/81/de/f181de7d99dba5c08ceefeaa5a38c20f.jpg" className="image" alt="America Express Image"/>
                        <img src="https://i.pinimg.com/236x/05/46/be/0546be74d36efa0f579bd192ab326610.jpg" className="image" alt="Iphone Pay Image"/>
                        <img src="https://tse1.mm.bing.net/th?id=OIP.mK9tphoiE6JEEnt7HDEkDwAAAA&pid=Api&P=0&h=180" className="image" alt="O Pay Image"/>
                    </div>
                </div>
                </div>
            </div>
            <p className="terms-and-conditions">Copyright © 2023 mettamuse. All rights reserved.</p>
    </div>
   </>
  )
}

export default Footer