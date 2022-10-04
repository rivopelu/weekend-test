import React from "react";
import {ContainerPage} from "../atoms";
import {ASSETS} from "../../assets";

export const Footer = () => {
    return (
        <div className={"bg-black"}>

            <div className={"bg-mainBlue w-full h-[67px] text-white z-[1000]"}>

                <ContainerPage className={"w-full flex items-center justify-between h-full"}>
                    <div>
                        <strong>wknd</strong>@2020
                    </div>
                    <p className={"text-[10px] border border-white px-4 py-1 rounded-full"}>alpha version 0.1</p>
                </ContainerPage>
            </div>
        </div>
    )
}