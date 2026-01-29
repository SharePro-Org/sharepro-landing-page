import { SearchIcon, HelpCircle, MessageCircleQuestion, ArrowBigDown } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import type { Route } from "./+types/home";
import SupportRequestModal from '~/components/SupportModal';
import Accordion from '~/components/Accordion';
import { useQuery } from "@apollo/client/react";
import { GET_FAQS_BY_CATEGORY } from '~/apollo/queries';


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Help and Support - SharePro" },
        {
            name: "description",
            content:
                "Learn how SharePro collects, uses, and protects your information. Your privacy is important to us.",
        },
    ];
}

const issueTypes = [
    { value: "technical", label: "Technical Issue" },
    { value: "billing", label: "Billing Issue" },
    { value: "account", label: "Account Issue" },
    { value: "campaign", label: "Campaign Issue" },
    { value: "reward", label: "Reward Issue" },
    { value: "referral", label: "Referral Issue" },
    { value: "feature_request", label: "Feature Request" },
    { value: "bug_report", label: "Bug Report" },
    { value: "general", label: "General Inquiry" },
    // { value: "other", label: "Other" },
];



const helpSupport = () => {
    const [open, setOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState("");
    const [active, setActive] = React.useState<string>('general');

    const { data, loading, error } = useQuery<any>(GET_FAQS_BY_CATEGORY, {
        variables: { category: active },
    });
    const faqs = data?.faqsByCategory ?? [];

    const items = faqs.map((faq: { question: any; answer: any; }) => ({
        title: faq.question,
        content: faq.answer,
    }));

    const CATEGORY_CHOICES = [
        ['general', 'General'],
        ['account', 'Account & Profile'],
        ['campaigns', 'Campaigns'],
        ['referrals', 'Referrals'],
        ['rewards', 'Rewards & Payments'],
        ['technical', 'Technical Support'],
        ['billing', 'Billing'],
        ['business', 'Business Features'],
    ] as const;

    return (
        <main className="bg-[#0D0B12] text-white min-h-screen lg:px-0 px-2">
            <section className="bg-[#0D0B12]">
                <div className="text-center py-20 px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">
                        Help and Support
                    </h1>
                    <p className="text-sm text-gray-400 mb-1">
                        Find answers, reach support, or explore tutorials to get the most out of your experience.
                    </p>
                    <div className="flex justify-center my-3 gap-3">
                        <div className="relative md:mt-0 mt-2">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-[#19171E] md:w-80 w-full border border-[#302C3F] p-3 rounded-md pl-8 text-sm text-white placeholder-gray-500"
                                placeholder="Search By Keyword or topic"
                            />
                            <SearchIcon
                                size={16}
                                className="absolute top-4 left-3 text-gray-500"
                            />
                        </div>
                        <button className="bg-[#155DFC] text-white px-4 py-2 rounded-md font-medium hover:bg-[#1a4bd9] transition">
                            Search
                        </button>
                    </div>
                </div>
            </section>
            <section className='max-w-7xl mx-auto rounded-lg bg-[#19171E] lg:p-10 p-4 border-b border-[#232136]'>
                <div className=' md:grid md:grid-cols-2 gap-8'>
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {CATEGORY_CHOICES.map(([value, label]) => (
                                <button
                                    key={value}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition border border-transparent ${active === value ? 'bg-white text-[#0D0B12] font-semibold' : 'bg-transparent border border-[#3D3D3D] text-white'}`}
                                    onClick={() => setActive(value)}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="rounded-xl lg:p-6 mt-4 md:mt-0">
                            <Accordion items={faqs} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#0D0B12] py-10">
                <div className="max-w-7xl mx-auto my-4 lg:grid md:grid-cols-2 gap-8">
                    <div className="bg-[#19171E] rounded-2xl p-8 flex flex-col justify-between">
                        <img src="/assets/002.png" className='w-10' alt="" />
                        <h3 className="text-lg font-semibold text-white mb-2">Support Request</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Need to speak with someone? Our support team is here to help.
                        </p>
                        <button
                            onClick={() => setOpen(true)}
                            className="text-white underline text-sm font-medium text-left p-0"
                        >
                            Submit a Request
                        </button>
                    </div>

                    <div className="bg-[#19171E] rounded-2xl p-8 flex flex-col justify-between lg:mt-0 mt-4">
                        <img src="/assets/001.png" className='w-10' alt="" />

                        <h3 className="text-lg font-semibold text-white mb-2">Walkthroughs</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Step-by-step video guides to help you onboard, explore features, and solve issues faster.
                        </p>
                        <Link to="/tutorials">
                            <button className="text-white underline text-sm font-medium text-left p-0">
                                Watch Tutorials
                            </button>
                        </Link>
                    </div>

                    <div className='col-span-2 bg-[#19171E] rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center p-8 mt-4'>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Still need help?</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                We’re here for you. Drop us an email and we’ll respond within 24 hours.
                            </p>
                            <a href="mailto:support@sharepro.com">
                                <button className='px-6 py-3 text-white bg-primary rounded-md font-medium hover:bg-[#1a4bd9] transition'>support@sharepro.com</button>
                            </a>
                        </div>
                        <img src="/assets/streamline-color_send-email-flat.svg" alt="Send Email" className="w-28 h-28 lg:block hidden object-contain" />
                    </div>
                </div>
            </section>
            <SupportRequestModal
                open={open}
                onClose={() => setOpen(false)}
                issueTypes={issueTypes}
            />
        </main>
    );
};

export default helpSupport