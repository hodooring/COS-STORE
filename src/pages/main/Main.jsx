import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules' 
import { MainWrap, VisualWrap } from "./MainStyle";
import Content1 from '../../components/main/Content1';
import Content2 from '../../components/main/Content2';
 

const Main = () => {
    return (
        <>
            <VisualWrap>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                >
                <SwiperSlide><img src="./images/visual1.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/visual2.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/visual3.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/visual4.jpeg" alt="" /></SwiperSlide>
                </Swiper>
            </VisualWrap>
            <MainWrap className="main">
                <Content2/>
                <Content1/>
            </MainWrap>
        </>
    );
};

export default Main;