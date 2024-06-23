const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: 3306,
   password : 'צטד/ך24',
  database : 'beis_din_db'
}).promise();

async function getDiscussion() {
  const sql = 'SELECT * FROM discussion';
  const [rows, fields] = await pool.query(sql);
  console.log(rows)
  return rows;
}
getDiscussion()