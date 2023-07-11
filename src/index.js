const headerElement = document.querySelector('header');

window.addEventListener('scroll', () => {
    const navElements = headerElement.querySelectorAll('.menu-item');
    if (window.scrollY > 25) {
        headerElement.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        headerElement.style.borderBottom = '1px solid #ebebeb';
        navElements.forEach((x) => {
            x.classList.add('scrolled');
        });
        headerElement.querySelector('.nav-btn').classList.add('scrolled');
        headerElement.querySelector('.nav-logo').src = "https://assets-global.website-files.com/5f16d530791d4326e79cd1b0/62fbf433ce52ae96c9c70e74_dark%20logo.svg";
    }
    else {
        headerElement.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        headerElement.style.borderBottom = 'none';
        navElements.forEach((x) => {
            x.classList.remove('scrolled');
        });
        headerElement.querySelector('.nav-btn').classList.remove('scrolled');
        headerElement.querySelector('.nav-logo').src = "https://assets-global.website-files.com/5f16d530791d4326e79cd1b0/62fbf4327b17746206b87f63_white%20logo.svg";
    }
})

