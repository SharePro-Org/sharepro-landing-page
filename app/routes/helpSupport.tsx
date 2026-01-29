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
        <main>
            <section className="bg-[#F3F6F8]">
                <div className="text-center py-20 px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#233E97] mb-2">
                        Help and Support
                    </h1>
                    <p className="text-sm text-[#030229B2] mb-1">
                        Find answers, reach support, or explore tutorials to get the most out
                        of your experience.                    </p>
                    <div className="flex justify-center my-3 gap-3">
                        <div className="relative md:mt-0 mt-2">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-[#F9FAFB] md:w-80 w-full border border-[#E4E7EC] p-3 rounded-sm pl-8 text-sm"
                                placeholder="Search By Keyword or topic"
                            />

                            <SearchIcon
                                size={16}
                                className="absolute top-4 left-3 text-gray-500"
                            />
                        </div>
                        <button className="bg-primary text-white px-4 py-2 rounded-sm">
                            Search
                        </button>
                    </div>
                </div>
            </section>
            <section className='bg-white p-10'>
                <div className='max-w-7xl mx-auto md:grid md:grid-cols-2 gap-4'>
                    <div>
                        <h2 className="text-2xl font-semibold text-[#030229] mb-4">
                            Frequently Asked Questions
                        </h2>
                        <div>
                            {CATEGORY_CHOICES.map(([value, label]) => (
                                <button
                                    key={value}
                                    className={`bg-[#F3F6F8] text-sm text-[#030229B2] px-4 py-4 rounded-md mr-2 mb-2 ${active === value ? 'font-semibold text-[#030229] border border-[#030229]' : ''}`}
                                    onClick={() => setActive(value)}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Accordion items={faqs} />
                    </div>

                </div>
            </section>
            <section className="bg-[#F3F6F8] py-10">
                <div className="max-w-7xl mx-auto my-4 md:grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-md my-2 p-6">
                        <div className="bg-[#ECF3FF] rounded-sm p-3 w-12 h-12 flex items-center justify-center mb-3">
                            <MessageCircleQuestion className="text-primary" />
                        </div>
                        <p className="font-semibold">Support Request</p>
                        <p className="my-2 text-sm">
                            Need to speak with someone? Our support team is here to help.
                        </p>
                        <button
                            onClick={() => {
                                setOpen(true);
                            }}
                            className="border-b text-sm"
                        >
                            Submit a Request
                        </button>
                    </div>

                    <div className="bg-white rounded-md p-6 my-2">
                        <div className="bg-[#ECF3FF] rounded-sm p-3 w-12 h-12 flex items-center justify-center mb-3">
                            <ArrowBigDown className="text-primary" />
                        </div>
                        <p className="font-semibold">Walkthroughs</p>
                        <p className="my-2 text-sm">
                            Step-by-step video guides to help you onboard, explore features, and
                            solve issues faster.
                        </p>
                        <Link
                            to={"/tutorials"
                            }
                        >
                            <button className="border-b text-sm">Watch Tutorials</button>
                        </Link>
                    </div>

                    <div className='col-span-2 bg-white my-2 rounded-md flex justify-between p-6'>
                        <div>
                            <p className="font-semibold">Still need help?</p>
                            <p className="my-2 text-sm my-2">
                                We’re here for you. Drop us an email and we’ll respond within 24 hours.
                            </p>
                            <button className='p-4 text-white bg-[#233E97] rounded-md'>support@sharepro.com</button>
                        </div>
                        <img src="/assets/streamline-color_send-email-flat.svg" alt="" />
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