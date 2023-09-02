import React from "react";
import "./CardServices.css";

function CardServices() {
    return (
        <>
            <div className="container mt-5  ">
                <div className="text-center">
                    <h3 className="spheading"> Card Services</h3>
                </div>
                <div className="row container mt-5">
                    <div className="col">
                        <ul class=" mb-0 servicelist ">
                            <li>
                                <a href="#!" class="text-dark">Standard debit cards</a>
                            </li>
                            <li>
                                <a href="#!" class="text-dark">Electronic benefits transfer</a>
                            </li>
                            <li>
                                <a href="#!" class="text-dark">Prepaid debit cards</a>
                            </li>
                            <li>
                                <a href="#!" class="text-dark">Link 4</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul class=" mb-0 servicelist">
                            <li>
                                <a href="#!" class="text-dark">Airline Credit Card</a>
                            </li>
                            <li>
                                <a href="#!" class="text-dark">Best Travel Credit Card</a>
                            </li>
                            <li>
                                <a href="#!" class="text-dark">Best Hotel Credit Card</a>
                            </li>
                            <li>
                                <a href="#!" class="text-dark">Best Balance Transfer Credit Card</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col servicelist">
                        <ul class="">
                            <li>
                                <a href="#!" class="text-dark">Business Credit Card </a>
                            </li>
                            
                            <li>
                                <a href="#!" class="text-dark">Online Shopping Credit Card</a>
                            </li>
                            <li>
                                <a href="#!" class="text-dark">Secured Credit Card</a>
                            </li>
                            <li>
                                <a href="#!" class="text-dark">Cash Rewards Credit Card</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardServices;