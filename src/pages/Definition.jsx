import React from "react";
import {ContainerPage} from "../components";
import SVG from "react-inlinesvg";
import {ASSETS} from "../assets";

export const Definition = () => {
    return (
        <section className={"bg-mainPink py-10"}>
            <div className={"w-full flex justify-end relative"}>
                <img src={ASSETS.ROBOT_HOME} alt="robot " className={"-rotate-90 w-[95px] absolute right-7"}/>
                <SVG src={ASSETS.PINK_DEFINITION}/>
            </div>
            <ContainerPage className={"lg:text-[21px] flex flex-col gap-8 py-16 "}>
                <div className={"text-end font-bold lg:text-[21px] lg:px-12"}><span className={"font-bold text-mainBlue "}>Deffinition;</span> a practice or exercise to test or
                    improve one's fitness for athletic competition, ability, or performance to exhaust (something, such
                    as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com
                    Dictionary.
                </div>
                <div className={"font-bold text-end text-white lg:pr-12"}>-weekend team</div>
            </ContainerPage>
        </section>
    )
}