import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Natraj pencils -x90",
    desc: "this is a dummy text, to explain more about the product description",
    price: "5000",
    coverImg: "https://i2-prod.manchestereveningnews.co.uk/incoming/article11851328.ece/ALTERNATES/s1200c/CS49004805.jpg",
  },
  {
    _id: uuid(),
    title: "Shinota erasers -x53",
    desc: "this is a dummy text, to explain more about the product description",
    price: "3000",
    coverImg: "https://qph.fs.quoracdn.net/main-qimg-ecd9c3645f18c9925700fbad951b4116-lq",
  },
  {
    _id: uuid(),
    title: "Montseraat Pens -x66",
    desc: "this is a dummy text, to explain more about the product description",
    price: "1000",
    coverImg: "https://m.media-amazon.com/images/I/616tqxn3bwL._SY450_.jpg",
  },
  {
    _id: uuid(),
    title: "Calyxpod Pens -x58",
    desc: "this is a dummy text, to explain more about the product description",
    price: "1000",
    coverImg: "https://m.media-amazon.com/images/I/41L1PCld4SL.jpg",

  },
];
