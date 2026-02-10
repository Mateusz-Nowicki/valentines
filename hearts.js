function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-bg');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 30 + 10 + "px";
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 8000);
}
setInterval(createHeart, 200);