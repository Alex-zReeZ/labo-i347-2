# ToDo App

## Overview
This is a simple ToDo app backend built with Node.js and Express. It supports creating, reading, updating, and deleting tasks.

## Features
- CRUD API for tasks
- SQLite for development, MySQL for production
- Dockerized with Docker Compose support

## Instructions
1. Clone the repository.
2. Run `docker-compose up` to start the development environment.
3. Use Postman or curl to interact with the API on `http://localhost:3000/api/tasks`.

### Environment Variables
- `.env.development`: Development environment configuration.
- `.env.production`: Production environment configuration.
