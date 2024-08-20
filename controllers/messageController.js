const db = require('../db/queries');

async function getIndex(req, res){
    const messages = await db.getAllMessages();
    res.render('index', {msg: messages});
}

module.exports = {
    getIndex
}