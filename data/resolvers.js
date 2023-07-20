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
    getAllProducts: async () => {
        return await Widgets.find({})
    },
    createProduct: async ({input}) => {
        const newWidget = new Widgets({
            name: input.name,
            description: input.description,
            price: input.price,
            soldout: input.soldout,
            stores: input.stores
        });
        return await newWidget.save();
    },
    updateProduct: async ({input}) => {
        return await Widgets.findOneAndUpdate({_id: input.id}, input, { new: true});
    },
    deleteProduct: async ({id}) => {
        await Widgets.findOneAndDelete({_id: id});
        return (`Product ${id} was deleted`);
    }
};

