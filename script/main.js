window.addEventListener('DOMContentLoaded', () => {



    /* FIXED HEADER */
    window.onscroll = function () {
        showHeader();
    };

    window.onload = function () {
        showHeader();
    };

    function showHeader() {
        let header = document.querySelector(".header");
        let introH = document.querySelector(".intro").scrollHeight;

        if (window.pageYOffset > introH - 100) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    }


    /* SMOOTH SCROLL */
    const anchors = document.querySelectorAll('a[href *= "#"]');

    for (let anchor of anchors) {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const blockID = anchor.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    /* Menu nav Toggle */

    const menu = document.querySelector("#nav_toggle");
    const nav = document.querySelector("#nav_panel");
    const navL = document.querySelector("#nav_link");

    menu.onclick = (event) => {
        event.preventDefault();
        menu.classList.toggle("active");
        nav.classList.toggle("active");
    };

    nav.onclick = () => {
        menu.classList.toggle("active");
        nav.classList.toggle("active");
    };


    //? TABS

    const tabs = document.querySelectorAll('.block__item'),
        tabsContent = document.querySelectorAll(".tabs__content"),
        tabsParent = document.querySelector('.tabs__block');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('active', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('active', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('block__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
    //? POST !!!!!!!!!!!!!!!!!!!!!!!!!!!

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();
    };


    //? !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! form

    function forms(formSelector) {
        const form = document.querySelector(formSelector);
        console.log(form);

        const message = {
            success: 'Thanks! We will contact you soon',
            failure: 'Oops, something went wrong...',
        };

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
                    alert('Eror');

                }).finally(() => {
                    form.reset();
                });

        });
    }

    forms('form');


});