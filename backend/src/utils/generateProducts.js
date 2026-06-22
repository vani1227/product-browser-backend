const { faker } = require("@faker-js/faker");

const categories = [
  "Electronics",
  "Books",
  "Fashion",
  "Home",
  "Sports"
];

function generateProducts(count) {
  const products = [];

  for (let i = 0; i < count; i++) {
    const createdAt = faker.date.past();

    products.push({
      name: faker.commerce.productName(),
      category:
        categories[Math.floor(Math.random() * categories.length)],
      price: faker.commerce.price({
        min: 100,
        max: 10000,
      }),
      created_at: createdAt,
      updated_at: createdAt,
    });
  }

  return products;
}

module.exports = generateProducts;