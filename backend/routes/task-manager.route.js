const router = require('express').Router();
const TaskManager = require('../models/task-manager.model');


// retrive data from database
router.route('/view/:username/:userid')
.get((req, res)=>{
    const {     
        username,
        userid,
    } = req.params;
   
    TaskManager.find({username, userid}, {title:true, details:true, assignedTo:true, deadline:true, progress:true, status:true})
    .then(data=>res.send(data.filter(e=>e.status!=='deleted')))
    .catch(err=>res.send(err))
});


// add task to database
router.route('/add/:username/:userid')
.post((req, res)=>{
    const {
        username,
        userid
    } = req.params;
   
    const {
        title,
        details,
        assignedTo,
        deadline,
        progress,
        status, 
        editPassword        
    } = req.body;

    const data = new TaskManager({
        title, 
        details, 
        assignedTo, 
        deadline,
        progress, 
        status,       
        username,
        userid,
        editPassword
    });

    data.save()
    .then(()=>res.send('Task Added!'))
    .catch(err=>res.send(err))
   
});

router.route('/edit/:taskId')
.get((req, res)=>{
    const {taskId} = req.params;   

    TaskManager.findOne({_id:taskId})
    .then((data)=>res.send(data))
    .catch(err=>res.send(err))

});

router.route('/edit/save/:taskId/:editPassword')
.post((req, res)=>{
    const {taskId, editPassword} = req.params;
    const {details, progress, assignedTo, deadline} = req.body;
    TaskManager.findOneAndUpdate({_id:taskId, editPassword}, {$set:{details, progress, assignedTo, deadline}})
    .then(data=>res.send('Task Updated!'))
    .catch(err=>res.send(err))
})

router.route('/edit/close/:taskId/:editPassword')
.post((req, res)=>{
    const {taskId, editPassword} = req.params;
    const {status} = req.body;
    TaskManager.findOneAndUpdate({_id:taskId, editPassword:editPassword}, {$set:{status}})
    .then((data)=>{!data?res.send('Wrong Password!'):res.send('Task Closed!')})
    .catch(err=>res.send(err))
})

router.route('/edit/delete/:taskId/:editPassword')
.post((req, res)=>{
    const {taskId, editPassword} = req.params;
    const {status} = req.body;
    TaskManager.findOneAndUpdate({_id:taskId, editPassword:editPassword}, {$set:{status}})
    .then((data)=>{!data?res.send('Wrong Password!'):res.send('Task Deleted!')})
    .catch(err=>res.send(err))
})
module.exports = router;
