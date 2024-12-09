const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

app.use(express.json());

// Routes
app.use('/api/tasks', tasks);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
