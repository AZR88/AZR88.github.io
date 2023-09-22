// Mendapatkan semua elemen dengan class "checkbox"
var like = document.querySelectorAll('.like-icon');
var bookmark = document.querySelectorAll('.save-icon')

var img_1 = 'like-1.jpg';
var img_2 = 'like-2.jpg';
var img_3 = 'bookmark1.jpg';
var img_4 = 'bookmark2.png' ;

function gantiGambar(elem) {
    if (elem.src.includes(img_1)) {
        elem.src = img_2;
    } else if (elem.src.includes(img_2)) {
        elem.src = img_1;
    }
}

function gantibook(bok) {
    if (bok.src.includes(img_3)){
        bok.src = img_4
    } else if (bok.src.includes(img_4)) {
        bok.src = img_3
    }
}


bookmark.forEach(function(book) {
    book.addEventListener('click', function(){
        gantibook(book);
    })
});

like.forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
        gantiGambar(checkbox);
    });
});


