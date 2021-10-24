console.log("Merhaba Kodlama.io")

//JS type safe değildir.
let dolarBugun = 9.30

let dolarDun=9.20

{
    let dolarDun=9.10
}

console.log(dolarDun)

const euroDun = 11.2
 //euroDun = 11 Hata Verir

console.log(euroDun) 

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi",]

console.log("<ul>")
    for(let i=0;i<konutKredileri.length;i++)
    {
        console.log("<li>"+konutKredileri[i]+"</li>")
    }
console.log("</ul>")
{
// 
//     <li>Konut Kredisi</li>
//     <li>Emlak Konut Kredisi</li>
//     <li>Kamu Konut Kredisi</li>
}


console.log(konutKredileri)

//Java Kampı 10.gün ders notu-ödev kısmı
let sayi1 = 10
sayi1 = "Engin Demiroğ"
let student = {id:1, name:"Engin"}
console.log(student)

function save(puan=10,ogrenci) {
    console.log(ogrenci.name + " : " + puan)
    
}
save(undefined,student)

let students = ["Engin Doğru","Halil Kalaycı","Engin Toprak","Betül Bircan"]
console.log(students)

let students2 = [student,{id:2, name:"Yusuf"},"Ankara",{city:"İstanbul"}]
console.log(students2)




