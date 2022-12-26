let str = '';
let str2 = '';
let str3 = '';
function passing(elem) {
    if(opr == '') {
    str += parseInt(elem);
    document.getElementById("show").innerHTML = str
    }
    else {
        str2 += parseInt(elem)
        str3 = str + str2;
        document.getElementById("show").innerHTML = str3
    }
}



let opr = ''
function passing2(op) {
    opr = op;
    str += op;
    document.getElementById("show").innerHTML = str;
}
let Sum;
function result() {
    
    switch(opr) {
        case '+':
            Sum = parseFloat(str) + parseFloat(str2);
            break
        case '-':
            Sum = parseFloat(str) - parseFloat(str2);
            break
        case '*':
            Sum = parseFloat(str) * parseFloat(str2);
            break
        case '/':
            Sum = parseFloat(str) / parseFloat(str2);
            break
        case '%':
            Sum = parseFloat(str) % parseFloat(str2);
            break
        default:
            return "You entered wrong operator";
        
    }
    document.getElementById('show').innerHTML = " = "+ parseFloat(Sum).toPrecision();
    
}

function GoBack() {
    str = '';
    str2 = '';
    Sum = '';
    opr = '';
    document.getElementById("show").innerHTML = str + str2
}


