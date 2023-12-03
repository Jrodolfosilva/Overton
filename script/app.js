const menuShow =  document.querySelector('.show')
const buttonToggleMenu = document.querySelector('.toggle_menu_mobile')




buttonToggleMenu.addEventListener('click',function(){
    buttonToggleMenu.classList.toggle('close')
    menuShow.classList.toggle('hidden');
})