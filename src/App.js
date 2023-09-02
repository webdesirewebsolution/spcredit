
import React from "react";
import Header from "./Card/Home/Header/Header";
import BannerTop from "./Card/Home/BannerTop/BannerTop";
import CardForm from "./Card/Home/CardForm/CardForm";
import DiffCard from "./Card/Home/DiffCard/DiffCard";
import CardServices from "./Card/Home/CardServices/CardServices";
import ContactUs from "./Card/Home/ContactUs/ContactUs";
import Footer from "./Card/Home/Footer/Footer";




function App() {
  return (
    <>
        <Header />
        <BannerTop />
        <CardForm />
        <DiffCard />
        <CardServices />
        <ContactUs />
        <Footer />
    </>
  );
}

export default App;
