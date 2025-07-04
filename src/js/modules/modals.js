const modals = (state) => {
    const bindModal = (triggerSelector, modalSelector, closeSelector, openModalOverlay = true) => {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              windowsClose = document.querySelectorAll('[data-end]'),
              closeTrigger = document.querySelectorAll('[data-close]'),
              scroll = calcScrollWidth();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                }

                const attention = document.createElement('div');
                attention.classList.add('status');

                if (item.classList.contains('popup_calc_button') && (!state.form || !state.width || !state.height)) return;
                if(item.classList.contains('popup_calc_profile_button') && (!state.type || !state.profile)) return;

                windows.forEach(item => {
                    item.style.display = 'none';
                });
                    
                modal.style.display = 'block';
                document.body.style.marginRight = `${scroll}px`;
                document.body.style.overflow = 'hidden';
            });
        });

        closeTrigger.forEach(item => {
            item.addEventListener('click', () => {
                windowsClose.forEach(elem => {
                    elem.style.display = 'none';
                    document.body.style.overflow = '';
                });
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            
            windows.forEach(item => {
                item.style.display = 'none';
            });
            
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal && openModalOverlay) {
                modal.style.display = 'none';

                windows.forEach(item => {
                    item.style.display = 'none';
                });
        
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            }
        });
    }

    const showModal = (selector, time) => {
        const modal = document.querySelector(selector);

        setTimeout(() => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    const calcScrollWidth = () => {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.popup_engineer_btn' ,'.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.glazing_price_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModal('.popup', 60000);
}

export default modals;