// How to compare two json have the same properties without order?
var obj1 = {"name":"person 1","age":"5"};
var obj2 = {"age": "5", "name":"person 1"};
if (obj1===obj2){
    console.log("Same");
} else{
    console.log("Not Same")
}
