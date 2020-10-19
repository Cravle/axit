import header from './modules/header'
import scroll from './modules/scroll'
import nav from './modules/nav'
import tabs from './modules/tabs'
import formpost from './modules/form'

window.addEventListener('DOMContentLoaded', () => {

    header();
    scroll();
    nav();

    formpost('form');


});