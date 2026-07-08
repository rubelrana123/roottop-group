"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Package,
  Laptop,
  Briefcase,
  Globe,
  Sprout,
  Shirt,
  Tractor,
  LineChart,
  Building,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionHeading from "../SectionHeading";

const businessAreas = [
  { title:"1st Class Contractor",description:"Delivering world-class construction and infrastructure solutions.",icon:Building2,image:"/contractor.png"},
  { title:"Supply",description:"Reliable sourcing and distribution for diverse industries.",icon:Package,image:"/exportimport.avif"},
  { title:"IT",description:"Innovative digital products and enterprise technology solutions.",icon:Laptop,image:"/it.jpeg"},
  { title:"Consultancy",description:"Strategic advisory services for sustainable business growth.",icon:Briefcase,image:"/consultancy.jpg"},
  { title:"Agro",description:"Modern agricultural initiatives focused on sustainability.",icon:Sprout,image:"/agriculture.avif"},
  { title:"Fashion",description:"Premium fashion and lifestyle solutions.",icon:Shirt,image:"/fashion.jpg"},
  { title:"Agriculture",description:"Smart farming and innovative agricultural development.",icon:Tractor,image:"/agriculture.avif"},
  { title:"Investment",description:"Driving financial growth through diversified opportunities.",icon:LineChart,image:"/invest.jpg"},
  { title:"Developer",description:"Creating modern real estate developments.",icon:Building,image:"/developer.jpg"},
  { title:"Export & Import",description:"Global trade and logistics solutions.",icon:Globe,image:"/exportimport.avif"},
];

export default function BusinessAreas() {
  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* <div className="mb-16 text-center">
          <span className="text-primary text-base font-bold uppercase tracking-[3px]">Our Business Areas</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900">Businesses We Operate</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            We operate across multiple industries with excellence, innovation and sustainable growth.
          </p>
          <div className="bg-primary mx-auto mt-6 h-1 w-24 rounded-full"/>
        </div> */}
  <SectionHeading
    badge="Our Business Areas"
    title="Businesses We Operate"
    description="We operate across multiple industries with excellence, innovation and sustainable growth."
  />

        <Swiper
          modules={[Navigation,Autoplay]}
          navigation
          loop
          speed={1000}
          grabCursor
          autoplay={{delay:2500,disableOnInteraction:false,pauseOnMouseEnter:true}}
          spaceBetween={28}
          breakpoints={{
            320:{slidesPerView:1.1},
            640:{slidesPerView:2},
            1024:{slidesPerView:3},
            1280:{slidesPerView:4},
          }}
        >
          {businessAreas.map((item,i)=>{
            const Icon=item.icon;
            return(
<SwiperSlide key={i}>
  <motion.div
    whileHover={{
      y: -10,
      scale: 1.02,
    }}
    transition={{
      duration: 0.35,
    }}
    className="group relative h-[430px] overflow-hidden rounded-3xl shadow-lg cursor-pointer"
  >
    {/* Background Image */}
    <Image
      src={item.image}
      alt={item.title}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent transition-all duration-500 group-hover:from-primary/80" />

    {/* Icon */}
    <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white">
      <Icon className="h-7 w-7" />
    </div>

    {/* Shine Effect */}
    <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/10 blur-2xl transition-all duration-1000 group-hover:left-[130%]" />

    {/* Bottom Content */}
    <div className="absolute bottom-0 left-0 w-full p-7">

      <h3 className="text-2xl font-bold text-white">
        {item.title}
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-5 flex items-center gap-2 text-white"
      >
        <span className="font-medium">
          Learn More
        </span>

        <ArrowRight className="h-5 w-5" />
      </motion.div>

    </div>
  </motion.div>
</SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}