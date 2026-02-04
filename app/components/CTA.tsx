import React from 'react';
import { Link } from 'react-router';

const CTA = () => {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto">
                <div className='lg:flex'>
                    <div>
                        <h1 className='lg:text-5xl text-3xl font-bold'>Start <br /> Rewarding. <br /> Start Growing.</h1>
                        <p className='my-3'>Join thousands of businesses using SharePro to build stronger customer relationships and drive sustainable growth.</p>
                        <button className='p-3 bg-primary text-white rounded-md flex items-center gap-2'>
                            Get Started Now
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 12H6.75m6 6 6-6-6-6" />
                            </svg>
                        </button>
                        <div className="flex gap-4 mt-6">
                            <div>
                                <h1 className="text-3xl font-bold">10k+</h1>
                                <p className='text-sm'>Active Users</p>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold">98%</h1>
                                <p className='text-sm'>Satisfaction Rate</p>
                            </div>
                        </div>
                    </div>
                    <img src="/assets/carrying-bag.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default CTA;