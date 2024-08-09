const { v4: uuidv4 } = require('uuid');
const { Router } = require('express');
const router = Router();

function getDate(){
    const today = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const yr = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDay();
    const currentDayOfWeek = daysOfWeek[today.getDay()];

    return `${currentDayOfWeek} ${day} / ${month} / ${yr}`;
}

const msg = [
    {
        id: uuidv4(),
        msg: 'Another beautiful day in this social media...',
        user: 'Crow55',
        added: getDate(),
        likes: 1,
    },
    {
        id: uuidv4(),
        msg: 'I seriously think that react.js is god!',
        user: 'Color',
        added: getDate(),
        likes: 3,
    },
    {
        id: uuidv4(),
        msg: 'Im pickle rick!',
        user: 'Rick Sanchez',
        added: getDate(),
        likes: 20,
    },
]

router.get('/', (req, res) => {
    res.render('index', {msg: msg})
});

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