import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send({
    firstName: "Adam",
    lastName: "Robinson",
    address: {
      street: "123 Magic Lane",
      street2: "",
      city: "Palace",
      state: "MA",
      zipCode: '02778',
    },
    mobile: '555-666-7777',
    email: '123@monkey.com',
    birthday: '01/01/1908',
    picture: 'image.jpg'
  });
});

export default router;
