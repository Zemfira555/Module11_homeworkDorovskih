/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, 
но и, например, знаки, null и так далее.
с использованием функции*/


const arrow = [1,2,3,4,5,6,7,0,0,"-%",'Земфира',null]
console.log(`массив`)

function arrInfo(arr) {

    result=0; // четные
    result1=0;// нулевые
    result2=0;// нечетные
    
    for (let i=0; i < arr.length; i++)
    {
    if(arr[i] % 2 === 0 && arr[i] !== 0) // четные
    // if (arr[i]) result+=1
    if (Number.isFinite(arr[i])) result+=1
    
    if (arr[i]% 2 !== 0 && arr[i] !== 0) // нечетные
    if (Number.isFinite(arr[i])) result2+=1
    
    if (arr[i] === 0) // нулевые
    result1+=1
    
    // вывод элементов массива
    // console.log(Boolean(arr[i]))
    console.log(arr[i])
    }
    console.log(`РАСЧЕТ по МАССИВУ`)
    console.log('размер:', arr.length)
    console.log('четн:', result)
    console.log('нечетн:', result2)
    console.log('нулевых:', result1)
    
    }
    
    arrInfo(arrow)
