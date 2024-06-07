// Korwinowe bingo!

const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')

const array = [
  [
    // 1
    'Ja chcę powiedzieć jedą rzecz: ',
    'Trzeba powiedzieć jasno: ',
    'Jak powiedział wybitny krakowianin Stanisław Lem,',
    'Proszę mnie dobrze zrozumieć: ',
    'Ja chciałbym państwu przypomnieć, że ',
    'Niech państwo nie mają złudzeń: ',
    'Powiedzmy to wyraźnie: ',
  ],
  [
    // 2
    'przedstawiciele czerwonej hołoty ',
    ' ci wszyscy(tfu!) geje ',
    'funkcjonariusze reżymowej telewizji',
    'tak zwani ekolodzy ',
    'ci wszyscy (tfu!) demokraci',
    'agenci bezpieki ',
    'feminazistki ',
  ],
  [
    // 3
    'zupełnie bezkarnie ',
    'całkowicie bezczelnie',
    'o poglądach na lewo od komunizmu ',
    'celowo i świadomie ',
    'z premedytacją ',
    'od czasów olrągłego stołu ',
    'w ramach postępu ',
  ],
  [
    // 4
    'nawołują do podniesienia podatków',
    'próbują wyrzucić kierowców z miast',
    'próbują skłócić Polskę z Rosją ',
    'głoszą brednie o globalnym ociepleniu ',
    'zakazują posiadania broni ',
    'nie dopuszczają prawicy do władzy ',
    'uczą dzieci homoseksualizmu ',
  ],
  [
    // 5
    'bo dzięki temu mogą kraść ',
    'bo dostają za to pieniądze ',
    'bo tak uczy się w pańśtwowej szkole ',
    'bo bez tego (tfu!) demokracja nie może istnieć ',
    'bo głupich jest więcej niż mądrych ',
    'bo chcą tworzyć raj na ziemi ',
    'bo chcą niszczyć cywilizację białego czałowieka ',
  ],
  [
    // 6
    'przez kolejne kadencje ',
    'o czym się nie mówi ',
    'i właśnie dla tego Europa umiera',
    'ale przyjdą muzumanie i zrobią porządek ',
    '- tak samo zresztą jak  za Hitlera',
    '- proszę zobaczyć, co się dzieje na zachodzie, jeśli mi państwo nie wierzą '
    ,'co lat temu sto nikomu nie przybyłoby nawet do głowy '
  ],
]

// console.log(array[0])

function Korwin() {
  let lol1 = array[0][Math.floor(Math.random() * array[0].length)]
  let lol2 = array[1][Math.floor(Math.random() * array[1].length)]
  let lol3 = array[2][Math.floor(Math.random() * array[2].length)]
  let lol4 = array[3][Math.floor(Math.random() * array[3].length)]
  let lol5 = array[4][Math.floor(Math.random() * array[4].length)]
  let lol6 = array[5][Math.floor(Math.random() * array[5].length)]

  let x = lol1 + lol2 + lol3 + lol4 + lol5 + lol6

  return (h2.innerHTML = x)
}
