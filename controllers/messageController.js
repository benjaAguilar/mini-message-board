const db = require('../db/queries');

async function getIndex(req, res){
    const messages = await db.getAllMessages();
    res.render('index', {msg: messages});
}

async function postMessage(req, res){
    const { message, user } = req.body;
    await db.createNewMessage(message, user);
    
    res.redirect('/');
}

async function postUpdateLikes(req, res){
    const id = req.body.msgId;
    await db.increaseLikes(id);
    res.json({success: true});
}

module.exports = {
    getIndex,
    postMessage, 
    postUpdateLikes
}