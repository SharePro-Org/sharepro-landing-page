import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sharepro - Smart Loyalty and Referrals" },
    {
      name: "description", content: "Built to help businesses grow through smart loyalty and referrals." },
  ];
}

export default function Home() {
  return (
    <main>
      <div className="max-w-7xl mx-auto"></div>
    </main>
  );
}
