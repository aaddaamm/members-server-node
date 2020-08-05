import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { importApiRoutes } from "./router";
import { User } from "./entity/user";
import { config } from 'dotenv';

config();

const app = express();
const port = 3000;

importApiRoutes(app);

createConnection({
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
    // here you can start to work with your entities
    const newUser = new User();

    newUser.firstName = "Adam";
    newUser.lastName = "Adam";
    newUser.mobile = "555-333-4444";
    newUser.email = "adam@adam.com";

    const userRepository = connection.getRepository(User);

    await userRepository.save(newUser);

    // tslint:disable-next-line:no-console
    console.log("User has been saved.");

    const users = await userRepository.find();

    // tslint:disable-next-line:no-console
    console.log("Users: ", users);

    users.forEach(async (user) => {
      await userRepository.remove(user);

      // tslint:disable-next-line:no-console
      console.log("Removed: ", user);
    });
  })
  .catch((error) => {
    // tslint:disable-next-line:no-console
    console.log(error);
  });

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`app listening at http://localhost:${port}`);
});
