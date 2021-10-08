const Worker = require('../models/Worker');
const Job = require('../models/Job');

class WorkerController{

    async addWorker(req, res){
        try {
            const worker = await Worker.create(req.body);
            return res.status(201).json({worker});
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

    async getJob(req, res){
        try{
            const job = await Job.create(req.body);
            return  res.status(201).json({job});
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

    async getList(req, res){
        try {
            const id = req.params.id;
            const list = await Job.findAll({
                where: {
                    worker_id: id
                }
            });
            if (!list){
                res.send('Post not found');
            } else {
                return res.status(201).json({list});
            }
        } catch (error){
            return res.status(500).json({error: error.message})
        }
    }

    async cancelJob(req, res){
        try {
            const {jobId} = req.params;
            const job = await Job.destroy({
                where: {
                    id: jobId
                }
            });
            if (job) {
                return res.status(204).send('Post deleted');
            }
        } catch (error){
            return res.status(500).send(error.message);
        }
    }


}

module.exports = new WorkerController();