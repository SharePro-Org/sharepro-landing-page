import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Terms of Use - SharePro" },
        {
            name: "description",
            content:
                "Learn how SharePro collects, uses, and protects your information. Your privacy is important to us.",
        },
    ];
}

export default function Terms() {
    return (
        <main className="bg-[#0D0B12] text-white min-h-screen">
            {/* Header */}
            <section className="bg-[#0D0B12]">
                <div className="text-center py-20 px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">
                        Terms of Use
                    </h1>
                    <p className="text-sm text-gray-400 mb-1">
                        <span className="font-semibold">Effective Date:</span> July 23, 2025
                    </p>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        These Terms govern your use of SharePro. By using our platform, you agree to comply with them.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-7xl bg-[#19171E] rounded-lg mx-auto flex flex-col md:flex-row gap-10 px-4 pb-20">
                {/* Sidebar */}
                <aside className=" p-6 w-full md:w-1/3 h-fit">
                    <ul className="flex flex-col gap-3">
                        {[
                            "Use of the Platform",
                            "How We Use Your Data",
                            "Data Protection",
                            "Third-Party Services",
                            "Your Choices",
                            "Contact Us",
                        ].map((item, index) => (
                            <li
                                key={index}
                                className={`border rounded-md text-sm p-3 transition-colors ${index === 0
                                    ? " text-black font-semibold bg-white"
                                    : "border-white text-gray-300 bg-transparent"
                                    }`}
                            >
                                {index + 1}. {item}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content */}
                <article className="flex-1 p-8 leading-relaxed text-gray-300 text-sm">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Use of the Platform
                    </h2>

                    {[...Array(6)].map((_, i) => (
                        <p key={i} className="mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                            vulputate libero et velit interdum, ac aliquet odio mattis. Class
                            aptent taciti sociosqu ad litora torquent per conubia nostra, per
                            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
                            lobortis. Vivamus euismod, nisi vel consectetur interdum, nisl
                            nisi aliquet odio, quis tincidunt justo nulla nec sapien.
                        </p>
                    ))}
                </article>
            </section>
        </main>
    );
}
