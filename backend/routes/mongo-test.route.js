const router = require('express').Router();
const MongoTest = require('../models/mongo-test.model');


router.route('/get/:id')
.get((req, res)=>{
    const {id}=req.params;
    MongoTest.findOne({_id:id}, {details:true})
    .then(data=>res.send(data.details.map(e=>e.name)))
    .catch(err=>res.send(err))
})

router.route('/post/:username/:userid')
.post((req, res)=>{
    const {username, userid}=req.params;
    const {details}= req.body;

    const proData = new MongoTest({
        username, userid, details
    });
    proData.save()
    .then(data=>res.send('posted!'))
    .catch(err=>res.send(err))

})

router.route('/update/:id')
.put((req, res)=>{
    const {id}=req.params;
    const {dataToUpdate}=req.body;
    MongoTest.findOneAndUpdate({_id:id}, {$set:{"details.$[].name":dataToUpdate}}, {returnOriginal:false})
    .then((data)=>res.send(data))
    .catch(err=>res.send(err))
})


module.exports = router;