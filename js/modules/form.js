import postData from '../services/services'

//? !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! form
function formpost(formSelector) {
    function forms() {
        const form = document.querySelector(formSelector);
        console.log(form);

        bindPostData(form);
    }


    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('submit');

            const formData = new FormData(form);
            //FORM DATA TO JSON FORMAT
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            //fetch не перейдет в reject из-за неудачного HTTP запроса

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);

                }).catch(() => {
                    alert('Oops, something went wrong...');

                }).finally(() => {
                    form.reset();
                    alert('Thanks! We will contact you soon');
                });

        });
    }

    forms();
}

export default formpost;
