import React from "react";
import {ASSETS} from "../assets";
import {Button, ContainerPage} from "../components";
import SVG from "react-inlinesvg";

const Home = () => {
    return (
        <section className={" h-screen w-screen "}>
            <div className={"absolute lg:w-full w-[2000px] -left-[400px] z-[99]  lg:-top-10 lg:left-0"}>
                <img  className={"lg:w-full"} src={ASSETS.BLACK_HOME_SVG} alt={"homeSvg"}/>
            </div>

            <ContainerPage
                className={"h-[400px] w-[700px] top-10 absolute  lg:translate-x-[50%]   lg:w-full lg:top-16 lg:left-0 right-0 lg:right-auto  z-[100]"}>
                <img className={""} src={ASSETS.BLUE_HOME} alt={"home"}/>
            </ContainerPage>
            <ContainerPage className={"flex items-center lg:h-[96vh] w-full justify-center "}>
                <div
                    className={"mt-[67px] h-full w-full text-white  z-[200] flex items-center justify-center flex-col relative"}>
                    <div  className={"absolute opacity-0 lg:opacity-100 lg:right-[0] lg:translate-x-[200px] translate-y-24"}>

                    <SVG  src={ASSETS.HOME_PINK_SVG}/>
                    </div>
                    <div className={"text-center relative z-[340]"}>
                        <h1 data-aos="fade-down" className={"lg:text-[62px] text-[52px] font-extrabold lg:tracking-widest"}>WEEKEND FROM
                            HOME</h1>
                        <div  data-aos="zoom-in" className={"text-[21px] italic font-bold"}>Stay active with a little workout.</div>
                    </div>
                    <div
                        className={"h-[132px] w-[132px] rounded-full bg-mainBlue z-[300] absolute top-[300px] -translate-x-24 -translate-y-20 lg:-translate-y-24   lg:left-64 lg:top-[500px] left-0"}/>
                    <div data-aos="fade-up"   className={"flex flex-col items-center justify-center relative mt-[67px]"}>
                        <img  src={ASSETS.ROBOT_HOME} alt={"home"}/>
                        <Button  className={" absolute  translate-y-[80px] w-60 mx-auto"}>Let’s Go</Button>
                    </div>
                </div>
            </ContainerPage>

        </section>
    )

}

export default Home