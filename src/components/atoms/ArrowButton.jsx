import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";


export const ArrowButton = ({onClick, icon, classNme}) => {
    return (
        <>
            <div onClick={onClick} className={` w-8 cursor-pointer hover:bg-slate-200 duration-200 h-8 bg-white text-mainBlue rounded-full flex items-center justify-center ${classNme}`}>
                <FontAwesomeIcon icon={ icon || faArrowRight} />
            </div>
        </>
    )
}