import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
    useEffect(() => {
        if (typeof window === 'undefined') return;
        // once: false makes elements animate each time they enter viewport
        AOS.init({ once: false, mirror: true, duration: 700, easing: 'ease-out-cubic' });
        AOS.refresh();

        // Ensure animations can re-trigger: when AOS elements exit the viewport remove the 'aos-animate' class
        // so AOS will animate them again on re-entry. This is cheap and avoids re-initializing AOS repeatedly.
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const el = entry.target as HTMLElement;
                if (!entry.isIntersecting) {
                    // remove animate class so AOS can add it again when it comes back
                    el.classList.remove('aos-animate');
                }
            });
        }, { threshold: 0 });

        // Observe all AOS-tagged elements
        const nodes = Array.from(document.querySelectorAll('[data-aos]')) as HTMLElement[];
        nodes.forEach((n) => observer.observe(n));

        // cleanup
        return () => {
            observer.disconnect();
        };
    }, []);

    return null;
}
