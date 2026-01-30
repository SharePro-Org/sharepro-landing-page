import CTA from "~/components/CTA";
import type { Route } from "./+types/home";
import { GET_PLANS } from "~/apollo/queries";
import { useQuery } from "@apollo/client/react";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Sharepro - Smart Loyalty and Referrals" },
    {
      name: "description",
      content:
        "Built to help businesses grow through smart loyalty and referrals.",
    },
  ];
}

export default function Home() {
  const { data: plansData, loading: plansLoading, error: plansError } = useQuery<{ plans: any[] }>(GET_PLANS);

  return (
    <main className="bg-[#0D0B12] text-white">
      {/* Hero Section */}
      <div>

      </div>
      <section
        className="relative text-center px-4 py-32"
        style={{
          background: 'linear-gradient(115.68deg, #0D0B12 74.16%, rgba(11, 29, 67, 0.693151) 86.74%, rgba(0, 60, 194, 0.2) 95.86%)'
        }}
      >
        <div className="max-w-3xl mx-auto mb-12">
          <button className="bg-transparent text-[#FFFFFF] px-4 py-2 rounded-full text-sm mb-4 border border-white">
            #1 Africa Leading Customer Reward System
          </button>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Turn Customers Into{" "}
            <span className="text-white">Loyal Advocates.</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
            Build powerful referral and loyalty programs that drive sustainable growth. Simple to set up, powerful in results.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="https://app.mysharepro.com/auth/sign-up">
              <button className="bg-primary px-8 py-3 text-white rounded-md font-medium transition flex items-center gap-2">
                Start Free Trial
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 12H6.75m6 6 6-6-6-6" />
                </svg>
              </button>
            </Link>
            <button className="border border-[#2C303F] px-8 py-3 text-white rounded-md font-medium hover:bg-gray-900 transition">
              Learn More
            </button>
          </div>
        </div>
        {/* <img
          src="/assets/hero-img.png"
          alt="Dashboard preview"
          className="rounded-lg shadow-2xl max-w-4xl mx-auto"
        /> */}
      </section>

      {/* Why SharePro Section */}
      <section id="features" className="bg-[#0D0B12] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why SharePro</h2>
            <p className="text-[#B7B4C7] lg:max-w-2xl mx-auto">
              SharePro makes retention simple, helping small businesses grow with the same tools global brands use.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Increased Repeat Purchases",
                desc: "Reward customers for buying more and coming back.",
                img: "/assets/steps/why-1.png"
              },
              {
                title: "Track Real Results",
                desc: "See which referrals bring the best customers.",
                img: "/assets/steps/why-2.png"
              },
              {
                title: "Save Word of Mouth",
                desc: "Capture organic growth and turn it into results.",
                img: "/assets/steps/why-3.png"
              },
              {
                title: "Increased Visibility",
                desc: "Make it easy for customers to find and share you.",
                img: "/assets/steps/why-4.png"
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#1a1820] rounded-lg p-6 border border-gray-800 hover:border-[#233E97] transition">
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.desc}</p>
                <img src={item.img} alt={item.title} className="rounded-lg w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referrals Section */}
      <section className="bg-[#13111A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-16">
                <h2 className="text-4xl font-bold mb-4">Referrals Made Simple</h2>
                <p className="text-[#B7B4C7] lg:max-w-2xl mx-auto">
                  Turn your happy customers into brand ambassadors with simple referral links they can easily share across all channels.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "Easy Sharing",
                    desc: "One-click sharing across email, social media, and messaging platforms.",
                    icon: "Icon25"
                  }, {
                    title: "Reward Both Parties",
                    desc: "Incentivize referrers and new customers with customizable rewards.",
                    icon: "Icon26"
                  }, {
                    title: "Instant Tracking",
                    desc: "Real-time analytics on referral performance and conversion rates.",
                    icon: "Icon27"
                  }

                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1A1625] text-white">
                        <img src={`/assets/icons/${item.icon}.svg`} alt="" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-[#B7B4C7]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1a1820] rounded-lg p-6 border border-gray-800">
              <img src="/assets/referrals.png" alt="Referrals" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>


      {/* How It Works */}
      <section className="bg-[#0D0B12] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16">
            <button className="bg-transparent text-[#FFFFFF] px-4 py-2 rounded-full text-sm mb-4 border border-white">
              For Businesses
            </button>
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-[#B7B4C7] max-w-2xl mx-auto">
              In just a few clicks, you can launch a loyalty or referral program that rewards your customers, tracks every interaction, and helps your business grow, automatically.            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Your Program",
                desc: "Set up a loyalty or referral campaign in minutes. Just pick a template, customize your rewards, and hit launch.",
                icon: "Container11.svg"
              },
              {
                step: "02",
                title: "Get Customers to Join",
                desc: "Share your unique link. Customers can join instantly through WhatsApp, Email, and other social media outlets.",
                icon: "Container14.svg"
              },
              {
                step: "03",
                title: "Reward & Grow Automatically",
                desc: "Every repeat purchase and referral is tracked for you. Rewards go out instantly, and your sales grow on autopilot.",
                icon: "Container17.svg"
              },
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


      {/* Earn Rewards Section */}
      <section className="bg-[#0D0B12] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 lg:max-w-lg mx-auto">
            <button className="bg-transparent text-[#FFFFFF] px-4 py-2 rounded-full text-sm mb-4 border border-white">
              For Customers
            </button>
            <h2 className="text-4xl font-bold mb-4">Earn Rewards for Shopping and Sharing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Customers earn rewards for both purchases and successful referrals, creating a win-win that boosts loyalty.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Container11.svg",
                title: "Join Campaigns Instantly",
                desc: "Set up a loyalty or referral campaign in minutes. Just pick a template, customize your rewards, and hit launch."
              },
              {
                icon: "Container14.svg",
                title: "Shop and Invite Friends to Shop!",
                desc: "Share your unique link. Customers can join instantly through WhatsApp, Email, and other social media outlets."
              },
              {
                icon: "Container17.svg",
                title: "Earn Amazing Rewards",
                desc: "Every repeat purchase and referral is tracked for you. Rewards go out instantly, and your sales grow on autopilot."
              },
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

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-[#0D0B12] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Start with “Free for your first 100 customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plansLoading ? (
              <div className="col-span-4 flex justify-center items-center py-8">
                <span className="text-gray-500">Loading plans...</span>
              </div>
            ) : plansError ? (
              <div className="col-span-4 flex justify-center items-center py-8">
                <span className="text-red-500">Error loading plans</span>
              </div>
            ) : plansData?.plans?.length ? (
              plansData.plans.map((plan, idx) => (
                <div
                  key={plan.id}
                  className={`rounded-lg p-6 border transition ${plan.isPopular
                    ? "bg-[#155DFC] border-[#BDD2FF] ring-2 ring-[#233E97] relative"
                    : "bg-[#1a1820] border-[#302C3F] hover:border-gray-700"
                    }`}
                >
                  {plan.isPopular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-white text-[#233E97] text-xs font-semibold px-3 py-1 rounded-full">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className={`text-lg font-semibold mb-2 ${plan.isPopular ? "text-white" : "text-white"}`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className={`text-3xl font-bold ${plan.isPopular ? "text-white" : "text-white"}`}>
                        {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(plan.price)}
                      </span>
                      <span className={`text-sm ${plan.isPopular ? "text-gray-100" : "text-gray-400"}`}>
                        /{plan.billablePeriods}
                      </span>
                    </div>
                    <Link to="https://app.mysharepro.com/auth/sign-up">
                      <button
                        className={`w-full py-2 rounded-md font-medium transition
                          bg-white text-[#161616] hover:bg-gray-100
                          `}
                      >
                        Get Started
                      </button>
                    </Link>
                  </div>
                  <ul className={`space-y-2 text-sm ${plan.isPopular ? "text-gray-100" : "text-white"}`}>
                    {plan.description && (
                      <li className="flex items-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-current"></span>
                        {plan.description}
                      </li>
                    )}
                    <li className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-current"></span>
                      Up to {plan.maxCampaigns} campaigns
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-current"></span>
                      {plan.maxReferrals?.toLocaleString()} referrals/month
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-current"></span>
                      {plan.maxTeamMembers} team members
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-current"></span>
                      {plan.analyticsEnabled ? "Advanced" : "Basic"} analytics
                    </li>
                    {plan.customBranding && (
                      <li className="flex items-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-current"></span>
                        Custom branding
                      </li>
                    )}
                    {plan.prioritySupport && (
                      <li className="flex items-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-current"></span>
                        Priority support
                      </li>
                    )}
                  </ul>
                </div>
              ))
            ) : (
              <div className="col-span-4 flex justify-center items-center py-8">
                <span className="text-gray-500">No plans available</span>
              </div>
            )}
          </div>
        </div>

      </section>
      {/* CTA */}
      <CTA />
    </main>
  );
}
