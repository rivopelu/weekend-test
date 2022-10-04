import React from "react";
import {Navbar} from "./components/molecules/Navbar";
import Home from "./pages/Home";
import {Definition} from "./pages/Definition";
import {Testimonial} from "./pages/Testimonial";
import {PovAndResource} from "./pages/PovAndResource";
import {HelpAndTips} from "./pages/HelpAndTips";
import {Footer} from "./components/molecules/Footer";
import {ContainerPage} from "./components";
import {ASSETS} from "./assets";


const App = () => {
    return (
        <>
            <Navbar/>
            <div className={"bg-mainPink pb-24"}>

                <Home/>
                <Definition/>
            </div>
            <div className={"bg-black text-white"}>
                <Testimonial/>
                <PovAndResource/>
                <HelpAndTips/>

            </div>
            <Footer />
        </>
    )
}

export default App