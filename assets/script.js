var shooter = document.querySelector('.shooter')
var board = document.querySelector('.board');
window.addEventListener("keydown", (e) => {

    var left = parseInt(window.getComputedStyle(shooter).getPropertyValue("left"))

    if (e.key == "ArrowLeft" && left > 30) {

        shooter.style.left = left - 10 + "px";
        console.log(shooter.style.left)

    }
    else if (e.key == "ArrowRight" && left < 468) {
        shooter.style.left = left + 10 + "px";
        console.log(shooter.style.left)
    }

    if(e.key == "ArrowUp"){

        var bullet = document.createElement("div");
        bullet.classList.add("bullets")
      board.appendChild(bullet);

      var moveBullet = setInterval(() => {
        
var heads = document.getElementsByClassName('head')
for (let i = 0; i< heads.length; i++){
    var head = heads[i];
    var headHit = head.getBoundingClientRect();
    var bulletHit = bullet.getBoundingClientRect();

    if(bulletHit.left >= headHit.left && bulletHit.right <= headHit.right && bulletHit.top <= headHit.top && bulletHit.bottom <= headHit.bottom ){
        head.parentElement.removeChild(head);
    }
}
        var bulletBottom = parseInt(window.getComputedStyle(bullet).getPropertyValue("bottom"));
        bullet.style.bottom = bulletBottom + 3 + "px";
    bullet.style.left = left + "px";
    
        });
    }

  
})

var bloodyAdersh = setInterval(() => {

    var heads = document.createElement('div');
    heads.classList.add("head")

    heads.style.left = Math.floor(Math.random() * 460) + "px";
    board.appendChild(heads)


}, 1800);



var moveAdersh = setInterval(() => {

    var heads = document.getElementsByClassName('head')
    if (heads != undefined) {
        for (let i = 0; i < heads.length; i++) {
            let head = heads[i];
            var headTop = window.getComputedStyle(head).getPropertyValue('top');
            headTop = parseInt(headTop);
            head.style.top = headTop + 10 + "px";
            if(headTop >= 475){
              
                setTimeout(() => {
                    alert("Bloody Adersh Eat You")
                    window.location.href = "index.html";
                }, 1200);
            }
        }
    }
}, 450);