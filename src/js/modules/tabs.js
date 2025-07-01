const tabs = (headerSelector, tabSelector, tabContentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          tabContent = document.querySelectorAll(tabContentSelector);


    function hideTabContent() {
        tabContent.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }
    
    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;

        if (target && 
            (target.classList.contains(tabSelector.replace(/\./, "")) || 
             target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
            });
        }
    });
}

export default tabs;