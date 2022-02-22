const menu = document.getElementById('menu');
const navigation = document.getElementById('ul');

const show = () => {
    navigation.style.display === 'none' ? navigation.style.display = 'block' : navigation.style.display = 'none';
}
if(document.body.style.minWidth === '1000px'){
    let style = document.createElement('style');
    style.innerHtml =  `{
            .nav-ul {
              display: flex;
              list-style: none;
            }
            .nav-ul li {
              padding: 12px 30px;
              font-size: 25px;
              transition: 0.3s ease;
              border-radius: 5px;
            }
        }`
}
menu.addEventListener('click', show())