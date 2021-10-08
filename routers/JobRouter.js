const Router = require('express');
const router = new Router();
const Job = require('../controllers/JobController');

router.delete('/fire/:id', Job.getFired);
router.get('/workers', Job.getAllWorkers);

module.exports = router;