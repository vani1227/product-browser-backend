const pool = require("../config/db");
const generateProducts = require("../utils/generateProducts");

const TOTAL_PRODUCTS = 200000;
const BATCH_SIZE = 5000;

async function seedProducts() {
  try {
    console.log("Generating products...");

    const products = generateProducts(TOTAL_PRODUCTS);

    console.log(`Generated ${products.length} products`);

    for (let i = 0; i < products.length; i += BATCH_SIZE) {
      const batch = products.slice(i, i + BATCH_SIZE);

      const values = [];
      const placeholders = [];

      batch.forEach((product, index) => {
        const offset = index * 5;

        placeholders.push(
          `($${offset + 1}, $${offset + 2}, $${offset + 3}, $${offset + 4}, $${offset + 5})`
        );

        values.push(
          product.name,
          product.category,
          product.price,
          product.created_at,
          product.updated_at
        );
      });

      const query = `
        INSERT INTO products
        (name, category, price, created_at, updated_at)
        VALUES ${placeholders.join(",")}
      `;

      await pool.query(query, values);

      console.log(
        `Inserted ${Math.min(i + BATCH_SIZE, TOTAL_PRODUCTS)} products`
      );
    }

    console.log("✅ Seeding completed");

    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }
}

seedProducts();