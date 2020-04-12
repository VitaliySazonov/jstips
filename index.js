// 1 Тернарка
// const num = 42;
// let result;
// if (num > 20) {
//   result = 'More'
// } else {
//   result = 'Less';
// }
// const result = num > 20 ? 'More' : 'Less';
// console.log(result);

// 2
// let variable = 'variable'; // undefined
// let variable2;
// if (variable) {
//   variable2 = variable;
// } else {
//   variable2 = 'some value';
// }
// variable2 = variable || 'some value';
// console.log(variable2);

// 3
// let x
// let y
// let z = 41;
// let x, y, z = 42;

// 4

// let isSame = true;
// if (isSame === true) {
//
// }
// if (isSame) {
//
// }
// if (!isSame) {
//
// }

// 5
// const names = ['Igor', 'Elena', 'Olga'];
// for (let i = 0; i < names.length; i++) {
//   // name[i]
// }
// for(let name of names) {
//   console.log(name)
// }
// for (let index in names) {
//   console.log(index)
// }
// function logArrayItems(el, index, array) {
//   console.log(`names[${index}] = ${el}`)
// }
// names.forEach(logArrayItems);

// 6
// let port;
// if(process.env.PORT) {
//   port = process.env.PORT;
// } else {
//   port = 4200;
// }

// const port = process.env.PORT ||4200;
// console.log(port);

// 7
// for (let i=0; i<10000; i++) {
//
// }
// for (let i =0; i < 10e6; i++) {
//
// }
// console.log(10_000_000);

// 8

// const a = 1, b =2;
// const myObj = {a, b};
// console.log(myObj);

// 9
// setTimeout(() => {
//   console.log('Afret 2 sec')
// }, 2000);
//
// function tripple (num) {
//   return num * 3;
// }

// setTimeout(() => console.log('After 2 sec'), 2000);
// const tripple = num => num * 3;
// let sad = tripple(2);
// console.log(sad);

// 10
// function rgb (r, g, b) {
//   if (r === undefined) {
//     r = 0;
//   }
//   if (g === undefined) {
//     g = 255
//   }
//   return `rgb(${r}, ${g}, ${b})`
// }
//
// const rgb = (r = 0, g = 255, b) => `rgb(${r}, ${g}, ${b})`;

// 11
// function createUrl (base, domain) {
//   return 'https://' +
//     base +
//     '.' +
//     domain;
// }
//
// function createUrl (base, domain) {
//   return `https://${base}.${domain}`
// }
// 12
// const alert = window.alert;
// const confirm = window.confirm;
// const prompt = window.prompt;
// const {alert, prompt, confirm} = window;
// console.log({alert, prompt, confirm});

// 13
// const arr = [1, 2, 3];
// const nums = [4, 5, 6, 2, 2, 2, 2, ...new Set(arr)];
// console.log(...new Set(nums));

// 14
// console.log(Math.floor(9.7) === 9); // ~~
// console.log(~~9.7 === 9);

// 15
// console.log(Math.pow(2, 3,));
// console.log(Math.pow(2, 4,));
// console.log(Math.pow(4, 3,));
// console.log(2 ** 3);
// console.log(2 ** 4);
// console.log(4 ** 3);

// 16
// const int = +'42'; // + плючик конвертирует строчку в число
// const float = +'42.42';
// console.log(typeof int, typeof float); // и так int и float - сейчас числа

// 17
// if ([1, 2, 3, 4].indexOf(3) > -1) console.log(true)
// if (~[1, 2, 3, 4].indexOf(2)) console.log(true); // founded
// if (!~[1, 2, 3, 4].indexOf(5)) console.log(true); // not founded
// if ([1, 2, 3, 4].includes(3)) console.log(true);

// 18
const car = {
  model: 'Ford',
  year: 2019,
  color: 'red'
};
console.log(Object.entries(car)); // [ [ 'model', 'Ford' ], [ 'year', 2019 ], [ 'color', 'red' ] ]
console.log(Object.values(car)); // [ 'Ford', 2019, 'red' ]
console.log(Object.keys(car)); // [ 'model', 'year', 'color' ]


