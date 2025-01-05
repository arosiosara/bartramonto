var container = document.getElementById("parallax-container"),
    waveSrc = [
        "gallery/IMG_3036.JPG", 
        "gallery/IMG_3037.JPG", 
        "gallery/IMG_3038.JPG", 
        "gallery/IMG_3039.JPG", 
        "gallery/IMG_3040.JPG",
        "gallery/IMG_3041.JPG",
        "gallery/PHOTO-2024-12-20-12-24-50_1.jpg",
        "gallery/PHOTO-2024-12-20-12-24-52.jpg",
        "gallery/PHOTO-2024-12-20-12-24-50_2.jpg",
        "gallery/PHOTO-2024-12-20-12-24-51.jpg",
        "gallery/PHOTO-2024-12-20-12-24-50.jpg",
        "gallery/PHOTO-2024-12-20-12-24-51_1.jpg",
        "gallery/PHOTO-2024-12-20-12-24-51_2.jpg",
        "gallery/PHOTO-2024-12-20-12-24-52_1.jpg",
        "gallery/PHOTO-2024-12-20-12-24-52_2.jpg",
        "gallery/PHOTO-2024-12-20-12-24-52_4.jpg",
        "gallery/PHOTO-2024-12-20-12-24-52_5.jpg",
        "gallery/PHOTO-2024-12-20-12-24-53_1.jpg",
        "gallery/PHOTO-2024-12-20-12-24-53_2.jpg",
        "gallery/PHOTO-2024-12-20-12-24-53_3.jpg",
        "gallery/PHOTO-2024-12-20-12-24-53_4.jpg",
        "gallery/PHOTO-2024-12-20-12-24-53_5.jpg",
        "gallery/PHOTO-2024-12-20-12-24-53_6.jpg",
        "gallery/PHOTO-2024-12-20-12-24-53_7.jpg",
        "gallery/312058042_213351674365415_2713566604740059460_n.jpg",
        "gallery/313973827_214640407569875_4252436192998173320_n.jpg",
        "gallery/326658667_1815491825493398_4286797061985509358_n.jpg",
        "gallery/330139698_950595329291895_604641042196881560_n.jpg",
        "gallery/338832830_945377980149553_500594941409478912_n.jpg",
        "gallery/346984686_1865073743862489_7664019188791890299_n.jpg",
        "gallery/352492988_291660783201170_7926274925847081121_n.jpg",
        "gallery/353019731_299113752455873_6449413513404534143_n.jpg",
        "gallery/357491355_302790968754818_7032354867281667084_n.jpg",
        "gallery/364017347_317549757278939_2574365828359585718_n.jpg",
        "gallery/365660892_322429426790972_8536516855519090661_n.jpg",
        "gallery/365749259_322940410073207_2966200712962390819_n.jpg",
        "gallery/366377223_324435649923683_8031816420529912950_n.jpg",
        "gallery/370558885_331324069234841_3649465921403061978_n.jpg",
        "gallery/371008124_333250745708840_2798456793308296632_n.jpg",
        "gallery/371849634_334328422267739_7271130164333994670_n.jpg",
        "gallery/371860306_332773322423249_7811780906337858657_n.jpg",
        "gallery/375066466_336735235360391_6113872641090521198_n.jpg",
        "gallery/375218494_337690951931486_3222155849637425657_n.jpg",
        "gallery/376298792_340356334998281_3059481137051255472_n.jpg",
        "gallery/377862767_341370248230223_4334489845693757631_n.jpg",
        "gallery/380484176_344196287947619_8008709793196972391_n.jpg",
        "gallery/381044240_345301757837072_5363555277717700897_n.jpg",
        "gallery/384340467_349018997465348_2718721413017320833_n.jpg",
        "gallery/386229691_351470587220189_2143015782207717288_n.jpg",
        "gallery/386595673_352368093797105_1161629253680891275_n.jpg",
        "gallery/387759478_355043306862917_819838221495457044_n.jpg",
        "gallery/PHOTO-2024-12-20-12-24-54_1.jpg",
        "gallery/PHOTO-2024-12-20-12-24-54_2.jpg",
        "gallery/PHOTO-2024-12-20-12-24-54_3.jpg",
        "gallery/PHOTO-2024-12-20-12-24-54_4.jpg",
        "gallery/PHOTO-2024-12-20-12-24-54.jpg",
        "gallery/PHOTO-2024-12-20-12-27-44.jpg",
        "gallery/PHOTO-2024-12-20-12-27-45_4.jpg",
        "gallery/PHOTO-2024-12-20-12-27-45_5.jpg",
        "gallery/PHOTO-2024-12-20-12-27-45_6.jpg",
        "gallery/PHOTO-2024-12-20-12-27-45_7.jpg",
        "gallery/PHOTO-2024-12-20-12-27-45_8.jpg",
        "gallery/PHOTO-2024-12-20-12-27-45_9.jpg",
        "gallery/PHOTO-2024-12-20-12-34-55_1.jpg",
        "gallery/PHOTO-2024-12-20-12-34-55_2.jpg",
        "gallery/PHOTO-2024-12-20-12-34-55.jpg",
        "gallery/PHOTO-2024-12-20-12-37-36_1.jpg",
        "gallery/PHOTO-2024-12-20-12-37-36.jpg",
        "gallery/PHOTO-2024-12-20-12-37-37_2.jpg",
        "gallery/PHOTO-2024-12-20-12-37-37_3.jpg",
        "gallery/PHOTO-2024-12-20-12-37-37.jpg",
        "gallery/PHOTO-2024-12-20-12-37-38_1.jpg",
        "gallery/PHOTO-2024-12-20-12-37-38_2.jpg",
        "gallery/PHOTO-2024-12-20-12-37-38_4.jpg",
        "gallery/PHOTO-2024-12-20-12-37-38_5.jpg",
        "gallery/PHOTO-2024-12-20-12-37-38_6.jpg",
        "gallery/PHOTO-2024-12-20-12-37-38_7.jpg",
        "gallery/PHOTO-2024-12-20-12-37-39_4.jpg",
        "gallery/PHOTO-2024-12-20-12-37-39_5.jpg",
        "gallery/PHOTO-2024-12-20-12-37-39_7.jpg",
        "gallery/PHOTO-2024-12-20-12-37-39.jpg",
        "gallery/PHOTO-2024-12-20-12-38-24_2.jpg"
   
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
        image.yPlane = image.yPlane - 3;
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
