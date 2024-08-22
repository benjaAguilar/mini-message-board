#! /usr/bin/env node
const { Client } = require("pg");
require('dotenv').config({
  path: process.env.NODE_ENV === 'prod' ? '.env.prod' : '.env.dev'
});

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255),
  message VARCHAR(255),
  date DATE DEFAULT CURRENT_DATE,
  likes INT DEFAULT 0
);

INSERT INTO messages (username, message) 
VALUES
  ('ColorCode', 'Now we have DB integration! hope you like <3'),
  ('Benja12', 'Kiteboarding is awesome!'),
  ('Rick Sanchez', 'Im pickle rick!');

`;

async function main() {
  console.log("seeding...");
  try{
    const client = new Client({
      connectionString: process.env.POPULATE_CONNECTION,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  } catch(e){
    console.log(e);
  }

}

main();
