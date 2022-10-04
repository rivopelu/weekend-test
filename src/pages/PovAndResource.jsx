import React from "react";
import {ContainerPage, SectionTitle} from "../components";

export const PovAndResource = () => {
    return (
        <section className={"text-white mb-[67px] lg:mb-[100px]"}>
            <ContainerPage className={"flex flex-col gap-[67px]"}>
                <div className={"flex flex-col gap-[30px]"}>

                    <SectionTitle label={"pov"}/>
                    <p className={"lg:text-center lg:text-[18px]"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. </p>
                </div>
                <div className={"flex flex-col gap-[30px]"}>
                    <SectionTitle label={"Resource"}/>
                    <p className={"lg:text-center lg:text-[18px]"}>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
                </div>
            </ContainerPage>
        </section>
    )
}