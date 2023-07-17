import { buildSchema } from "graphql";

export const schema = buildSchema(`
        type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Boolean
        stores: [Store]!
    }
    
    type Query {
        getProduct(id: ID): Product
    }

    type Store {
        store: String
    }

    input StoreInput {
        store: String
    }

    input ProductInput {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Boolean
        stores: [StoreInput]!
    }

    type Mutation {
        createProduct(input: ProductInput): Product
        
    }
`)

export default schema;