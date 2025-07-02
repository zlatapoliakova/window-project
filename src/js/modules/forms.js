const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

    const message = {
        loading: 'Загрузка...',
        success: 'Списибо! Данные успешно отпралены.',
        failure: 'Чтото пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;

        const res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInput = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            postData('assets/server.php', formData)
                .then(data => {
                    console.log(data);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInput();
                    setTimeout(() => {
                        statusMessage.remove()
                    }, 5000);
                });
        });
    });
};

export default forms;