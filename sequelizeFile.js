const { Sequelize } = require ("sequelize");
const dotenv = require ("dotenv");

dotenv.config(); // Load environment variables from .env file

// Sequelize instance for PostgreSQL
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false, // Optional: turn off SQL query logging
  }
);

// Function to test the connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection successful!");
  } catch (error) {
    console.log(error)
    console.error("❌ Database connection failed:", error.message);
  }
};

// Call the test function
testConnection();