const { v4: uuidv4 } = require('uuid');
const { Router } = require('express');
const messageController = require('../controllers/messageController');
const router = Router();

router.get('/', messageController.getIndex);

router.get('/new', (req, res) => {
    res.render('new');
});

router.post('/', (req, res) => {
    const id = req.body.msgId;

    msg.map(msg => {
        if(msg.id === id){
            msg.likes++;
        }
    });

    res.json({success: true});
});

router.post('/new', (req, res) => {
    const message = req.body.message;
    const user = req.body.user;

    msg.push({
        id: uuidv4(),
        msg: message,
        user: user,
        added: getDate(),
        likes: 0
    })

    res.redirect('/');
});

module.exports = router;