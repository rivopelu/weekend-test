import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ContainerPage, SectionTitle, SwiperTestimonial} from "../components";
import {GetTestimonial} from "../redux/Action";


export const Testimonial = () => {
    const [data, setData] = useState([])
    const dispatch = useDispatch();
    const {MainData} = useSelector(state => state);
    useEffect(() => {
        dispatch(GetTestimonial());
    }, [])

    useEffect(() => {
        if (MainData.dataTestimonial) {
            setData(MainData.dataTestimonial);
        }
    }, [MainData])


    return (
        <section className={"testimonial flex flex-col gap-10  text-white "}>
            <div className="-translate-y-28">

                <ContainerPage className={"px-0 pl-6 relative"}>
                    <div
                        className={"w-[89px] h-[89px] rounded-full bg-mainBlue absolute -z-10 -top-[70px] lg:-top-10 left-16"}></div>
                    <SectionTitle label={"testimonial "} className={"mb-10 "}/>
                    <SwiperTestimonial data={data}/>
                </ContainerPage>
            </div>
        </section>
    )
}