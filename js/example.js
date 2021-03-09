// Menambahkan teks ke elemen
var title = document.getElementById('root');
title.innerHTML = "Belajar DOM"
title.style.color = 'blue'

var title2 = document.getElementsByClassName('root2')[0];
title2.innerHTML = "Belajar DOM2"

var p = document.getElementsByClassName('root2')[1];
p.innerHTML = "paragraf DOM"

// Mengambil element paragraf
var paragraph = document.getElementsByClassName('paragraf')
console.log(paragraph);
paragraph[1].style.color = 'darkblue'
paragraph[0].style.backgroundColor = 'wheat'
paragraph[2].style.textAlign = 'right'

// Membuat element baru
var content = document.createElement('h3');
content.textContent = "ini adalah content dari DOM"
console.log(content);
content.style.marginLeft = "10px"
document.body.append(content);

// Menghapus element
var element = document.getElementsByClassName('par-delete')[0];
element.remove();
console.log(element);