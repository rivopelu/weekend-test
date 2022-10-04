import React from "react";
import SVG from "react-inlinesvg";
import {ASSETS} from "../../assets";
import {ContainerPage} from "./ContainerPage";

export const BrandLogo = () => {
    return (
        <div className={"flex gap-3.5"}>
            <SVG src={ASSETS.LOGO_BRAND}/>

            <div className={"flex flex-col "}>
                <span className={"text-xs"}>Good Morning</span>
                <span className={"font-bold text-base"}>Fellas</span>
            </div>
        </div>
    )
}