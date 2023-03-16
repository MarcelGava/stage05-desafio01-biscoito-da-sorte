//screens
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

//buttons
const cookie = document.querySelector('.fortune-cookie') //vou transformar a imgame em um botão
const newCookie = document.querySelector('.newCookie')

const fortune = [
  'O aprendizado é como o horizonte: não há limites.',
  'Não há que ser forte, há que ser flexível.',
  'Limitações são fronteiras criadas apenas pela nossa mente.',
  'O cão não ladra por valentia e sim por medo.',
  'Procure acender uma vela em vez de amaldiçoar a escuridão.',
  'A palavra é prata, o silêncio é ouro.',
  'Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.',
  'Um pouco de perfume sempre fica nas mãos de quem oferece flores.',
  'O homem só envelhece quando os lamentos substituem seus sonhos.',
  'A persistência realiza o impossível.',
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
]

cookie.addEventListener('click', tryClick)
newCookie.addEventListener('click', reset)
document.addEventListener('keydown', enter)

function tryClick() {
  toggleScreen()
  pickFortune()
}

function reset() {
  toggleScreen()
}

//gerar a sorte
function pickFortune() {
  let allFortune = fortune.length
  let randomNumber = Math.floor(Math.random() * allFortune)
  screen2.querySelector('p').innerText = `${fortune[randomNumber]}`
}

//trocar a tela

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function enter(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    reset()
  }
}
