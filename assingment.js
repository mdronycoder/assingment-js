// 1st Way feetToMile

function feetToMile(feet){
    var mile = feet *  0.00018939;
    return mile;
}
var result = feetToMile(3000);
console.log(result);

// 2nd way feetToMile

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
