import React, { useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import { ASSETS } from "../../assets";
import { ContainerPage } from "./ContainerPage";

export const BrandLogo = () => {

    const [great, setGreat] = useState("")

    var today = new Date()
    var curHr = today.getHours()

    useEffect(() => {
        if (curHr < 12) {
            setGreat("good morning")
        } else if (curHr < 18) {
            setGreat("good afternoon")
        } else {
            setGreat('good evening')
        }
    }, [curHr])
    return (
        <div className={"flex gap-3.5"}>
            <SVG src={ASSETS.LOGO_BRAND} />

            <div className={"flex flex-col "}>
                <span className={"text-xs capitalize"}>{great}</span>
                <span className={"font-bold text-base"}>Fellas</span>
            </div>
        </div>
    )
}