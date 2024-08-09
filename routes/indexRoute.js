const { v4: uuidv4 } = require('uuid');
const { Router } = require('express');
const router = Router();

const msg = [
    {
        id: uuidv4(),
        msg: 'Another beautiful day in this social media...',
        user: 'Crow55',
        added: new Date(),
        likes: 1,
    },
    {
        id: uuidv4(),
        msg: 'I seriously think that react.js is god!',
        user: 'Color',
        added: new Date(),
        likes: 3,
    },
    {
        id: uuidv4(),
        msg: 'Im pickle rick!',
        user: 'Rick Sanchez',
        added: new Date(),
        likes: 20,
    },
]

router.get('/', (req, res) => {
    res.render('index', {msg: msg})
});

module.exports = router;