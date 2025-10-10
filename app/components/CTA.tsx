import React from 'react';

const CTA = () => {
    return (
        <section className="bg-white py-20">
            <div id="cta" className=" max-w-6xl mx-auto rounded-lg text-white text-center py-20">
                <h2 className="text-3xl font-bold mb-4">
                    Start Rewarding Your Customers Today
                </h2>
                <p className="mb-8 text-white/90">
                    Launch your first campaign in minutes, no technical setup needed.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="bg-white text-[#233E97] px-6 py-3 rounded-md font-semibold">
                        Create an Account
                    </button>
                    <button className="text-white border border-white px-6 py-3 rounded-md font-semibold">
                        Explore Dashboard
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;