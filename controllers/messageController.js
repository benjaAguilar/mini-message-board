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

async function sortBy(req, res){
    const { sorted } = req.query;
    let filter;
    
    if(sorted === 'newest') filter = "ORDER BY date DESC";
    if(sorted === 'oldest') filter = "ORDER BY date";
    if(sorted === 'name') filter = "ORDER BY username";

    const messages = await db.getAllMessages(filter);

    res.render('index', {msg: messages});
}

module.exports = {
    getIndex,
    postMessage, 
    postUpdateLikes,
    sortBy
}