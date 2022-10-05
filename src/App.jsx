import React, {useEffect} from "react";
import {Navbar} from "./components/molecules/Navbar";
import Home from "./pages/Home";
import {Definition} from "./pages/Definition";
import {Testimonial} from "./pages/Testimonial";
import {PovAndResource} from "./pages/PovAndResource";
import {HelpAndTips} from "./pages/HelpAndTips";
import {Footer} from "./components/molecules/Footer";
import "aos/dist/aos.css";
import AOS from "aos"
const App = () => {
    useEffect(() => {
        AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99, 
            offset: 120,
            delay: 0, 
            duration: 1500,
            easing: 'ease', 
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom', 

        });
        AOS.refresh();
    }, []);

    return (
        <section className="'w-full">
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
        </section>
    )
}

export default App