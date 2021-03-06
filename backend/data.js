import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Admin",
      email: "admin@admin.com",
      password: bcrypt.hashSync("adminadmin", 8),
      isAdmin: true,
    },
    {
      name: "Guest",
      email: "user@user.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Lenovo IDEAPAD L340 RYZEN",
      category: "Laptop",
      image: "/images/p1.png",
      price: 3000000,
      countInStock: 1,
      brand: "Lenovo",
      rating: 1.5,
      numReviews: 2,
      description: "Gaming HD laptop",
    },
    {
      name: "Acer IDEAPAD L340 RYZEN",
      category: "Laptop",
      image: "/images/p2.jpeg",
      price: 5000000,
      countInStock: 10,
      brand: "Acer",
      rating: 4,
      numReviews: 12,
      description: "Gaming HD laptop",
    },
    {
      name: "Asus IDEAPAD L340 RYZEN",
      category: "Laptop",
      image: "/images/p3.jpeg",
      price: 22000000,
      countInStock: 0,
      brand: "Asus",
      rating: 4.5,
      numReviews: 30,
      description: "Gaming HD laptop",
    },
    {
      name: "HP IDEAPAD L340 RYZEN",
      category: "Laptop",
      image: "/images/p4.jpeg",
      price: 7000000,
      countInStock: 4,
      brand: "HP",
      rating: 2,
      numReviews: 4,
      description: "Gaming HD laptop",
    },
    {
      name: "DELL IDEAPAD L340 RYZEN",
      category: "Laptop",
      image: "/images/p5.jpeg",
      price: 14000000,
      countInStock: 20,
      brand: "DELL",
      rating: 0,
      numReviews: 4,
      description: "Gaming HD laptop",
    },
  ],
};
export default data;
