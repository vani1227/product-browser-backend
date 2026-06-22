# Product Browser Backend

## Overview

Backend service built for the CodeVector Labs Internship Assignment.

Features:

- Browse 200,000 products
- Filter by category
- Cursor-based pagination
- PostgreSQL database
- Bulk product generation and insertion

## Tech Stack

- Node.js
- Express.js
- PostgreSQL (Neon)
- Faker.js

## Setup

```bash
npm install
npm run seed
npm run dev
```

## API Endpoints

### Get Products

GET /api/products

### Pagination

GET /api/products?limit=20&cursor=<timestamp>

### Category Filter

GET /api/products?category=Electronics

## Database

Table:

products

Columns:

- id
- name
- category
- price
- created_at
- updated_at

## Performance

- 200,000 records seeded
- Batch inserts (5000 rows/query)
- Indexed created_at
- Indexed category + created_at

## Future Improvements

- Composite cursor (created_at + id)
- Redis caching
- API rate limiting