import React from "react";
import "./Header.css";

function Header(){
    return(

        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary container ">
  <div class="container-fluid ">
    <a class="navbar-brand containerfluid" href="#">
    <img className="" src="./images/logosp.png"></img>
    </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarScroll">
      <div>
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll text-center" >
        <li class="nav-item navitem me-3">
          <button class="  " id="abcsd" aria-current="page" href="#">HOME</button>
        </li>
        <li class="nav-item navitem me-3">
        <button class="  " id="abcsd" aria-current="page" href="#">AXIS CARD</button>
        </li>
        <li class="nav-item navitem me-3">
        <button class="  " id="abcsd" aria-current="page" href="#">ABOUT</button>
        </li>
        <li class="nav-item navitem me-3 ">
        <button class="   " id="abcsd" aria-current="page" href="#">CONTACT US</button>
        </li>
      </ul>
      </div>     
    </div>
  </div>
</nav>

        </>
    );
}

export default Header;