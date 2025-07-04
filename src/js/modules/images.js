const images = () => {
    const popupImg = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img');

    popupImg.classList.add('popup');
    workSection.appendChild(popupImg);

    popupImg.style.justifyContent = 'center';
    popupImg.style.alignItems = 'center';
    popupImg.style.display = 'none';

    bigImg.style.cssText = 'width: 60%; height: 90%; object-fit: cover;';

    popupImg.appendChild(bigImg);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.target;

        if (target && target.classList.contains('preview')) {
            popupImg.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        };

        if(target && target.matches('div.popup')) {
            popupImg.style.display = 'none';
            document.body.style.overflow = '';
        };
    });
};

export default images;