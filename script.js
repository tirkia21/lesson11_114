// 1

// let numbers = [5, 25, 89, 120, 36];

// numbers.push('javascript', 'python');
// numbers.unshift('html','css');
// numbers.shift()
// numbers.pop()
// console.log(numbers);

// 2
// let fruit = ['orange', 'banana', 'pear'];


// fruit.push('apples','pineapple');
// fruit.unshift('watermelon');
// fruit.splice(1, 0, 'mango');
// fruit.pop();
// fruit.shift();
// console.log(fruit);
// // 3

// let user = {
//     name: 'levani',
//     age:  30,
//     gender: 'male',
// }

// Object.keys(user).forEach(function(itam){
//     console.log(itam);
// })

// 4
// let user = {
//     name: 'levani',
//     age:  30,
//     gender: 'male',
// }

// Object.values(user).forEach(function(itam){
//     console.log(itam);
// })

// 5

// let array = [12, 25, 3, 6, 8, 14, 7, 23];

// let newarray = array.map(function(itam){
//     return itam % 3;
// })

// console.log(newarray);

// // 6 
// let array =[12, 25, 3, 6, 8, 14, 7, 23];

// let newarray = array.map(itam => Math.pow(itam, 3))
// console.log(newarray);

// // 7

// let array = ["hello", 125, "javscript", "html", 43, "css", "scss", "boostrap", 88, 59, "python"];

// let newarra = array.filter(function(itam){
//     return itam;
// })


// console.log(newarra);

let newdiv = document.createElement('div');
newdiv.setAttribute('class', 'wraper');
newdiv.textContent = 'levani';
newdiv.style.color = 'red';
newdiv.style.background = 'green';

document.getElementById('test').appendChild(newdiv)



document.querySelectorAll('.newclass').forEach(function(itam){
    let a = document.createElement('a');
    a.setAttribute('class','newwraper');
    a.setAttribute('target', '_blank');
    a.setAttribute('href', 'https://google.com');
    a.textContent = 'hello';
    a.style.color = 'yellow';

    itam.appendChild(a);

})



