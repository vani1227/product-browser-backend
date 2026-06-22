const pool = require("../config/db");

async function getProducts(limit = 20, cursor = null, category = null) {
  let query = `
    SELECT *
    FROM products
  `;

  const values = [];
  const conditions = [];

  if (category) {
    values.push(category);
    conditions.push(`category = $${values.length}`);
  }

  if (cursor) {
    values.push(cursor);
    conditions.push(`created_at < $${values.length}`);
  }

  if (conditions.length > 0) {
    query += ` WHERE ${conditions.join(" AND ")}`;
  }

  values.push(limit);

  query += `
    ORDER BY created_at DESC
    LIMIT $${values.length}
  `;

  const result = await pool.query(query, values);

  return result.rows;
}

module.exports = {
  getProducts,
};