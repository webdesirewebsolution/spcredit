import React from "react";
import "./DiffCard.css";

function DiffCard() {
    return (
        <>
            <div className="container mt-5">
                <div className="text-center">
                    <h3 className="spheading">We Have Diffrent Credit Cards</h3>
                </div>
                <div className="mt-5">
                    <div class="row ">
                        <div class="col">
                            <img className="w-100" src="./images/diffcard1.png"></img>
                        </div>
                        <div class="col">
                            <img className="w-100" src="./images/diffcard2.png"></img>
                        </div>
                        <div class="col">
                            <img className="w-100" src="./images/diffcard13.jpg"></img>
                        </div>
                        <div class="col">
                           <img className="w-100" src="./images/spicici.jpg"></img>
                        </div>
                        <div class="col">
                            <img className="w-100" src="./images/indusind.jpg"></img>
                        </div>
                    </div>
                </div>
                </div>
            </>
            );
}

            export default DiffCard;