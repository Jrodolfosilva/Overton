const menuShow =  document.querySelector('.menuShow')
const buttonToggleMenu = document.querySelector('.menu_list_mobile')
const body = document.querySelector('body')



buttonToggleMenu.addEventListener('click',function(){
    buttonToggleMenu.classList.toggle('close')
    menuShow.classList.toggle('show');
    body.classList.toggle('no_scroll')
})