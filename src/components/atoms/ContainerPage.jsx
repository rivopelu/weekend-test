import React from "react";

export const ContainerPage = ({children, className}) => {
    return (
        <div className={`container lg:max-w-[940px] px-6  mx-auto ${className}`}>
            {children}
        </div>
    )
}