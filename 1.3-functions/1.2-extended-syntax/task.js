

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    function getSolutions(a, b, c) {
        var d = b * b - 4 * a * c;
        var x1, x2;
    
        if (d === 0) {
            x1 = -b / (2 * a);
            return {
                roots: [x1],
                D: d
            }
        } else if (d > 0) {
            x1 = (-b + Math.sqrt(d)) / (2 * a);
            x2 = (-b - Math.sqrt(d)) / (2 * a);
            return {
                roots: [x1, x2],
                D: d
            }
        }
    
        return {D: d};
    }
    
    function showSolutionsMessage(a, b, c) {
        var result = getSolutions(a, b, c);
        console.log("Вычисляем корни квадратного уравнения " + a + "x^2" + " + " + b + "x" + " + " + c);
        console.log("Значение дискриминанта: " + result.D);
        
        if (result.roots === undefined) {
            console.log("Уравнение не имеет вещественных корней");
        } else if (result.roots.length === 1) {
            console.log("Уравнение имеет один корень X1 = " + result.roots[0]);
        } else {
            console.log("Уравнение имеет два корня. X1 = " + result.roots[0] + ", " + "X2 = " + result.roots[1]);
        }
    }
    
    showSolutionsMessage(1, 2, -3);
    showSolutionsMessage(-4, 28, -49);
    showSolutionsMessage(5, 6, 2);
    return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    function average(arr) {
        if (arr === undefined || arr.length === undefined) {
            return 0;
        }
    
        var sum = 0;
    
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
    
        return sum / arr.length;
    }
    
    function getAverageScore(data) {
        var result = {};
        var sum = 0;
        var totalAvg = 0;
        var count = 0;
    
        for (var key in data) {
            var avg = average(data[key]);
            result[key] = avg;
            sum += avg;
            count++;
        }
    
        if (count > 0) {
            totalAvg = sum / count;
        }
        result["average"] = totalAvg;
        return result;
    }
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    function getSound(animal) {
        if (animal === undefined) {
            return null;
        }
        
        var sound = animal.sound;
        return sound;
    }
    console.log(result)
    return result;
}