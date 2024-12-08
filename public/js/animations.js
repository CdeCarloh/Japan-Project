document.addEventListener('DOMContentLoaded', () => {
    const ELEMENTS_TO_ANIMATE = document.querySelectorAll('.scroll-animate');

    const IS_IN_VIEWPORT = (element) => {
        const RECT = element.getBoundingClientRect();
        return RECT.top < window.innerHeight && RECT.bottom > 0;
    };

    const HANDLE_SCROLL = () => {
        ELEMENTS_TO_ANIMATE.forEach((element) => {
            if (IS_IN_VIEWPORT(element)) {
                element.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', HANDLE_SCROLL);
    HANDLE_SCROLL();
});
