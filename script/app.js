const menuShow =  document.querySelector('.show')
const buttonToggleMenu = document.querySelector('.toggle_menu_mobile')
const body = document.querySelector('body')



buttonToggleMenu.addEventListener('click',function(){
    buttonToggleMenu.classList.toggle('close')
    menuShow.classList.toggle('hidden');
    body.classList.toggle('no_scroll')
})