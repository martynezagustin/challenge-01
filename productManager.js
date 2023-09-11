class ProductManager{
    constructor(){
        this.products = []
        this.incrementId = 0
    }
    addProduct(title, description, price, thumbnail, code, stock){
        if(this.products.some(product => product.code === code)){
            throw new Error("Ya existe el producto!")
        } else {

            const id = this.incrementId++

            const product = {
                id,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            this.products.push(product)

            return product
        }
    }
    getProductById(id){
        const productFound = this.products.find(product => product.id === parseInt(id))
        if(!productFound){
            throw new Error("Product not found.");
        }
        
        return productFound
    }
    getProducts(){
        return this.products
    }
}

//creamos un producto
const productManager = new ProductManager()
productManager.addProduct("Producto prueba", "Este es un producto prueba", 233, "img", 2331, 555)

//creamos otro producto
productManager.addProduct("Producto2", "Otro producto", 129, "img", 288, 145)

//findeamos un producto
const products = productManager.getProducts()
const productId = products[1].id
console.log(productManager.getProductById(productId));


//intentamos crear un producto con mismo codigo
try {
    productManager.addProduct("Producto3", "Otro producto", 155, "img", 288, 145)
} catch (error) {
    console.log(error.message);
}

//buscamos un producto por un id inexistente
try {
    console.log(productManager.getProductById(2));
} catch (error) {
    console.log(error.message);
}