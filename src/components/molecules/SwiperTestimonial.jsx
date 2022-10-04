import React, {useEffect, useState} from "react";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperNavigation} from "../atoms";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

export const SwiperTestimonial = ({data}) => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)


    return (
        <div className="flex flex-row">

            <div className=" lg:px-32  overflow-x-hidden  flex relative ">
                <div ref={navigationPrevRef}
                     className={`scale-0 lg:scale-100 lg:absolute ${activeIdx === 0 && "opacity-60"} top-14 z-10 -translate-x-[50px] w-8 cursor-pointer hover:bg-slate-200 duration-200 h-8 bg-white text-mainBlue rounded-full flex items-center justify-center `}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </div>
                <Swiper
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={1}
                    breakpoints={{
                        300: {
                            slidesPerView: 1.3,
                        },
                        768: {
                            slidesPerView: 1.4,
                        },
                        1020: {
                            slidesPerView: 2.5
                        }
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={(e) => {
                        setActiveIdx(e.activeIndex)
                        setIsEnd(e.isEnd);
                    }}
                >

                    {
                        data?.map((item, i) => (

                            <SwiperSlide>
                                <div
                                    className="bg-white w-[247px] h-[140px] p-[20px] text-black flex flex-col justify-between "
                                    key={i}>

                                    <h1 className="text-4xl font-black">{item.by}</h1>
                                    <p className="text-xs">{item.testimony}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div ref={navigationNextRef}
                     className={`absolute scale-0 lg:scale-100 z-10 ${isEnd && "opacity-60"} right-0 top-14 -translate-x-[80px] w-8 cursor-pointer hover:bg-slate-200 duration-200 h-8 bg-white text-mainBlue rounded-full flex items-center justify-center `}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
            </div>

        </div>
    )
}