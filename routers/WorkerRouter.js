const Router = require('express');
const router = new Router();
const Worker = require('../controllers/WorkerController');

router.post('/add', Worker.addWorker);
router.post('/job', Worker.getJob);
router.delete('/cancel/:jobId', Worker.cancelJob);
router.get('/list/:id', Worker.getList);

module.exports = router;