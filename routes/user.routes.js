import express from "express";

const router = new express.Router();

router.get("/", (req, res) => {
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
    birthday: '01/01/1908'
  });
});

export default router;
