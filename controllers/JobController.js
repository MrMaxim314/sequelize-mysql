const Worker = require('../models/Worker');
const Job = require('../models/Job');

class JobController{

    async getFired(req, res){
        try {
            const id = req.params.id;
            const fired = await Worker.destroy({
                where: {
                    id: id
                }
            });
            if (!fired) {
                res.send('Not found;')
            } else {
                res.send('Deleted');
            }
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

    async getAllWorkers(req, res){
        try {
            const list = await Worker.findAll();
            return res.status(201).json({list});
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

}

module.exports = new JobController();