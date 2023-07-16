import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type Query {
        product: Product
    }

    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Boolean
    }
`)

export default schema;