// //  import { Swiper, SwiperSlide } from "swiper/react";

// //  import "swiper/css";
// //  import "swiper/css/pagination";
// //  import "swiper/css/free-mode";

// //  import { FreeMode, Pagination } from "swiper/modules";

// //  import { RxArrowTopRight } from "react-icons/rx";
// //  import { ServiceData } from "../components/constants";

// //  const Service = () => {
// //    return (
// //      <div className="flex items-center justify-center flex-col h-[900px] bg-[#6c34af]">
// //        <Swiper
// //          breakpoints={{
// //            340: {
// //              slidesPerView: 2,
// //              spaceBetween: 15,
// //            },
// //            700: {
// //              slidesPerView: 3,
// //              spaceBetween: 15,
// //            },
// //          }}
// //          freeMode={true}
// //          pagination={{
// //            clickable: true,
// //          }}
// //          modules={[FreeMode, Pagination]}
// //          className="max-w-[90%] lg:max-w-[80%]"
// //        >
// //          {ServiceData.map((item) => (
// //            <SwiperSlide key={item.title}>
// //              <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
// //                <div
// //                  className="absolute inset-0 bg-cover bg-center"
// //                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
// //                />
// //                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
// //                <div className="relative flex flex-col gap-3">
// //                  <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
// //                  <h1 className="text-xl lg:text-2xl">{item.title} </h1>
// //                  <p className="lg:text-[18px]">{item.content} </p>
// //                </div>
// //                <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
// //              </div>
// //            </SwiperSlide>
// //          ))}
// //        </Swiper>
// //      </div>
// //    );
// //  };

// //  export default Service;
// import React, { useEffect } from "react";
// import gsap from "gsap";

// const Service = () => {
//   useEffect(() => {
//     const tl = gsap.timeline();

//     tl.from(".element1", { opacity: 0, duration: 1, y: -1 })
//       .from(".element2", { opacity: 0, duration: 1, y: -50 }, "-=1")
//       .from(".element3", { opacity: 0, duration: 1, y: -50 }, "-=1")
//       .from(".element4", { opacity: 0, duration: 1, y: -50 }, "-=1");
//   }, []);

//   return (
//     <div className="service">
//       <h1 className="service-title">hello cosmos </h1>
//       <div className="element1">
//         X Service Page COSMOS Network offers support and representation in
//         <br /> international markets. COSMOS Network is accredited from the
//         Tunisian ministry of trade and handicrafts for export consulting
//         <br />
//         services Through our extensive network around the globe, we are engaged
//         <br />
//         on the development of our customers' sales network and help them to
//         reach other countries beyond borders. To act as your cosmic partner,
//         <br />
//         embarking on a journey of discovery and connection. Through our creative
//         <br />
//       </div>
//       <div className="element2">
//         approach and strategies, we seamlessly bridge businesses and clients,
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         sssssssssssssssssssssssssssssssssssssssssssssssddddddddddddddd
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         bringing them together in a synergistic dance of growth and success.
//         <br />
//         We're not just about providing services; we're about uncovering the best
//         <br />
//         strategies, utilizing cutting-edge technologies, and navigating the
//         cosmic landscape to ensure your brand shines brightly among the stars.
//         <br />
//         Join us on this exciting cosmic journey, where the possibilities are as
//         limitless as the cosmos itself.
//       </div>
//       <div className="element3">
//         X Service Page COSMOS Network offers support and representation in
//         <br /> international markets. COSMOS Network is accredited from the
//         Tunisian ministry of trade and handicrafts for export consulting
//         <br />
//         services Through our extensive network around the globe, we are engaged
//         <br />
//         on the development of our customers' sales network and help them to
//         reach other countries beyond borders. To act as your cosmic partner,
//         <br />
//         embarking on a journey of discovery and connection. Through our creative
//         <br />
//       </div>

//       {/* Add your service content here */}
//     </div>
//   );
// };

// export default Service;

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Box = ({ num }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h1>Box {num} </h1>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Box num={1} />
      <Box num={2} />
      <Box num={3} />
    </div>
  );
}
