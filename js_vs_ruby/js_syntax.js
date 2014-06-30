//this is a comment

var myJSNameArray =['Lich', 'da', 'Grey'];

function multiply(x,y){
  return (x * y)
}

function greet(joyFactor){
  if (joyFactor > 10){
    var note = 'I am soo happy';
  } else if (joyFactor > 0){
    var note = 'I am happy';
  } else {
    var note = 'I am ehh';
  }
  return note;
}

var day = "Tuesday"
switch(day) {
  case 'Monday':
    console.log('Happy coffee');
    break;
  case 'Tuesday':
    console,log('How was that coffee');
    break;
  case 'Friday':
    console.log('I am in love');
    break;
  default:
  console.log('this day does not count');

}

myNameArray = ["Lichard", "de", "Grey"]

for (nameIndex in myName myNameArray){
  console.log(myNameArray[nameIndex] + "...is part of the name");
}

for (var idx = 0; idx < myNameArray.length; ++i ){
  console.log(myNameArray[indx] + '...is part of the name');
}
myNameArray.forEach(function(nameItself, indx){
  console.log( myNameArray[index] = "...is part of the name");
  console.log( nameItself +' ... is part of the name');
})

var myObjet= {name: 'Lichard', age: 3, hobby: "Learning Javascript"};
myObject['name'];
myObject.name;
