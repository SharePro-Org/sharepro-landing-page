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
        <main className="bg-[#0D0B12] text-white lg:px-0 px-2">
            {/* Hero Section */}
            <section className="bg-[#0D0B12]">
                <div className="max-w-3xl mx-auto text-center py-20 px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Empowering businesses to grow through the power of their customers.                    </h1>
                </div>
            </section>


            {/* Who We Are */}
            <section className="max-w-7xl bg-[#1a1820] rounded-lg mx-auto items-center px-4 py-10 mb-20">
                <div className="lg:w-1/2 text-center mx-auto">
                    <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
                    <p className="text-[#B7B4C7] mb-8">
                        SharePro is a growth-focused platform designed to help businesses
                        build stronger relationships with their customers through referral
                        and loyalty campaigns. We believe your best marketers are the
                        customers who already love your brand.
                    </p>
                </div>

                <img
                    src="/assets/why-us.png"
                    alt="Customer using SharePro"
                    className="rounded-sm lg:h-[500px] object-cover shadow-md w-full"
                />
            </section>

            <section className="bg-[#0D0B12] text-white mb-20">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Our Mission",
                                desc: "To simplify word-of-mouth marketing by giving businesses the tools to reward loyalty, encourage referrals, and track performance — all in one place.",
                                icon: "Container11.svg"
                            },
                            {
                                step: "02",
                                title: "Who We Serve",
                                desc: "We work with businesses of all sizes, from startups to growing brands, turning everyday customers into loyal advocates.",
                                icon: "Container14.svg"
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-[#1a1820] p-8 rounded-lg border border-[#2C303F] hover:border-[#233E97] transition text-left"
                            >
                                <img className="mb-6" src={`/assets/icons/${item.icon}`} alt="" />
                                {/* <div className="text-3xl font-bold text-[#233E97] mb-4">{item.step}</div> */}
                                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="max-w-7xl mx-auto bg-[#1a1820] rounded-lg border border-[#19171E] p-10 mb-20">
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
                            className="flex items-center gap-2 border border-white text-sm px-4 py-2 rounded-xl"
                        >
                            <span className="w-2 h-2 bg-[#233E97] rounded-full" />
                            {item}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <CTA />
        </main>
    );
}
