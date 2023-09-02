import React from "react";
import "./ContactUs.css";
import { IoLogoWhatsapp } from 'react-icons/io';
import { HiLocationMarker } from 'react-icons/hi';
import { LuContact } from 'react-icons/lu';
import { HiOutlineMail } from 'react-icons/hi';



function ContactUs() {
    return (
        <>
            <section class="mb-4 mt-5">
                <h2 class="h1-responsive font-weight-bold text-center my-4 spheading">Contact us</h2>
                <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>
                <div class="row">
                    <div class="col-md-9 mb-md-0 mb-5">
                    <div style={{ width: "100%", display: "flex" }}>
                        <form>
                            <div style={{ width: "47%" }} className='cardform'>
                                <p>FIRST NAME</p>
                                <input name="name" autofocus />
                            </div>
                            <div style={{ width: "47%", marginLeft: "6%" }} className='cardform'>
                                <p>LAST NAME</p>
                                <input name="name" autofocus />
                            </div>
                            <div style={{ width: "47%" }} className='cardform'>
                                <p>EMAIL</p>
                                <input name="email" />
                            </div>
                            <div style={{ width: "47%", marginLeft: "6%" }} className='cardform'>
                                <p>SUBJECT</p>
                                <input name="phone" />
                            </div>
                            <div style={{ width: "100%" }} className='cardform'>
                                <p>YOUR MESSAGE</p>
                                <input name="email" />
                            </div>
                            
                            
                            <div class="text-center ">
                            <button type="button" class="btn spbutton">Send</button>
                            </div>
                        </form>
                     </div>

                        <div class="status"></div>
                    </div>
                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li>
                                {/* <i class="fas fa-map-marker-alt fa-2x"></i> */}
                                <div >
                                <HiLocationMarker size="40px"/>
                                </div>
                                <p className="mt-3"> Office No. 3 Besment Swadesh BHawan</p>
                            </li>

                            <li>

                                {/* <i class="fas fa-phone mt-4 fa-2x"></i> */}
                                <LuContact size="40px"/>
                                <p className="mt-3">+91 9343535215</p>
                            </li>

                            <li>
                                {/* <i class="fas fa-envelope mt-4 fa-2x"></i> */}
                                <HiOutlineMail  size="40px"/>
                                <p className="mt-3">contact@spcredit.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactUs;