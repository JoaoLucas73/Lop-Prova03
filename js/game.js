const carteiro = document.querySelector(".carteiro");
const doguin = document.querySelector(".doguin");
const score = document.querySelector(".score")
let alreadyJump = false;
let count = 0;

// Verifica que caso o usuário clique na setinha pra cima ou espaço, o carteiro vai pular
document.addEventListener("keydown", (e) => {
    if ((e.code == "ArrowUp") || (e.code == "Space")){
        jump();
    }
});

// Adiciona a classe jump caso o carteiro não tenha e após um tempo limite ela é retirada
function jump(){
    if (!carteiro.classList.contains("jump")) {
        carteiro.classList.add("jump");
        alreadyJump = true;

        setTimeout(() => {
            carteiro.classList.remove("jump");
            alreadyJump = false;
        }, 1100)
    }
}

// Pega a posição do carteiro e do doguin para saber se houve a colisão. Caso sim: Game Over; Caso não: Segue o jogo.
setInterval(() => {
    let carteiroBottom = parseInt(
        window.getComputedStyle(carteiro).getPropertyValue("bottom")
    );
    let doguinLeft = parseInt(
        window.getComputedStyle(doguin).getPropertyValue("left")
    );
    
    if(doguinLeft > 32 && doguinLeft < 64 && carteiroBottom <= 128 && !alreadyJump) {
        alert('Game Over! Seu score foi: ' + count);
        count = 0;
    }

    //incrementa a pontuação conforme o tempo passa
    count++;
    score.innerHTML = "Score: " + count;
}, 100);