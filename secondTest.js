const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

getWorthyWorkers = (args) => {
    /*
    worth = new Object();
    let i = 0;
    args.forEach(element => {
        if (element.salary > 1000) {
        worth[i] = {
            name: element.name,
            salary:element.salary
        }
        i++;

        console.log(element.name) // Mike \n Linda \n undefined
        return element.name       // undefined но возвращает 27 строка.
    }
});
    for (let i = 0; i < element[i].name; i++)
    console.log(element.name) // element is not defined.
    return args.map(e => e.name).join(', '); // перечисляет все имена из массива объекта переданные в функцию.
    */
   
   /* третья попыт_ка
    return args.map((e) => { if (e.salary > 1000) 
        return e.name}).join(); // ,Mike,Linda
*/
    

    return args.map((e) => {
        if(e.salary > 1000)
        return e.name
    }).filter((val) => val).join();
}

console.log(getWorthyWorkers(workers))