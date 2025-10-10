import CTA from "~/components/CTA";
import type { Route } from "./+types/home";

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
            <button className="bg-[#233E97] w-44 p-4 text-white rounded-md">
              Get Started
            </button>
            <button className="bg-[#A16AD4] w-44 p-4 text-white rounded-md">
              Log into Dashboard
            </button>
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
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Pricing Preview</h2>
          <p className="text-[#030229B2] mb-12">
            Simple pricing that scales with you.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                name: "Growth",
                price: "₦7,500 /month",
                features: [
                  "10 Campaigns",
                  "Basic Analytics",
                  "Limited Reward Budget",
                ],
              },
              {
                name: "Pro",
                price: "₦18,000 /month",
                features: [
                  "Unlimited Campaigns",
                  "Full Analytics",
                  "N500k Reward Cap",
                ],
              },
              {
                name: "Enterprise",
                price: "Custom Pricing",
                features: [
                  "Unlimited Campaigns",
                  "Dedicated Support",
                  "Custom Integrations",
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition bg-[#F9FBFC]"
              >
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-2xl font-semibold text-[#233E97] mb-4">
                  {plan.price}
                </p>
                <ul className="mb-6 space-y-2 text-sm text-[#030229B2]">
                  {plan.features.map((f, j) => (
                    <li key={j}>✔️ {f}</li>
                  ))}
                </ul>
                <button className="bg-[#233E97] w-full py-3 text-white rounded-md">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}
