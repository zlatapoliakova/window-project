import checkNumInput from "./checkNumInput";

const changeModalState = (state) => {
    const modalForm = document.querySelectorAll('.balcon_icons_img'),
          modalWidth = document.querySelectorAll('#width'),
          modalHeight = document.querySelectorAll('#height'),
          modalType = document.querySelectorAll('#view_type'),
          modalProfile = document.querySelectorAll('.checkbox');

    checkNumInput('#width');
    checkNumInput('#height');

    function bindStateToModal(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN':
                        state[prop] = i + 1;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";

                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i === j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }

    bindStateToModal('click', modalForm, 'form');
    bindStateToModal('input', modalWidth, 'width');
    bindStateToModal('input', modalHeight, 'height');
    bindStateToModal('change', modalType, 'type');
    bindStateToModal('change', modalProfile, 'profile');
}

export default changeModalState;