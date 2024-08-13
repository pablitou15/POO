const arrowDown = document.querySelector('.arrow-down');
const arrowUp = document.querySelector('.arrow-up');

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollHeight > 0) {
        arrowDown.style.opacity = 1 - (scrollTop / scrollHeight);
        arrowUp.style.opacity = scrollTop / scrollHeight;
    }
});

function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

arrowDown.addEventListener('click', () => {
    scrollToBottom();
    updateArrowOpacity();
});

arrowUp.addEventListener('click', () => {
    scrollToTop();
    updateArrowOpacity();
});

function updateArrowOpacity() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollHeight > 0) {
        arrowDown.style.opacity = 1 - (scrollTop / scrollHeight);
        arrowUp.style.opacity = scrollTop / scrollHeight;
    }
}

    function shakePage() {
        const originalScrollTop = window.scrollY;
        window.scrollTo({ top: originalScrollTop - 1, behavior: 'smooth' });
        setTimeout(() => {
            window.scrollTo({ top: originalScrollTop + 1, behavior: 'smooth' });
        }, 1);
    }

    window.addEventListener('load', () => {
        shakePage();
    });


    window.onload = function() {
        window.scrollTo(0, 0);
    };









