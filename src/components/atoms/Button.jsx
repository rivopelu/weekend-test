import React from "react";

export const Button = ({children, className}) => {
    return (
        <button className={`bg-white py-5 px-10 rounded-full text-black hover:bg-slate-100 duration-200 ring ring-0 active:ring-2 ring-mainBlue/20 ${className}`}>
            {children}
        </button>
    )
}