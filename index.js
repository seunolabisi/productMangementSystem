
const express = require("express");

const app = express();

const {
    getAllProducts,
    getSingleProduct,
    createProduct
} = require("./controllers/productController");

app.use(express.json());

app.get("/products", getAllProducts);

app.get("/products/:id", getSingleProduct);

app.post("/products", createProduct);

const port = 3000;

app.listen(port, () => {
    console.log(`Server is actively running on ${port}`);
});
