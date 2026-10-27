export{}
interface Product{
    name:string,
    price:number,
    inStock?:boolean,
};

const products:Product[] = [
    {name:"Lenovo", price:2000, inStock:true},
    {name:"HP", price:3000},
    {name:"Asus", price:1000, inStock:true},
];

for(const u of products){
    console.log(`Laptop name is ${u.name} whose price is ${u.price} and its  ${u.inStock? "Instock" : "not Instock"}`)
}

class Cart{
    private items: Product[] = [];

    addItem(p:Product):this{
        this.items.push(p);
        return this;
    }

    getTotal():number{
       let total = 0;
       for (const item of this.items){
        total +=item.price;
       }
       return total;
    }
}

const cart = new Cart();
console.log(cart.addItem(products[0]).addItem(products[1]).getTotal());