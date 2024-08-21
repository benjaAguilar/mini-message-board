const pool = require('./pool');

async function getAllMessages(){
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function createNewMessage(message, user){
    await pool.query("INSERT INTO messages (message, username) VALUES($1, $2)", [message, user]);
}

async function increaseLikes(id){
    await pool.query(
        `UPDATE messages SET likes = likes + 1                
        WHERE id = $1
        `, [id]);
}

module.exports = {
    getAllMessages,
    createNewMessage,
    increaseLikes
}