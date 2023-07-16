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
        product: Product
    }

    type Store {
        store: String
    }
`)

export default schema;