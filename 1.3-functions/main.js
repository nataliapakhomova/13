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

