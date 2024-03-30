/*Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа. Используйте setInterval.*/

function outNum(from, to) {
    let curr = from;
  
    let timerId = setInterval(function() {
      console.log(curr);
      if (curr == to) {
        clearInterval(timerId);
		console.log('Рассчёт окончен');
      }
      curr++;
    }, 1000);
  }
  
outNum(5, 15);