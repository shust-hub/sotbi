import '../scss/index.scss'
import 'bootstrap'

$.getJSON('https://jsonplaceholder.typicode.com/users', function(data) {
    var arr = []; 
    // Генерация двух рандомных id
    var rnd1 = Math.floor( Math.random() * (11));
    var rnd2 = Math.floor( Math.random() * (11));
    $('.rnd1').append(rnd1);
    $('.rnd2').append(rnd2);

    $.each(data,function(i,val) {
        // Заполнение нового массива
        if (i != rnd1 &&  i != rnd2){ // Для исключения двух рандомных пользователей
           arr.push(data[i].name + " " + data[i].username); 
        }
    });

    console.log(arr)
    var myJsonString = JSON.stringify(arr); // новый json
    $('.users').append(myJsonString);

   });