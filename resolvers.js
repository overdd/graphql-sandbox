class Store {
    constructor(store) {
        this.store = store;
    }
}

class Product {
    constructor(id, {name, description, price, soldout, stores}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.soldout = soldout;
        this.stores = stores.map(store => new Store(store.store));
    } 
}

const productDatabase = {};

export const resolvers = { 
    getProducts: ({id}) => {
        return new Product(id, productDatabase[id])
    },
    createProduct: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        productDatabase[id] = input;

        return new Product(id, input);
    }
};

