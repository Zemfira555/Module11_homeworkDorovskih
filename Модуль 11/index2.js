/*Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит, простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.*/

function getNumber(num) {
        if(num > 1000) {
        console.log('Число больше 1000');
    }
    else if(num===0 || num===1) {
        console.log('Число не является простыи или составным')
    }
    else {
        let primeNumber = true;

        for(let i = 2; i < num; i++) {
            if (num % i ===0) {
                primeNumber = false;
                break;
            }
        }
        console.log(primeNumber ? 'Это простое число.' : 'Это составное число.')

    }

}
getNumber(5)