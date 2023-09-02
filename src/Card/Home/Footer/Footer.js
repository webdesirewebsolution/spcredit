import React from "react";
import "./Footer.css";
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';


function Footer() {
    return (
        <>

            <div class="">

                <footer
                    class="text-center text-lg-start text-white"
                    style={{ backgroundColor: "#3e4551" }}
                >

                    <div class="container p-4 pb-0">

                        <section class="">

                            <div class="row rowfoot">

                                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                                    <a class="navbar-brand containerfluid" href="#">
                                        <img className="" src="./images/logosp.png"></img>
                                    </a>

                                    <p>
                                    SP Credit: Elevate Your Financial Prospects. We specialize in optimizing credit scores, 
                                    enabling access to better opportunities. Your journey to financial success starts with us."
                                    </p>
                                </div>

                                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                                    <h5 class="text-uppercase">Quick Links</h5>

                                    <ul class="list-unstyled mb-0 splist mt-3">
                                        <li>
                                            <a href="#!" class="text-white">HDFC Credit</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">AU credit</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">SBI Credit</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">IndusInd Credit</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                                    <h5 class="text-uppercase">Pages</h5>

                                    <ul class="list-unstyled mb-0 splist mt-3">
                                        <li>
                                            <a href="#!" class="text-white">Home</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">About</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">ContactUs</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-lg-2 col-md-6 mb-4 mb-md-0 ">
                                    <h5 class="text-uppercase">Contact</h5>

                                    <div className="text-center mt-3">
                                      Address: Office No. 3 Besment Swadesh BHawan <br />
                                      Contact No.  <br />
                                      +91 9343535215
                                    </div>
                                      
                                </div>                       

                            </div>

                        </section>


                        <hr class="mb-4" />
                        <hr class="mb-4" />


                        <section class="mb-4 text-center">

                            <a
                                class="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            >
                                {/* <i class="fab fa-facebook-f"></i> */}
                                <BsFacebook />
                            </a>


                            <a
                                class="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            >
                                {/* <i class="fab fa-twitter"></i
                            > */}
                            <FaTwitter />
                            </a>


                            {/* <a
                                class="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            ><i class="fab fa-google"></i
                            ></a> */}


                            <a
                                class="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            >
                                {/* <i class="fab fa-instagram"></i
                            > */}
                            <AiFillInstagram />
                            </a>


                            <a
                                class="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            >
                                {/* <i class="fab fa-linkedin-in"></i
                            > */}
                            <AiFillLinkedin />
                            </a>
                        </section>

                    </div>

                    <div
                        class="text-center p-3"
                    //  style="background-color: rgba(0, 0, 0, 0.2)"
                    >
                        © 2020 Copyright:
                        <a class="text-white" href="https://spcredit.com/"
                        >spcredit.com</a>
                    </div>
                </footer>
            </div>

        </>
    );
}

export default Footer;