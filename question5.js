const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3000;

// MySQL database connection
const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active'
    }
});

// Route to fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Sync the model with the database and start the server
async function startServer() {
  try {
    await sequelize.sync(); // Creates the table if it doesn't exist
    console.log('Database synced');

    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();

// npm install express sequelize mysql2

/**Ensure you have MySQL installed and running.
Create a database (midtermexam).
Create a user with the necessary privileges (replace your_username and your_password).
Replace Placeholders:
In the sequelize constructor, replace 'midtermexam', 'root', and 'blackmamba24' with your actual MySQL credentials.
Run the application:
node your_file_name.js */