CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,          -- Unique identifier for each order
    user_id INT NOT NULL,                       -- ID of the user who placed the order
    total_amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00, -- Total amount of the order
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp when the order was created
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Timestamp when the order was last updated
    FOREIGN KEY (user_id) REFERENCES users(id)  -- Ensures user_id exists in the users table
);