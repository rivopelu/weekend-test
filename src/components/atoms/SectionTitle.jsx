import React from "react";

export const SectionTitle = ({label, className}) => {
    return (
        <>
            <h1 data-aos="fade-up"  className={`capitalize text-4xl font-bold text-start lg:text-center ${className}`}>{label}</h1>
        </>
    )
}