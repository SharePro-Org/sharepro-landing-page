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
    <main className="bg-[#F3F6F8] text-[#030229]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center px-4">
        <div className="max-w-3xl mx-auto py-20">
          <h1 className="text-4xl md:text-5xl font-bold">
            Turn Your{" "}
            <span className="text-[#233E97]">Customers</span> into Your Biggest{" "}
            <span className="text-[#233E97]">Promoters</span>
          </h1>
          <p className="text-[#030229B2] max-w-2xl mx-auto mt-6">
            A smart referral and loyalty platform that helps businesses grow
            through word-of-mouth and repeat engagement.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link to="https://sharepro-web.netlify.app/auth/sign-up">
              <button className="bg-[#233E97] w-44 p-4 text-white rounded-md">
                Get Started
              </button>
            </Link>
            <Link to="https://sharepro-web.netlify.app/auth/sign-in">
              <button className="bg-[#A16AD4] w-44 p-4 text-white rounded-md">
                Log into Dashboard
              </button>
            </Link>
          </div>
        </div>
        <img
          src="/assets/hero-img.png"
          alt="Dashboard preview"
          className=""
        />
      </section>

      {/* How It Works */}
      <section className="bg-[#243F99] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">How It Works</h2>
          <p className="text-center">Start growing through the power of loyalty and referrals in just a few simple steps.</p>
          <div className="grid md:grid-cols-4 gap-8 text-left mt-12">
            {[
              {
                step: "Step 1",
                title: "Create a Campaign",
                desc: "Set up referral, loyalty, or combo campaigns in minutes.",
              },
              {
                step: "Step 2",
                title: "Share Links Easily",
                desc: "Customers share your business via WhatsApp, SMS, or social.",
              },
              {
                step: "Step 3",
                title: "Track & Reward",
                desc: "Monitor performance and automate customer rewards.",
              },
              {
                step: "Step 4",
                title: "Watch Growth Happen",
                desc: "Gain loyal customers and boost conversions effortlessly.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-md border border-[#FFFFFF1A]"
              >
                <img src={`/assets/steps/step-${i + 1}.png`} alt="" />
                <h4 className="font-semibold text-sm uppercase mb-2">
                  {item.step}
                </h4>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <p className="text-[#030229B2] mb-12">
            Everything you need to grow through referrals and loyalty.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              "Referral Campaigns",
              "Loyalty Programs",
              "Channel Analytics",
              "Reward Management",
              "Team Access",
              "Wallet & Payouts",
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-xl hover:shadow-lg transition bg-[#F3F6F880]"
              >
                <h3 className="font-semibold text-lg">{feature}</h3>
                <p className="text-sm text-[#030229B2] my-2">
                  {feature === "Referral Campaigns" &&
                    "Turn happy customers into brand promoters."}
                  {feature === "Loyalty Programs" &&
                    "Reward repeat engagement and boost retention."}
                  {feature === "Channel Analytics" &&
                    "See which platforms bring the best results."}
                  {feature === "Reward Management" &&
                    "Set up and automate custom reward systems."}
                  {feature === "Team Access" &&
                    "Invite your team to collaborate and manage campaigns."}
                  {feature === "Wallet & Payouts" &&
                    "Fund campaigns and track reward spending with ease."}
                </p>
                <img className="mt-4" src={`/assets/keys/key-${i + 1}.png`} alt="" />

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SharePro */}
      <section className="bg-[#EFF2F8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Why Choose SharePro?</h2>
            <p className="mt-4">The smarter way to grow your business.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-6">
            <div>
              <ul className="space-y-4 text-[#030229B2]">
                <li className="border border-[#0302291A] p-4 rounded-md">
                  <strong>Cut Marketing Costs</strong>{" "} <br />
                  Grow through referrals instead of expensive ads.
                </li>
                <li className="border border-[#0302291A] p-4 rounded-md">
                  <strong>
                    Boost Customer Retention
                  </strong>{" "} <br />
                  Reward loyalty and keep customers coming back.
                </li>
                <li className="border border-[#0302291A] p-4 rounded-md">
                  <strong>Easy to Set Up</strong> <br />
                  Launch campaigns without any technical skills.
                </li>
                <li className="border border-[#0302291A] p-4 rounded-md">
                  <strong>Works Everywhere</strong> <br />
                  Share links via WhatsApp, SMS, Instagram, and more.
                </li>
              </ul>
            </div>
            <img
              src="/assets/why-us.png"
              alt="Happy customer using SharePro"
              className="rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center ">
            <h2 className="text-3xl font-bold mb-4">Pricing Preview</h2>
            <p className="text-[#030229B2] mb-12">
              Simple pricing that scales with you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plansLoading ? (
              <div className="col-span-3 flex justify-center items-center py-8">
                <span className="text-gray-500">Loading plans...</span>
              </div>
            ) : plansError ? (
              <div className="col-span-3 flex justify-center items-center py-8">
                <span className="text-red-500">Error loading plans</span>
              </div>
            ) : plansData?.plans?.length ? (
              plansData.plans.map((plan) => (
                <div key={plan.id} className="bg-white rounded-md p-4 border border-[#E5E5EA]">
                  <div className="border-b border-b-[#E5E5EA] pb-3">
                    <h2 className="text-primary mb-2 flex items-center gap-2">
                      {plan.name}
                      {plan.isPopular && (
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Popular</span>
                      )}
                    </h2>
                    <div className="flex gap-2">
                      <span className="font-semibold text-lg">
                        {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(plan.price)}
                      </span>
                      <span className="my-auto">/{plan.billablePeriods}</span>
                    </div>
                  </div>
                  <ul className="text-sm space-y-1 my-3 min-h-[120px]">
                    {plan.description && (
                      <li className="flex items-center gap-2 my-1">
                        <span className="text-black">✓</span>
                        {plan.description}
                      </li>
                    )}
                    <li className="flex items-center gap-2 my-1">
                      <span className="text-black">✓</span>
                      Max Campaigns: {plan.maxCampaigns}
                    </li>
                    <li className="flex items-center gap-2 my-1">
                      <span className="text-black">✓</span>
                      Max Referrals: {plan.maxReferrals}
                    </li>
                    <li className="flex items-center gap-2 my-1">
                      <span className="text-black">✓</span>
                      Max Team Members: {plan.maxTeamMembers}
                    </li>
                    <li className="flex items-center gap-2 my-1">
                      <span className="text-black">✓</span>
                      Analytics: {plan.analyticsEnabled ? 'Yes' : 'No'}
                    </li>
                    <li className="flex items-center gap-2 my-1">
                      <span className="text-black">✓</span>
                      Custom Branding: {plan.customBranding ? 'Yes' : 'No'}
                    </li>
                    <li className="flex items-center gap-2 my-1">
                      <span className="text-black">✓</span>
                      Priority Support: {plan.prioritySupport ? 'Yes' : 'No'}
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Link to="https://sharepro-web.netlify.app/auth/sign-up">
                      <button className="text-sm w-full rounded-sm bg-[#ECF3FF] text-[#233E97] p-4">Get Started</button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 flex justify-center items-center py-8">
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
