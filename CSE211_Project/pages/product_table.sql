CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255) NOT NULL,
    category ENUM('men', 'women', 'kids') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);