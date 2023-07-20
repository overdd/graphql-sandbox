class Store {
    constructor(store) {
        this.store = store;
    }
}

import { Widgets } from './dbConnectors';

export const resolvers = { 
    getProduct: async ({id}) => {
        return await Widgets.findById(id);
    },
    createProduct: ({input}) => {
        // let id = require('crypto').randomBytes(10).toString('hex');
        // productDatabase[id] = input;
        // console.log(productDatabase)
        // return new Product(id, input);
    }
};

