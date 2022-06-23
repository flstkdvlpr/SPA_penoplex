// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(i) === Number){
            data[i] = i*2; 
        } else {
            data[i] = i + '- done';
        }
    }
    
    // Не трогаем
    return data;
}


console.log(secondTask());