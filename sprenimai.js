console.clear();
console.log('------Uzdavinys1---------')
//1.Mokinys pradėjo spręsti namų darbus, kai elektroninis laikrodis rodė h1 valandų ir min1 minučių, o baigė, kai buvo h2 valandų ir min2 minučių. Parašykite programą, pagal kurią būtų randama, kiek laiko (valandų ir minučių) mokinys sprendė uždavinius. (Laikykite, kad mokinys uždavinius sprendė mažiau kaip parą).

function laikas (h1,m1, h2, m2){
    return [Math.floor((((h2*60)+m2)-((h1*60)+m1))/60), (((h2*60)+m2)-((h1*60)+m1))%60] ;
}
const pradziosLaikas=[9,15]; //[val, min]
const pabaigosLaikas=[18,25]; //[val, min]

console.log (`Mokynis sprende: ${laikas(pradziosLaikas[0], pradziosLaikas[1], pabaigosLaikas[0],pabaigosLaikas[1])[0]} h, ir ${laikas(pradziosLaikas[0], pradziosLaikas[1], pabaigosLaikas[0],pabaigosLaikas[1])[1]} min.`);


//// UZDAVINYS 02 *************************


console.log('\n');
console.log('------Uzdavinys2---------');
//Parašyti programą kuri atspausdintu visus Armstrongo skaičius nuo 100 iki 999. Armstongo skaičiaus pvz ABC = A3+ B3+ C3(visų atskirų skaitmenų pakeltų skaičiaus skaitmenų kiekio laipsniuvsuma.) 

function armstronNbr (n1, n2){   //funkcija, kuri suranda visus Amstrongo skaicius duotame rezyje nuo n1  iki n2
    let numbers = [];  
    for(let i=n1; i<=n2; i++){
        const digits = String(i).split('').map(Number);
        if(digits.reduce((a,b)=>a+(b**digits.length),0)===i){
            numbers.push(i);
        }
    }
    return(numbers);
} 
const rezioPradzia = 100;
const rezioPabaiga = 999;
console.log("Arsmtrongo skaiciai duotame rezyje: " + armstronNbr(rezioPradzia, rezioPabaiga).join(", "));


//// UZDAVINYS 03 *************************

console.log('\n');
console.log('------Uzdavinys3---------');
//Parašykite  funkcija  kuri  paskaičiuotų  atstumą  tarp  dviejų  taškų koordinačių sistemoje. Parametrai 4 perduodami skaičiai x1, y1, x2, y2. @param {number} x1 @param {number} y1 @param {number} x2 @param {number} y2 @example: (0,0) (0,1) => 1 (0,0) (1,0) => 1 (-5,0) (10,-10) => 18.027756377319946 

function distance(x1, y1, x2, y2){
    return Math.sqrt(Math.abs(x1-x2)**2 + Math.abs(y1-y2)**2);
}

console.log(distance(-5,0,10,-10));


//// UZDAVINYS 04 *************************

console.log('\n');
console.log('------Uzdavinys4---------');
//Parašykite programą, kuri suskaičiuotų , kiek duotas skaičius num turi lyginių ir nelyginių skaitmenų 

function evenOdd (n){
    const digits2 = String(Math.abs(n)).split('').map(Number);
    let even =0;
    let odd = 0;
    digits2.forEach(a => a%2===0?even++:odd++);
    return [even, odd];
}

const numberis = -4;
console.log("Pateiktame skaiciuje yra: " + evenOdd(numberis)[0] + ' lyginiai skaitmenys ir: ' + evenOdd(numberis)[1] + ' nelyginiai skaitmenys');

//// UZDAVINYS 05 *************************

console.log('\n');
console.log('------Uzdavinys5---------');
//Žinomi kambario matmenys ilgis ir plotis. Reikia apskaičiuoti, kokią pinigų sumą reiks mokėti už plyteles, skirtas kambario grindims kloti, jei plytelių vieno kvadrato kaina yra 23 eurai. Plytelių reikia pirkti 5 proc. daugiau galimiems nuostoliams padengti. Plytelės supakuotos po 1.5m2 ir parduotuvės darbuotojai nesutinka ardyti pakuočių. Galima pirkti tik pilnas pakuotes. 
const kIlgis=6; //kabario ilgis
const kplotis=7; //kabnario plotis
const kaina= 23; // plyteliu kaina
const paklaida=5; //kiek uzmest proc.
const pak = 1.5; //kiek kvm plyteliu pakuoteje

function kiekKainuos (ilg, plo, kai, pakl, pk){
    return (Math.ceil(((ilg*plo)*(1+(pakl/100)))/pk)*pk)*kai
}

console.log(kiekKainuos(kIlgis, kplotis, kaina, paklaida, pak));

//// UZDAVINYS 06 *************************

console.log('\n');
console.log('------Uzdavinys6---------');
//Sugeneruokit atsitiktinių reikšmių masyvą, masyvo elementų skaičius 30, Masyvo elementų reikšmės nuo 1 iki 10. Tai yra klasės mokinių vidurkiai. Rasti geriausiai besimokantį ir blogiausiai.
const vidurkiai=[];
for (let i=1; i<=30; i++){
    vidurkiai.push((Math.round(((((Math.random() * (10 - 4)) + 4)))*100))/100);
}
console.log(vidurkiai) //visi random vidurkiai 0.01 tikslumu
console.log(Math.min(...vidurkiai), Math.max(...vidurkiai)); //min max masyvo reiksmes

//// UZDAVINYS 07 *************************

console.log('\n');
console.log('------Uzdavinys7---------');
//Pirmos lietuviškos litų monetos išėjo 1925 metais. Tai buvo 5, 2 ir 1 lito vertės sidabrinės monetos. Duotą pinigų sumą n litais pakeiskite nurodytomis monetomis, panaudojant kuo mažiau monetų. Atsakymo galimas pvz: „Norint gauti n sumą litais, mums reikės n1 monetų po 5 lt, n2 monetų po 2 litus ir n3 monetų po 1 litą. Viso monetų N skaičius“.

const suma= 35422444323;
function monetos(suma){
    const m5 = Math.floor(suma/5);
    const m2 = Math.floor((suma-(m5*5))/2);
    const m1 = Math.floor((suma-(m5*5)-(m2*2)));
    return [m5, m2, m1, (m1+m2+m5)];
}

console.log(`Norint gauti ${suma} sumą litais, mums reikės ${monetos(suma)[0]} monetų po 5 lt, ${monetos(suma)[1]} monetų po 2 litus ir ${monetos(suma)[2]} monetų po 1 litą. Viso monetų  skaičius ${monetos(suma)[3]}`);

