;(function () {
    'use strict';

    // 0
   /* var a = +prompt ('Введите первое число'),
     b = +prompt ('Введите второе число'),
     c = a + b;
     alert ('Сумма чисел равна: ' + c);*/

    // 1
   /* prompt ('Если хотите сыграть в кости, нажмите \"ОК\"');
     var a = (Math.floor(Math.random() * 6) + 1 ),
     b = (Math.floor(Math.random() * 6) + 1 );
     alert ('Ваш результат: ' + (a+b));*/

    // 2
    /*var answer = prompt('Орел или Решка?'),
        a = Math.round(Math.random());
     if ( (answer === 'орел' || answer === 'Орел') && (a === 1) ) {
         alert ('Вам повезло, выпал ОРЕЛ!!!')
     } else if( (answer === 'орел' || answer === 'Орел') && (a === 0) ) {
         alert ('Вам не повезло, выпала РЕШКА!!!')
     }
     if ( (answer === 'решка' || answer === 'Решка') && (a === 0) ) {
         alert('Вам повезло, выпала РЕШКА!!!')
     } else if ( (answer === 'решка' || answer === 'Решка') && (a === 1) ) {
         alert('Вам не повезло, выпал ОРЕЛ!!!')
     }*/

    // 3
   /* var a = +prompt('Введите, пожалуйста, любое число'),
        b = Math.ceil(Math.random() * a);
    alert ('Случайное число от 1 до того, что Вы ввели равно: ' + b);*/

    // 4
   /*var a = +prompt('Введите первое число'),
        b = +prompt('Введите второе число'),
        с = Math.floor(Math.random() * ((b-a)+1) + a);
    alert ('Случайное число между введеными Вами числами равно: ' + с);*/

    // 5
    /*var answer = prompt('Каково «официальное» название JavaScript?'),
        result;
    result = (answer == 'ECMAScript') ? 'Верно!' : 'Не знаете?\r\n\'ECMAScript\'!';
    alert (result);*/

    // 6
    /*var a = +prompt('Введите первую цифру'),
        b = +prompt('Введите вторую цифру'),
        result;
    result = (a+b < 4) ? 'Мало' : 'Много';
    alert (result);*/

    // 7
    var login = prompt ('Кто пришел? Введите, пожалуйста, ЛОГИН');
    if (login === 'Админ') {
        var password = prompt ('Введите, пожалуста, ПАРОЛЬ');
        if ( password === 'Черный Властелин') {
            alert ('Добро пожаловать!')
        } else if (password === null ) {
            alert ('Вход отменен!')
        } else {
            alert ('Пароль не верен!')
        }
    } else  if ( login === null) {
        alert ('Вход отменен!')
    } else  {
        alert ('Я Вас не знаю!')
    }

})();