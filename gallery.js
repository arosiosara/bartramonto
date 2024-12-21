var container = document.getElementById("parallax-container"),
    waveSrc = [
        "gallery/IMG_3036.JPG", 
        "gallery/IMG_3037.JPG", 
        "gallery/IMG_3038.JPG", 
        "gallery/IMG_3039.JPG", 
        "gallery/IMG_3040.JPG",
        "gallery/IMG_3041.JPG",
        "gallery/PHOTO-2024-12-20-12-24-49.jpg",
        "gallery/PHOTO-2024-12-20-12-24-50_1.jpg",
        "gallery/PHOTO-2024-12-20-12-24-52.jpg",
        "gallery/PHOTO-2024-12-20-12-24-50_2.jpg",
        "gallery/PHOTO-2024-12-20-12-24-51.jpg",
        "gallery/PHOTO-2024-12-20-12-24-50.jpg",
        "gallery/PHOTO-2024-12-20-12-24-51_1.jpg",
        "gallery/PHOTO-2024-12-20-12-24-51_2.jpg",
        "gallery/PHOTO-2024-12-20-12-24-52_1.jpg",
        "gallery/PHOTO-2024-12-20-12-24-52_2.jpg",
        "gallery/PHOTO-2024-12-20-12-24-52_3.jpg",
        "gallery/PHOTO-2024-12-20-12-24-52_4.jpg",
        "gallery/PHOTO-2024-12-20-12-24-52_5.jpg",
        "gallery/PHOTO-2024-12-20-12-24-53_1.jpg",
        "gallery/PHOTO-2024-12-20-12-24-53_2.jpg",
        "gallery/PHOTO-2024-12-20-12-24-53_3.jpg",
        "gallery/PHOTO-2024-12-20-12-24-53_4.jpg",
        "gallery/PHOTO-2024-12-20-12-24-53_5.jpg",
        "gallery/PHOTO-2024-12-20-12-24-53_6.jpg",
        "gallery/PHOTO-2024-12-20-12-24-53_7.jpg",
        "gallery/PHOTO-2024-12-20-12-24-53.jpg",
        

        
    ],
    waves = [],
    j = 0;

// Funzione per ottenere un numero casuale nell'intervallo specificato
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per caricare le immagini
function preloadImage(filename) {
    var img = new Image();
    img.onload = function () {
        img.xPlane = getRandomInRange(-500, screenWidth - 500);
        img.yPlane = getRandomInRange(500, 1000);
        img.zPlane = getRandomInRange(300, 2000);
        img.style = "transform: translate3d(" + img.xPlane + "px, " + img.yPlane + "px, -" + img.zPlane + "px)";
        container.appendChild(img);
    };
    img.src = filename;
    img.alt = "";
    waves[j] = img;
    j++;
}

// Funzione per caricare tutte le immagini
function loadImages() {
    for (var i = 0; i < waveSrc.length; ++i) {
        var filename = waveSrc[i];
        preloadImage(filename);
    }
}

// Funzione per muovere le immagini
function moveImages() {
    waves.forEach(function (image) {
        image.yPlane = image.yPlane - 2;
        image.style.cssText = "transform: translate3d(" + image.xPlane + "px, " + image.yPlane + "px,  -" + image.zPlane + "px); z-index: " + image.zIndex;
    });
    window.requestAnimationFrame(moveImages);
}

// Variabili per la dimensione dello schermo
var screenWidth = window.screen.width,
    screenHeight = window.screen.height;

// Carica le immagini e avvia l'animazione
loadImages();
window.requestAnimationFrame(moveImages);
