import CTA from "~/components/CTA";
import Testimonials from "~/components/Testimonials";
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
    <main className="bg-white">
      {/* Hero Section */}

      <section
        id="hero"
        className="relative text-center px-4"
        data-aos="fade-down"
        data-aos-duration="900"
      >
        <div className="max-w-3xl mx-auto my-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Grow Faster With <br />Referrals & Loyalty <br /> Rewards
          </h1>
          <p className="text-[#4A5565] max-w-2xl mx-auto text-lg mb-8">
            Turn your customers into brand advocates with our powerful referral and loyalty program          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="https://app.mysharepro.com/auth/sign-up">
              <button className="bg-primary px-8 py-3 text-white rounded-md font-medium transition flex items-center gap-2">
                Start Free Trial
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 12H6.75m6 6 6-6-6-6" />
                </svg>
              </button>
            </Link>
            <button className="border border-[#2C303F] px-8 py-3 text-primary rounded-md font-medium transition">
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
      <section id="features" className="bg-[#E4F1FF] py-20" data-aos="fade-right" data-aos-delay="80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built for Business Growth</h2>
            <p className="text-[#636465] lg:max-w-2xl mx-auto">
              SmartPro helps you acquire new customers and turn visitors into loyal advocates with our powerful referral and loyalty solutions            </p>
          </div>
          <div className="lg:grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Referral Campaigns",
                desc: "Amplify reach with influencer-like rewards & contests. Boost new customer acquisition by 3x with targeted incentives",
                img: "/assets/steps/why-1.png"
              },
              {
                title: "Loyalty Campaigns",
                desc: "Offer exclusive rewards to VIPs. Strengthen customer relationships & boost repeat sales by 85%",
                img: "/assets/steps/why-2.png"
              },
              {
                title: "Channel Analytics",
                desc: "See which platforms bring the best results.",
                img: "/assets/steps/why-3.png"
              }
            ].map((item, i) => (
              <div key={i} className={`bg-white lg:my-0 my-3 rounded-lg p-6 border border-[#FFFFFF0D] transition ${i === 2 ? 'col-span-2 lg:grid grid-cols-2' : ''}`}>
                <div>
                  <div className="flex gap-4 mb-2">
                    <img className="h-auto" src={`/assets/icons/icon-${i + 1}.png`} alt="" />
                    <h3 className="font-semibold text-xl my-auto">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{item.desc}</p>

                  {i === 2 && (
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <img src="/assets/icons/Container.svg" alt="bullet" className="mt-1 w-5 h-5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Monitor campaign performance</div>
                          <span className="text-gray-500">See how campaigns are performing</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <img src="/assets/icons/Container.svg" alt="bullet" className="mt-1 w-5 h-5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Get actionable channel insights</div>
                          <span className="text-gray-500">See which channels bring the best results</span>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
                <img src={item.img} alt={item.title} className="rounded-lg w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earn Rewards Section */}
      <section className="bg-[#F5F5FF] pb-10" data-aos="fade-left" data-aos-delay="120">
        <img src="/assets/Image-bags.png" alt="" />
        <div className="max-w-7xl mx-auto my-20 px-4">
          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-4">Earn Rewards for Shopping and Sharing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              & Empower Referrals & Kick back
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Container11.svg",
                title: "Increase Repeat Purchases",
                desc: "Set up a loyalty or referral campaign in minutes. Just pick a template, customize your rewards, and hit launch."
              },
              {
                icon: "Container15.svg",
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
                className="bg-[#fff] p-8 rounded-lg transition text-left"
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

      {/* How It Works */}
      <section className="bg-white py-20" data-aos="zoom-in" data-aos-delay="80">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-[#B7B4C7] max-w-2xl mx-auto">
              In just a few clicks, you can launch a loyalty or referral program that rewards your customers, tracks every interaction, and helps your business grow, automatically.            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#FAF5FF] to-[#EFF6FF] text-left">
              <div className="mb-6">
                <span className="inline-block bg-[#6B21A8] text-white text-sm font-semibold px-3 py-1 rounded-full">For Businesses</span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <img src="/assets/business/Container.svg" alt="icon" className="w-12 h-12" />
                  <div>
                    <div className="font-semibold">Create a Campaign</div>
                    <div className="text-gray-500 text-sm">Set up a referral or ambassador program in minutes with our simple builder.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img src="/assets/business/Container-1.svg" alt="icon" className="w-12 h-12" />
                  <div>
                    <div className="font-semibold">Set Rewards</div>
                    <div className="text-gray-500 text-sm">Choose cash payouts, discounts, or custom rewards that work for you.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img src="/assets/business/Container-2.svg" alt="icon" className="w-12 h-12" />
                  <div>
                    <div className="font-semibold">Track Performance</div>
                    <div className="text-gray-500 text-sm">Monitor every click, conversion, and payout in real time from your dashboard.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img src="/assets/business/Container-3.svg" alt="icon" className="w-12 h-12" />
                  <div>
                    <div className="font-semibold">Reward Customers</div>
                    <div className="text-gray-500 text-sm">Reward loyal customers for purchases and referrals automatically with payouts sent directly to their accounts.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#ECFDF5] to-[#F0FDFA] text-left">
              <div className="mb-6">
                <span className="inline-block bg-[#059669] text-white text-sm font-semibold px-3 py-1 rounded-full">For Customers & Creators</span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <img src="/assets/customers/Container.svg" alt="icon" className="w-12 h-12" />
                  <div>
                    <div className="font-semibold">Sign Up in Seconds</div>
                    <div className="text-gray-500 text-sm">Create your account and start earning immediately — no approval wait time.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img src="/assets/customers/Container-1.svg" alt="icon" className="w-12 h-12" />
                  <div>
                    <div className="font-semibold">Get Your Link</div>
                    <div className="text-gray-500 text-sm">Receive a unique referral link or personal storefront to share anywhere.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img src="/assets/customers/Container-1.svg" alt="icon" className="w-12 h-12" />
                  <div>
                    <div className="font-semibold">Share on Socials</div>
                    <div className="text-gray-500 text-sm">Post on WhatsApp, Instagram, X, TikTok — wherever your audience is.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img src="/assets/customers/Container-2.svg" alt="icon" className="w-12 h-12" />
                  <div>
                    <div className="font-semibold">Earn Instantly</div>
                    <div className="text-gray-500 text-sm">Get paid automatically when your referrals buy. Cash out anytime.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* built for business */}
      <section className="bg-[#E4F1FF] py-20" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top-bottom">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-4">Built for Every Business Model</h2>
            <p className="text-[#45556C] max-w-2xl mx-auto">
              From startups to established brands, our platform adapts to your unique needs.            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "icon1.png",
                title: "E-commerce Brands",
                desc: "Turn every customer into a brand ambassador. Drive repeat purchases through rewards."
              },
              {
                icon: "icon2.png",
                title: "Fintechs",
                desc: "Acquire users at a fraction of traditional costs. Build trust through peer recommendations."
              },
              {
                icon: "icon3.png",
                title: "SMEs",
                desc: "Compete with big brands. Launch word-of-mouth campaigns without a huge marketing budget."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#fff] p-8 rounded-lg transition text-left"
              >
                <img className="mb-2" src={`/assets/icons/${item.icon}`} alt="" />
                {/* <div className="text-3xl font-bold text-[#233E97] mb-4">{item.step}</div> */}
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* why sharepro */}
      <section className="bg-[#F5F5FF] py-20" data-aos="fade-up" data-aos-delay="140" data-aos-anchor-placement="top-bottom">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-4">Why SharePro</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              SharePro makes retention simple, helping small businesses grow with the same tools global brands use.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Container11.svg",
                stat: "30%",
                title: "Increased Repeat Purchases",
                desc: "Reward loyalty, keep customers coming back."
              },
              {
                icon: "Container15.svg",
                stat: "10x",
                title: "More Sales",
                desc: "Drive growth through customer referrals."
              },
              {
                icon: "Container17.svg",
                stat: "100%",
                title: "Increased Visibility",
                desc: "Access a wider customers base on Sharepro"
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#fff] p-8 rounded-lg transition text-left"
              >
                <img className="mb-6" src={`/assets/icons/${item.icon}`} alt="" />
                <div className="text-3xl font-bold mb-2">{item.stat}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-[#F9FAFB] text-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Select the perfect plan for your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {plansLoading ? (
              <div className="col-span-4 flex justify-center items-center py-8">
                <span className="text-gray-500">Loading plans...</span>
              </div>
            ) : plansError ? (
              <div className="col-span-4 flex justify-center items-center py-8">
                <span className="text-red-500">Error loading plans</span>
              </div>
            ) : plansData?.plans?.length ? (
              plansData.plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`rounded-lg p-6 transition flex flex-col h-full ${plan.isPopular ? "bg-primary relative" : "bg-white"}`}
                >
                  {plan.isPopular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-[#FF6900] text-[#fff] text-xs font-semibold px-3 py-1 rounded-full">Popular</span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className={`text-lg font-semibold mb-2 ${plan.isPopular ? "text-white" : "text-black"}`}>{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className={`text-3xl font-bold ${plan.isPopular ? "text-white" : "text-black"}`}>
                        {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(plan.price)}
                      </span>
                      <span className={`text-sm ${plan.isPopular ? "text-gray-100" : "text-gray-400"}`}>
                        /{plan.billablePeriods}
                      </span>
                    </div>
                    <span className={` ${plan.isPopular ? "text-white" : "text-black"}`}>{plan.description}</span>

                  </div>
                  <ul className={`space-y-2 text-sm flex-1 ${plan.isPopular ? "text-white" : "text-black"}`}>
                    {/* {plan.description && (
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-2 h-2 mt-1 rounded-full bg-current" />
                        <span>{plan.description}</span>
                      </li>
                    )} */}
                    <li className="flex items-start gap-3">
                      <img src="/assets/icons/Container.svg" alt="bullet" className="mt-1 w-4 h-4 flex-shrink-0" />
                      <span>Up to {plan.maxCampaigns} campaigns</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <img src="/assets/icons/Container.svg" alt="bullet" className="mt-1 w-4 h-4 flex-shrink-0" />
                      <span>{plan.maxReferrals?.toLocaleString()} referrals/month</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <img src="/assets/icons/Container.svg" alt="bullet" className="mt-1 w-4 h-4 flex-shrink-0" />
                      <span>{plan.maxTeamMembers} team members</span>
                    </li>
                    {plan.customBranding && (
                      <li className="flex items-center gap-3">
                        <img src="/assets/icons/Container.svg" alt="bullet" className="w-4 h-4 flex-shrink-0" />
                        Custom branding
                      </li>
                    )}
                    {plan.prioritySupport && (
                      <li className="flex items-center gap-3">
                        <img src="/assets/icons/Container.svg" alt="bullet" className="w-4 h-4 flex-shrink-0" />
                        Priority support
                      </li>
                    )}

                  </ul>
                  <Link to="https://app.mysharepro.com/auth/sign-up">
                    <button className={`w-full py-2 mt-4 rounded-sm font-medium transition ${plan.isPopular ? "bg-white text-[#161616] hover:bg-gray-100" : "bg-primary text-white hover:bg-blue-700"}`}>
                      Get Started
                    </button>
                  </Link>
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
