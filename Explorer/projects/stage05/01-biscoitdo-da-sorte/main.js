const fortuneCookie = document.getElementById('fortune-cookie')
const openedCookie = document.getElementById('opened-cookie')
const luckyCard = document.getElementById('lucky-card')
const title2 = document.getElementById('top1')
const title1 = document.getElementById('top2')
const btn = document.getElementById('btn')

/* 
    
    [x] Adicinar evento MOUSEENTER & MOUSELEAVE no biscoito
    [x] Adicionar evento CLICK no biscoito
    [x] Adiconar evento CLICK no botão
    [x] Adicionar evento na mensagem
    [x] Criar uma estrutura de lista com mensagens da sorte
    
    [x] Sumir com o biscoito
    [x] Aparecer com biscoito da sorte
    [x] Aparecer mensagem da sorte
    [x] Aparecer com botão 

    Neste desafio você deverá criar um jogo chamado Biscoito da Sorte, no qual o usuário, a partir de um clique ou enter, abre um biscoito com a sua sorte do dia. Você aplicará o que aprendeu sobre vários temas, entre eles:
    
        ✅ Estrutura de dados HTML  
        ✅ Animações com CSS 
        ✅ Funções no Javascript 
        ✅ Manipulação da DOM 
        ✅ Funções *callback* 
        ✅ Biblioteca JS Math() 
        ✅ Arrays 

*/

fortuneCookie.addEventListener('mouseenter', startEventCokie)
fortuneCookie.addEventListener('mouseleave', endEvent)
fortuneCookie.addEventListener('click', handleClick__cookie)
btn.addEventListener('click', handleClick__button)

function handleClick__cookie() {
    randomLuckyMessage()
    startEventPrhase()
    handClicks()
}

function handleClick__button() {
    handClicks()
}

function handClicks() {
    toggle(fortuneCookie);
    toggle(openedCookie);
    toggle(luckyCard);
    toggle(title1);
    toggle(title2);
    toggle(btn);
}

function startEventCokie() {
    fortuneCookie.classList.add('animate__shakeX', 'animate__infinite')
}

function startEventPrhase() {
    luckyCard.classList.add('animate__fadeInUp')
}

function endEvent() {
    fortuneCookie.classList.remove('animate__shakeX', 'animate__infinite')
}

function toggle(element) {
    element.classList.toggle('hide')
}

function randomLuckyMessage() {
    let randomNum = Math.round(Math.random() * 3)
    const luckyPhrase = document.getElementById('lucky-phrase')

    const mensage =
        [
            'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
            'Procure acender uma vela em vez de amaldiçoar a escuridão.',
            'O desejo muda de objeto o tempo todo. Pena de quem é vaso. Sorte de quem é terra.',
            'O destino não é uma questão de sorte, é uma questão de escolha. Não é algo a se    esperar, é algo a se conquistar.'
        ]

    luckyPhrase.innerHTML = mensage[randomNum]

}