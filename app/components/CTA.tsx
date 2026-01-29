import React from 'react';
import { Link } from 'react-router';

const CTA = () => {
    return (
        <section className="bg-transparent py-20">
            <div className=" max-w-6xl mx-auto bg-[#0C0C0C] border border-white rounded-lg text-white text-center py-20">
                <div className='lg:max-w-xl mx-auto'>
                    <button className="bg-transparent text-[#FFFFFF] px-4 py-2 rounded-full text-sm mb-4 border border-white">
                        Start your 14-day free trial
                    </button>
                    <h2 className="lg:text-[48px] text-3xl font-bold mb-4">
                        Ready to Grow Your Business?

                    </h2>
                    <p className="mb-8 text-white/90">
                        Join thousands of businesses using Rewards to drive growth through referrals and loyalty programs.                </p>
                    <div className="flex justify-center gap-4">
                        <Link to="https://app.mysharepro.com/auth/sign-up">
                            <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold">
                                Start Free Trial
                            </button>
                        </Link>
                        <Link to="https://app.mysharepro.com/auth/sign-in">
                            <button className="text-white border border-[#2C303F] px-6 py-3 rounded-md font-semibold">
                                Watch Demo
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;