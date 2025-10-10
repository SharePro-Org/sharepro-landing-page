import React, { useState } from "react";

interface AccordionItem {
    title: string;
    content: string | React.ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-2xl mx-auto border border-gray-200 rounded-lg divide-y divide-gray-200">
            {items.length > 0 ? items.map((item, index) => (
                <div key={index} className="bg-white">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-50 focus:outline-none"
                    >
                        <span>{item.title}</span>
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
                        <div className="text-gray-600">{item.content}</div>
                    </div>
                </div>
            )) : <p className="p-4">No FAQs available at the moment.</p>}
        </div>
    );
};

export default Accordion;
