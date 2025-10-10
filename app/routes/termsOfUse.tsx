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
        <main className=" text-[#030229]">
            {/* Header */}
            <section className="bg-[#F3F6F8]">
                <div className="text-center py-20 px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#233E97] mb-2">
                        Terms of Use
                    </h1>
                    <p className="text-sm text-[#030229B2] mb-1">
                        <span className="font-semibold">Effective Date:</span> July 23, 2025
                    </p>
                    <p className="text-[#030229B2] max-w-2xl mx-auto">
                        These Terms govern your use of SharePro. By using our platform, you agree to comply with them.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-6 pb-20">
                {/* Sidebar */}
                <aside className="bg-white p-6 rounded-lg w-full md:w-1/3 h-fit">
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
                                className={`border rounded-md text-sm p-3 ${index === 0
                                    ? "border-[#233E97] text-[#233E97] font-semibold"
                                    : "border-gray-200 text-[#030229B2]"
                                    }`}
                            >
                                {index + 1}. {item}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content */}
                <article className="flex-1 bg-white p-8 rounded-lg leading-relaxed text-[#030229B2] text-sm">
                    <h2 className="text-2xl font-semibold text-[#030229] mb-4">
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
