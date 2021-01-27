var tul = document.getElementById('tul-body');
var list = document.getElementById('list-body');
var s = 'tul'

document.getElementById('menu-button').onclick = (e) => {
    e.target.src = s == 'tul' ? 'img/delete.png' : 'img/menu.png';
    document.getElementById('head-list').style.backgroundColor = s == 'tul' ? '#0F6A7B' : 'white';
    s == 'tul' ? (list.style.display = '', tul.style.display = 'none') : (list.style.display = 'none', tul.style.display = '');
    s = s == 'tul' ? 'list' : 'tul';
}