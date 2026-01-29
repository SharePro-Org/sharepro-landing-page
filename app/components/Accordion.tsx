import React, { useState } from "react";


interface AccordionProps {
    items: any[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-2xl mx-auto border border-[#3D3D3D] rounded-lg">
            {items.length > 0 ? items.map((item, index) => (
                <div key={index} className="">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex justify-between items-center p-4 text-left font-medium text-white focus:outline-none"
                    >
                        <span className="capitalize">{item.question}</span>
                        <span
                            className={`transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"
                                }`}
                        >
                            ▼
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
                            }`}
                    >
                        <div className="text-gray-600">{item.answer}</div>
                    </div>
                </div>
            )) : <p className="p-4">No FAQs available at the moment.</p>}
        </div>
    );
};

export default Accordion;
