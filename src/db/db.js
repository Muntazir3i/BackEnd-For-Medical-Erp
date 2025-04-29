import Database from 'better-sqlite3';

const db = new Database('mediGo.db'); // Will create if doesn't exist

export default db;


// This code snippet sets up and exports a SQLite database connection using the better-sqlite3 library in Node.js