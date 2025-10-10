import CTA from "~/components/CTA";
import type { Route } from "./+types/about";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About - SharePro" },
        {
            name: "description",
            content:
                "Empowering businesses to grow through the power of their customers.",
        },
    ];
}

export default function About() {
    return (
        <main className=" text-[#030229]">
            {/* Hero Section */}
            <section className="bg-[#F3F6F8]">
                <div className="max-w-5xl mx-auto text-center py-20 px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#233E97]">
                        Empowering businesses to grow through the power of their customers.
                    </h1>
                </div>
            </section>


            {/* Who We Are */}
            <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 py-10 mb-20">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                    <p className="text-[#030229B2] mb-8">
                        SharePro is a growth-focused platform designed to help businesses
                        build stronger relationships with their customers through referral
                        and loyalty campaigns. We believe your best marketers are the
                        customers who already love your brand.
                    </p>

                    <div className="bg-[#E7EEFF] p-6 rounded-lg">
                        <h3 className="font-semibold text-[#233E97] mb-2">Our Mission</h3>
                        <p className="text-[#030229B2] text-sm leading-relaxed">
                            To simplify word-of-mouth marketing by giving businesses the tools
                            to reward loyalty, encourage referrals, and track performance — all
                            in one place.
                        </p>
                    </div>
                </div>

                <img
                    src="/assets/why-us.png"
                    alt="Customer using SharePro"
                    className="rounded-2xl shadow-md w-full"
                />
            </section>

            {/* What We Offer */}
            <section className="max-w-7xl mx-auto bg-white rounded-xl border border-[#CCCCCC] p-10 mb-20">
                <h2 className="text-center text-2xl font-semibold mb-10">
                    What We Offer
                </h2>

                <div className="flex max-w-4xl mx-auto flex-wrap justify-center gap-4">
                    {[
                        "Easy-to-launch referral and loyalty campaigns",
                        "Real-time analytics and customer insights",
                        "Multichannel support (WhatsApp, SMS, Social, etc.)",
                        "Scalable for small teams and growing brands",
                        "A no-code experience that saves time and money",
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 border border-[#0302291A] text-sm px-4 py-2 rounded-full"
                        >
                            <span className="w-2 h-2 bg-[#233E97] rounded-full" />
                            {item}
                        </div>
                    ))}
                </div>
            </section>

            {/* Who We Serve */}
            <section id="serve" className="bg-[#030229] text-white py-10">
                <div className="max-w-5xl mx-auto text-center px-4">
                    <h2 className="text-2xl font-semibold mb-6">Who We Serve</h2>

                    <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <span>We work with businesses of all sizes</span>
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>from startups to growing brands</span>
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                        </div>
                        <div>
                            <span>turn everyday customers into loyal advocates.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTA />
        </main>
    );
}
