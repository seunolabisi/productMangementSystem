
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 250000,
        category: "Electronics",
        quantity: 5
    },
    {
        id: 2,
        name: "Phone",
        price: 150000,
        category: "Electronics",
        quantity: 10
    },
     {
        id: 3,
        name: "fan",
        price: 1000,
        category: "electronics",
        quantity: 5
    }
];

// Get all products
const getAllProducts = (req, res) => {
    res.status(200).json(products);
};

// Get a single product
const getSingleProduct = (req, res) => {
    const productId = Number(req.params.id);

    const product = products.find((item) => {
        return item.id === productId;
    });

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.status(200).json(product);
};

// Create a product
const createProduct = (req, res) => {
    const newProduct = req.body;

    newProduct.id = products.length + 1;

    products.push(newProduct);

    res.status(201).json({
        message: "Product created successfully",
        product: newProduct
    });
};

module.exports = {
    getAllProducts,
    getSingleProduct,
    createProduct
};
