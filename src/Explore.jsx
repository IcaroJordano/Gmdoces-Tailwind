import { FiExternalLink } from "react-icons/fi";

import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import { SlideExplore } from './SlideExplore'
export function Explore() {
    return(
        <section className="py-20" >
            <h2 className="font-serif  text-3xl text-neutral-700/80 ml-5   font-thin">Conheca os Produtos</h2>
            <a className="font-bold ml-5 text-neutral-700 underline flex items-center"  href="">Comprar <FiExternalLink className="ml-1"></FiExternalLink></a>
            <Swiper className='py-5 pl-5' spaceBetween={0} slidesPerView={1.2}  >
                <SwiperSlide><SlideExplore></SlideExplore></SwiperSlide>
                <SwiperSlide><SlideExplore></SlideExplore></SwiperSlide>
                <SwiperSlide><SlideExplore></SlideExplore></SwiperSlide>
                <SwiperSlide><SlideExplore></SlideExplore></SwiperSlide>
                <SwiperSlide><SlideExplore></SlideExplore></SwiperSlide>
            </Swiper>
        </section>
    )
}