const menu = document.getElementById('menu');
const navigation = document.getElementById('ul');

const show = () => {
    navigation.style.display === 'none' ? navigation.style.display = 'block' : navigation.style.display = 'none';
}
if(document.body.style.minWidth === '1000px'){
    navigation.style.display = 'flex'
}
menu.addEventListener('click', show)