;(function(){

    function getUpperCase() {
        var userName = prompt('Введите Ваше имя', 'вася');
            userName[0] = userName.charAt(0).toUpperCase();
        return userName;
    }
    console.log(getUpperCase());

    // var val1 = +prompt ('Введите первое число!', ''),
    //     val2 = +prompt ('Введите второе число!', '');
    // function returnMin(val1,val2) {
    //     if (val1 > val2) {
    //         return val2;
    //     } else {
    //         return val1;
    //     }
    // }
    // console.log(returnMin(val1,val2));
    // alert('Минимальное из двух введеных Вами чисел: ' + returnMin(val1,val2));

    /*do {
        var number = prompt('Введите число больше 100', '0');
    } while (number <= 100 && number !== null);*/

   /* var num1 = prompt('Введите первое число'),
        num2 = prompt('Введите второе число');*/
    /*naturalNumber:
        for (var i = 2; i <= 10; i++) {
            for (var j = 2; j < i; j++) {
                if (i % j === 0) continue naturalNumber;
            }
            alert(i);
            console.log(i);
        }*/



})();
