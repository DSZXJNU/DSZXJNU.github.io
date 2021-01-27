var player = document.getElementById('pic-play');
var pic = player.getElementsByTagName('img');
var picTitle = player.getElementsByTagName('p');
var LEN = pic.length;
var picIndex = 0

for (let i = 0; i < LEN; i++) {
    pic[i].style.display = 'none';
    picTitle[i].style.display = 'none'
}
pic[(picIndex + LEN - 1) % LEN].style.display = '';
picTitle[(picIndex + LEN - 1) % LEN].style.display = '';

setInterval(() => {
    pic[picIndex].style.display = '';
    picTitle[picIndex].style.display = '';


    pic[(picIndex + LEN - 1) % LEN].style.display = 'none';
    picTitle[(picIndex + LEN - 1) % LEN].style.display = 'none';
    picIndex = (picIndex + 1) % LEN
}, 3000)

console.log