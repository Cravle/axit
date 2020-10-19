function header() {
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
}

export default header;