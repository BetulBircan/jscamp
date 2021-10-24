class Customer  //sınıf tanımlama
{
    constructor(id,customerNumber) //sınıfa değişken atama
    {
        this.id = id                            //customer.customerNumber diyebilmek icin
        this.customerNumber = customerNumber    //this ifadesini kullandık. 
    }
}
let customer = new Customer(1,"12345")   //instance a yapılan prototyping(objeye-nesneye)
//prototyping-Bir nesneye başka bir özellik eklemiş oluyoruz.
customer.name = "Murat KurtBoğan"
console.log(customer.name) 

Customer.bisey ="Birşey"    //class a yapılan prototyping
console.log(Customer.bisey)

console.log(customer.customerNumber) 

class IndividualCustomer extends Customer  //ana müşterideki datalar
{  
    constructor(firstName,id,customerNumber)
    {
        super(id,customerNumber)  //Customer sınıfındaki bilgiler
        this.firstName = firstName //sınıftaki değişkene global ulaşabilmek için
    }   
}
class CorparateCustomer extends Customer
{
    constructor(companyName,id,customerNumber)
    {
        super(id,customerNumber)
        this.companyName = companyName
    }
}

//map-foreach gibi döngüde döner dizi ile.
let products = 
[
    {id:1, name:"Acer Laptop", unitPrice:15000},
    {id:2, name:"Asus Laptop", unitPrice:16000},
    {id:3, name:"HP Laptop", unitPrice:13000},
    {id:4, name:"Dell Laptop", unitPrice:12000},
    {id:5, name:"Casper Laptop", unitPrice:17000}

]

console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}</li>`)) //products takma adı
console.log("</ul>")

//birden fazla satır olduğu zaman {}içerisine yazılır.
// products.map(product=>
//     {
//         console.log(product)
//         console.log(`<li>${product.name}</li>`)
//     }
//     )

//filter
let filteredProducts = products.filter(product=>product.unitPrice>12000)
console.log(filteredProducts)

//reduce
let cartTotal = products.reduce((acc,product)=>acc+ product.unitPrice,0)
console.log(cartTotal)

let cartTotal2=products
               .filter(p=>p.unitPrice>13000)
               .map(p=>{
                   p.unitPrice = p.unitPrice * 1.18
                   return p
               })
               .reduce((acc,p)=>acc+p.unitPrice,0)
console.log(cartTotal2)


