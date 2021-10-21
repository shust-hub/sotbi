import '../scss/index.scss'
import 'bootstrap'

// Генерация двух рандомных id
const range = 9; 
const count = 2;      

let m = {};
let a = [];
for (let i = 0; i < count; ++i) {
  let r = Math.floor(Math.random() * (range - i));
  a.push(((r in m) ? m[r] : r) + 1);
  let l = range - i - 1;
  m[r] = (l in m) ? m[l] : l;
}


$.getJSON('https://jsonplaceholder.typicode.com/users', function(data) {
    var arr = []; 
    // Генерация двух рандомных id
    var rnd1 = Math.floor( Math.random() * (11));
    var rnd2 = Math.floor( Math.random() * (11));

    $('.rnd1').append(a[0]);
    $('.rnd2').append(a[1]);

    $.each(data,function(i,val) {
        // Заполнение нового массива
        if (i != a[0] &&  i != a[1]){ // Для исключения двух рандомных пользователей
           arr.push(data[i].name + " " + data[i].username); 
        }
    });

    console.log(arr)
    var myJsonString = JSON.stringify(arr); // новый json
    $('.users').append(myJsonString);

   });