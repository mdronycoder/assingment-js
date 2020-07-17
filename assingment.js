//feetToMile 

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(3000);
console.log(result);


//  WoodCalculator assingment

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1
    var tableCount =  table * 3
    var bedCount =  bed * 5
    totalCount =  chairCount + tableCount + bedCount
    return totalCount
}
var result = woodCalculator(4, 6, 4)

console.log ( result)





//  brickCalculator assingment
function brickCalculator(calculate){
    const oneFeet           = 1000;
    const firstTenFloors    = 15;
    const secondTenFloors   = 12;
    const overTwenty        = 10;
    if(calculate <= 10){
        var multiply = calculate * firstTenFloors;
        var result = multiply  * oneFeet;
        return result;
    }else if(calculate <=20){
        var subtract = calculate - 10;
        var multiply = subtract * secondTenFloors;
        var firstTen = 10 * 15;
        var total    = multiply + firstTen;
        var result = total * oneFeet;
        return result;
    }else if(calculate > 20){
        var subtract = calculate - 20;
        var multiply = subtract * overTwenty;
        var firstTen = 10*15;
        var secondTen = 10*12;
        var total = multiply + firstTen + secondTen;
        var result = total  *oneFeet;
        return result;
    }
}
console.log(brickCalculator(17));



//  tinyFriend assingment

function tinyFriend(numbers){
    var tiny = numbers[0];  
    for(var i = 0; i < numbers.length; i++){
        var fList = numbers[i];
        if( fList.length < tiny.length){
            tiny = fList;
        }
    }  
    return tiny;
}

var friendsList = ['Rony', 'Hasan', 'Mahbub', 'abdullah' ]
console.log(tinyFriend(friendsList));
