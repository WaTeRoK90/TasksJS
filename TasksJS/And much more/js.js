// 1
// let m = [1,2,3,4,5]
// for (let i = 0;  i < m.length; i++){
//     console.log(m[i]);
// }

// 2
// let result= 0
// let m = [1,2,3,4,5]
// for (let i = 0;  i < m.length; i++){
//     result = result + m[i];
// }
// console.log(result)

// 3
// let obj ={a: 1, b: 2, c: 3};
// for (let key in obj){
//     console.log(obj[key]);
// }
// for (let key in obj){
//     console.log(key)
// }

// 4
// let obj ={
//     Коля: 200,
//     Вася: 300,
//     Петя: 400
// }
// for (let key in obj){
//     console.log(`${key} - зарплата ${obj[key]} рублей`);
// }

// 5
// let m = [2,5,9,15,0,4]
// for (let i = 0;  i < m.length; i++){
//     if(m[i]>3 && m[i]<10){
//         console.log(m[i]);
//     }else{
//         continue
//     }
// }

// 6
// let m = [1,-2,3,4,-5];
// let sum = 0;
// for (let i = 0;  i < m.length; i++){
//     if(m[i]>0){
//         sum +=m[i];
//     }
// }
// console.log(sum);

// 7
// let m = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0;  i < m.length; i++){
//     if(m[i]==4){
//         console.log("Есть!");
//         break
//     }
// }

// 8
// let m = [10, 20, 30, 50, 235, 3000]
// for (let i = 0;  i < m.length; i++){
//     if(String(m[i])[0] == "1" || String(m[i])[0] == "2" || String(m[i])[0] == "5"){
//         console.log(m[i])
//     }
// }

// 9
// let m = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let str = `-${m[0]}`
// for (let i = 0;  i < m.length; i++){
//     if(m[i] == m[0]){
//         continue
//     }
//     str +=`-${m[i]}`
// }
// console.log(str)

// 10
// let m = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];
// for (let i = 0;  i < m.length; i++){
//     if(m[i] == m[5] || m[i] == m[6]){
//         console.log(m[i].bold());
//         continue
//     }
//     console.log(m[i]);
// }

// 11
// let m = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];
// let day = "Пятница";
// for (let i = 0;  i < m.length; i++){
//     if(m[i] == day){
//         console.log(m[i].italics());
//         continue
//     }
//     console.log(m[i]);
// }

// 12
// let n = 1000;
// let num = 0;
// while(n > 50){
//     n = n/2;
//     console.log(n);
//     num++;
// }
// console.log(num);