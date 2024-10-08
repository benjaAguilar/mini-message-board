const { Router } = require('express');
const messageController = require('../controllers/messageController');
const router = Router();

router.get('/', messageController.getIndex);

router.get('/new', (req, res) => {
    res.render('new');
});

//sort by
router.get('/sort', messageController.sortBy)

// likes
router.post('/', messageController.postUpdateLikes);

//handle new message post
router.post('/new', messageController.postMessage);

module.exports = router;