const menu = document.getElementById('menu');
const navigation = document.getElementById('ul');
navigation.style.display = 'flex';
let windows = window.matchMedia('(max-width: 1000px)')
if(windows.matches){
    navigation.style.display = 'none'
}

const show = () => {
    console.log(navigation.style.display)
    navigation.style.display === 'none' ? navigation.style.display =  'block' : navigation.style.display =  'none';
}


menu.addEventListener('click', show);
