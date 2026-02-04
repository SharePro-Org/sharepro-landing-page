declare module 'swiper/react' {
    import type { ComponentType } from 'react';
    export const Swiper: ComponentType<any>;
    export const SwiperSlide: ComponentType<any>;
    export default Swiper;
}

declare module 'swiper' {
    const SwiperCore: any;
    export default SwiperCore;
    export const Navigation: any;
    export const Pagination: any;
    export const Autoplay: any;
}
