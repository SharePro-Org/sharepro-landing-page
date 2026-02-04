import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const testimonials = [
    {
        id: 1,
        name: "Adaobi N.",
        role: "Head of Growth, RetailCo",
        quote:
            "SharePro helped us grow referrals by 42% in 3 months. Setup was painless and excellent.",
    },
    {
        id: 2,
        name: "Tunde A.",
        role: "Founder, FoodieApp",
        quote:
            "Our customers love the rewards. The campaign templates made it easy to launch and measure ROI quickly.",
    },
    {
        id: 3,
        name: "Chioma O.",
        role: "Marketing Lead, ShopEasy",
        quote:
            "Support is fast and the team worked with us to customize referral flows. Conversions went up immediately.",
    },
    {
        id: 4,
        name: "Chioma O.",
        role: "Marketing Lead, ShopEasy",
        quote:
            "Support is fast and the team worked with us to customize referral flows. Conversions went up immediately.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">Testimonials from Our Customers</h2>
                <p className="text-gray-600 mb-8">Here’s what our customers are saying</p>

                <Swiper
                    spaceBetween={1}
                    slidesPerView={1}
                    loop
                    // navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    // modules={[Navigation, Pagination, Autoplay]}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((t) => (
                        <SwiperSlide key={t.id}>
                            <div className="px-4">
                                <div className="bg-white p-8 rounded-lg border border-[#E2E8F0] h-full flex flex-col justify-between">
                                    <blockquote className="text-gray-800 text-lg">“{t.quote}”</blockquote>
                                    <div className="mt-6 flex items-center gap-3">
                                        <div className="text-left">
                                            <div className="font-semibold">{t.name}</div>
                                            <div className="text-sm text-gray-500">{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
