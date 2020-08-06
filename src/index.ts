// tslint:disable:no-console
import { ApolloServer, gql } from "apollo-server";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { config } from 'dotenv';
import { buildSchema } from 'type-graphql';
import UserResolver from './resolvers/userResolver';

config();

const port = 4000;

// const typeDefs = gql`
//   type User {
//     id: ID
//     firstName: String
//     lastName: String
//     street: String
//     street2: String
//     city: String
//     state:  String
//     zipCode: String
//     mobile: String
//     email: String
//     birthday: String
//     picture: String
//   }

//   type Query {
//     users: [User]
//   }
// `;

// const users = [{
//     id: 1,
//     firstName: "Adam",
//     lastName: "Robinson",
//     street: "123 Magic Lane",
//     street2: "",
//     city: "Palace",
//     state: "MA",
//     zipCode: '02778',
//     mobile: '555-666-7777',
//     email: '123@monkey.com',
//     birthday: '01/01/1908',
//     picture: 'image.jpg'
// }];

// const resolvers = {
//   Query: {
//     users: () => users,
//   },
// };

async function main() {
  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [__dirname + "/entity/*.ts"],
    synchronize: true,
  })
    .then(async (connection) => {
      const { isConnected, options, driver } = connection;

      if(isConnected) {
        console.log(`${options.type} DB '${driver.database}' connected`);
      }
    })
    .catch((error) => {
      console.log(error);
    });

  const schema = await buildSchema({ resolvers: [UserResolver] });

  const server = new ApolloServer({ schema });

  await server.listen(port).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

main();