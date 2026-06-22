const productService = require("../services/productService");

async function getProducts(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 20;
    const cursor = req.query.cursor || null;
    const category = req.query.category || null;

    const products = await productService.getProducts(
      limit,
      cursor,
      category
    );

    const nextCursor =
      products.length > 0
        ? products[products.length - 1].created_at
        : null;

    res.status(200).json({
      count: products.length,
      nextCursor,
      products,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  getProducts,
};