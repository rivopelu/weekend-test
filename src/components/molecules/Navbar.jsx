import React from "react";
import { BrandLogo } from "../atoms/BrandLogo";
import { ContainerPage } from "../atoms";


export const Navbar = () => {



    return (
        <nav className={"h-[67px]  bg-white border-b flex items-center fixed top-0 left-0  z-[10000] w-screen"}>
            <ContainerPage>
                <BrandLogo />
            </ContainerPage>
        </nav>
    )
}