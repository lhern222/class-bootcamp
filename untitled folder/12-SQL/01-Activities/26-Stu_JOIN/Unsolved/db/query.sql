-- Add your code below and execute file in MySQL Shell --

SELECT *
FROM favorite_books
JOIN book_prices ON favorite_books.books_db = books_db;