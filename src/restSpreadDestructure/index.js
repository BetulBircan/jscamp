//rest(geriye kalan-lar demek)-bos dizi döndürür dizi elemanı olarak atanır girilen productslar
//params-c#
//varArgs-java
let showProducts =function (id , ...products) {
    console.log(id)
    console.log(products[0])
}
//console.log(typeof showProducts)
//showProducts(10,["Elma","Armut","Karpuz"])

//spread(ayrıştırma)-virgülden itibaren parçalar ayrı sayı gibi yazar(1 2 3 gibi)
let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")


//destructuring
let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations  //destruct etme arraydaki değerleri degiskenlere parcalama
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log([small1])
}
someFunction(populations)

let category = {id:1 , name:"İçecek"}
console.log(category.id)
console.log(["name"])

//objeyi distruct etme
let {id,name} = category
console.log(id)
console.log(name)