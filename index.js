var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(name){
    kittens.pop(name);
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}
function appendKitten(name){
  var appendKit = kittens;
  return [... appendKit, name];
}
function prependKitten(name){
 var prependKit = kittens;
 return [name...prependKitten];
}
function removeLastKitten(){
var removeLastK = kittens;
console.log("whats kittens.lenght", kittens.lenght);
return removeLastK.slice(0,kittens.lenght-1);
}
function removeFirstKitten(){
  var removeFirstK = kittens;
  return removeFirstK.slice(1)
}
