import React, {useEffect, useState} from "react";
import {ContainerPage, HelpAndTipsCard, SectionTitle} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {GetHelpAndTips} from "../redux/Action";
import SVG from "react-inlinesvg";
import {ASSETS} from "../assets";

export const HelpAndTips = () => {
    const [data, setData] = useState([])
    const {MainData} = useSelector(state => state)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(GetHelpAndTips())
    }, [])

    useEffect(() => {
        if (MainData.dataHelpAndTips) {
            setData(MainData.dataHelpAndTips)
        }
    }, [MainData])

    return (
        <div className={"relative"}>
            <ContainerPage className={"text-white flex flex-col gap-[30px] relative"}>
                <SectionTitle label={"Help & Tips"}/>
                <SVG className={"absolute right-0 translate-x-[140px] z-[20]  scale-0 lg:scale-100"}
                     src={ASSETS.PINK_HELP}/>
                {
                    data.length > 1 &&
                    <div className={"flex flex-col gap-[10px] lg:flex-row z-[21]"}>
                        {
                            data.map((item, i) => (
                                <div data-aos="zoom-in" key={i}>
                                    <HelpAndTipsCard image={item?.image} title={item?.title}/>
                                </div>
                            ))
                        }
                    </div>
                }

            </ContainerPage>
            <ContainerPage className={"lg:pt-[127px] py-[67px] flex flex-col gap-[30px] z-[180] lg:pb-[270px]"}>
                <SectionTitle label={"You’re all set."} className={"z-[180]"}/>
                <p data-aos="fade-up" className={"lg:text-center lg:text-[18px] z-[180] lg:px-28"}>The wise man therefore always holds in these
                    matters to this principle of selection.</p>
            </ContainerPage>

            <div className={"lg:absolute bottom-0  z-[100] w-full pt-28 lg:pt-0 z-[10] lg:pt-[300px]"}>
                <div className={"relative lg:px-0  lg:w-screen lg:max-w-none "}>

                    <img className={"absolute translate-x-6 lg:translate-x-0 -top-16 h-[236] z-[100]  lg:h-[227px] lg:left-[31px] rotate-180"} src={ASSETS.ROBOT_HOME} alt={"robot bottom"}/>
                </div>
                <img alt={"pinkBottom"} className={"lg:h-[325px]"} src={ASSETS.PINK_BOTTOM}/>
            </div>
        </div>
    )
}
