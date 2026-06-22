# Assignment Notes

## Database Choice

PostgreSQL was selected because it supports indexing, efficient filtering, and scalable pagination.

## Pagination Choice

Cursor-based pagination was used instead of offset pagination.

Benefits:

- Faster on large datasets
- Avoids duplicate records
- Handles new inserts better

## Data Generation

Generated 200,000 products using Faker.js.

Products were inserted using batch inserts of 5000 records to reduce database calls.

## AI Usage

AI was used to assist with:

- Project structure
- Query optimization
- Pagination implementation

All code was reviewed, understood, tested, and modified during development.

## Improvements

- Composite cursor pagination
- Caching layer
- Automated testing