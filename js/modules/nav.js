function nav() {
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

}

export default nav;