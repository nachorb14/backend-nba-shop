class ProductManager {
    constructor() {
        this.products = []
        this.incrementId = 1
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) return console.error("Todos los campos son obligatorios")
            
        const productExist = this.products.find((product) => product.code === code)
        if (productExist) return console.error(`El producto con el código ${code} ya existe`)

        const newProduct = {
            id: this.incrementId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.products.push(newProduct)
    }

    getProducts() {
        return this.products
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id)
        if (!product) return console.error('El producto no existe')

        if (product) return product
    }
}

const productManager = new ProductManager()

productManager.addProduct('Jersey Golden State Warriors', 'Version Local', 120, 'https://fanatics.frgimages.com/golden-state-warriors/unisex-nike-stephen-curry-royal-golden-state-warriors-swingman-jersey-icon-edition_pi4650000_altimages_ff_4650408-bce9200a988d4fe31b0dalt1_full.jpg?_hv=2&w=900', 'JGSWVL30', 100)
productManager.addProduct('Jersey Denver Nuggets', 'Version City Edition', 120, 'https://fanatics.frgimages.com/denver-nuggets/unisex-nike-nikola-jokic-black-denver-nuggets-2023/24-swingman-jersey-city-edition_ss5_p-5362483+pv-1+u-fhnnvtjicf1qibxsig4t+v-fsov8cg5vnrf7j62dz28.jpg?_hv=2&w=900', 'JDNVCE15', 70)
productManager.addProduct('Jersey Boston Celtics', 'Version Local', 120, 'https://fanatics.frgimages.com/boston-celtics/unisex-nike-jayson-tatum-kelly-green-boston-celtics-swingman-jersey-icon-edition_pi4650000_altimages_ff_4650391-20e3b038ad7098229d53alt1_full.jpg?_hv=2&w=900', 'JBCVL0', 110)
productManager.addProduct('Jersey Chicago Bulls', 'Version Classics', 180, 'https://fanatics.frgimages.com/chicago-bulls/youth-mitchell-and-ness-michael-jordan-white-chicago-bulls-1997-98-hardwood-classics-authentic-jersey_pi4729000_altimages_ff_4729931-c9e5c5d5e9e711634fb5alt1_full.jpg?_hv=2&w=900', 'JCBVCMJ23', 50)

const allProducts = productManager.getProducts()
console.log("Todos los productos:", allProducts)

const productId = 1;
const foundProduct = productManager.getProductById(productId)
if (foundProduct) return console.log('Producto Encontrado:', foundProduct)