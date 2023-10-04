// 1 - 6
// let a = 1;
// if ( a == 0){ //  или >=; <=; <; >; !=
//     document.write("Верно");
// } else {
//     document.write("Неверно");  
// }

// 7
// let a = "test";
// if ( a == "test"){
//      document.write("Верно");
// } else {
//      document.write("Неверно");  
// }

// 8
// let a = 1;
// if ( a === '1'){
//     document.write("Верно");
// } else {
//      document.write("Неверно");  
// }

// 9
// let test = true;
// if (test == true){
//     document.write("Верно");
// } else {
//     document.write("Не верно");
// }

// 10
// let test = true;
// if (test != true){
//     document.write("Верно");
// } else {
//     document.write("Не верно");
// }

// 11
// let a = 2;
// if (a > 0 && test < 5){
//     document.write("Верно");
// } else {
//      document.write("Не верно");
// }

// 12
// let a = 2;
// if (a == 0 || a == 2){
//     a = a+7;
//     document.write(a);
// } else {
//     a = a/10;
//      document.write(a);
// }

// 13
// let a = 1;
// let b = 3;
// if (a >= 1 && b <= 3){
//     document.write(a+b);
// } else {
//      document.write(a-b);
// }

// 14
// let a = 2;
// let b = 7;
// if (a > 2 && a < 11 || b >= 6 && b < 14){
//     document.write("Верно");
// } else {
//      document.write("Не верно");
// }

// 15
// let num = prompt()
// switch (num){
//     case num = "1":
//         document.write("Зима");
//         break;

//     case num = "2":
//         document.write("Весна");
//         break;
    
//     case num = "3":
//         document.write("Лето");
//         break;

//     case num = "4":
//         document.write("Осень");
//         break;
    
// }

// 16
// let a = 1;
// if (a >= 1 && a <= 10){
//     document.write("Первая");
// } else if (a >= 11 && a <= 20) {
//     document.write("Вторая");
// } else if (a >= 21 && a <= 31) {
//     document.write("Третья");
// } else{
//     document.write("Error");
// }

// 17
// let month =  Number(prompt());
// if (month >= 3 && month <= 5){
//     document.write("Весна");
// } else if (month >= 6 && month <= 8) {
//     document.write("Лето");
// } else if (month >= 9 && month <= 11) {
//     document.write("Осень");
// } else if (month == 1 || month == 2 || month == 12 ) {
//     document.write("Зима");
// } else{
//     document.write("Error");
// }

// 18
// let a = prompt();
// if (a[0] ="a"){
//     document.write("Да");
// } else {
//     document.write("Нет");
// }

// 19
// let a = prompt();
// if (a[0] == "1" || a[0] == "2" || a[0] == "3" ){
//     document.write("Да");
// } else {
//     document.write("Нет");
// }

// 20
// let a = [];
// let b = prompt();
// let nb = +b[0];
// let nc = +b[1];
// let nd = +b[2];
// a.push(nb,nc,nd);
// document.write(a[0]+a[1]+a[2]);

// 21
// let a = [];
// let b = prompt();
// let nb = +b[0];
// let nc = +b[1];
// let nd = +b[2];
// let ne = +b[3];
// let nf = +b[4];
// let ng = +b[5];
// a.push(nb,nc,nd,ne,nf,ng);
// if (a[0]+a[1]+a[2]==a[3]+a[4]+a[5]){
//     document.write("Да");
// }else{
//     document.write("Нет");
// }

// 22
// let str1 = "Hello, ";
// let str2 = "World!";
// document.write(str1+str2);

// 23
// let a = prompt("Ваше имя");
// alert(`Ваше имя ${a}`);

// 24
// let a = Number(prompt("Число"));
// alert(a*a);