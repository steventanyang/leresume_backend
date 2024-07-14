// import { ApolloServer } from "@apollo/server";
// import { expressMiddleware } from "@apollo/server/express4";
// import express from "express";
// import bodyParser from "body-parser";

// // Sample data for products (you can replace this with your database)
// const products = [
//   { id: "1", name: "Product A", description: "Description A", price: 19.99 },
//   { id: "2", name: "Product B", description: "Description B", price: 29.99 },
//   // Add more products here
// ];

// // schema
// const typeDefs = `
//   type Product {
//     id: ID!
//     name: String!
//     description: String
//     price: Float!
//   }

//   type Query {
//     getAllProducts: [Product]
//     getProductById(id: ID!): Product
//     getProductsByName(name: String!): [Product]
//   }

//   type Mutation {
//     updateProduct(
//       id: ID!
//       name: String
//       description: String
//       price: Float
//     ): Product
//     deleteProduct(id: ID!): String
//     createProduct(name: String!, description: String, price: Float!): Product
//   }

//   type Subscription {
//     productUpdated: Product
//   }
// `;

// const resolvers = {
//   Query: {
//     getAllProducts: () => products,
//     getProductById: (_, { id }) =>
//       products.find((product) => product.id === id),
//     getProductsByName: (_, { name }) =>
//       products.filter((product) => product.name.includes(name)),
//   },
//   Mutation: {
//     updateProduct: (_, { id, name, description, price }) => {
//       const productIndex = products.findIndex((product) => product.id === id);
//       if (productIndex === -1) {
//         throw new Error("Product not found");
//       }
//       products[productIndex] = {
//         ...products[productIndex],
//         name,
//         description,
//         price,
//       };
//       return products[productIndex];
//     },
//     deleteProduct: (_, { id }) => {
//       const productIndex = products.findIndex((product) => product.id === id);
//       if (productIndex === -1) {
//         throw new Error("Product not found");
//       }
//       products.splice(productIndex, 1);
//       return "Product deleted successfully";
//     },
//     createProduct: (_, { name, description, price }) => {
//       const newProduct = {
//         id: String(products.length + 1),
//         name,
//         description,
//         price,
//       };
//       products.push(newProduct);
//       return newProduct;
//     },
//   },
// };

// // Initialize Apollo Server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });


// const app = express();
// await server.start();
// app.use("/graphql", bodyParser.json(), expressMiddleware(server));

// const PORT = 4000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
// });
