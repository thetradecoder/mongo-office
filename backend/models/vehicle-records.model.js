const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const VehicleSchema =  new Schema({
    carNumber:{type:String, unique:true},
    carDetails:{
        carNumber:{type:String}, 
        carOwner:{type:String},
        carColor:{type:String},
        engineNumber:{type:String},
        chasisNumber:{type:String},
        modelNumber:{type:String},
        buyFrom:{type:String},
        buyAtCost:{type:Number},
        buyDate:{type:Date},
        taxTokenValidity:{type:Date},
        routePermitValidity:{type:Date},
        insuranceValidity:{type:Date},
        fitnessValidity:{type:Date}
    },    
    repairHistory:[{
        repairDate:{type:String},
        problemDetails:{type:String},
        repairBy:{type:String},
        confirmBy:{type:String},
        workDetails:{type:String},
        cost:{type:Number}
    }],
    caseHistory:[{
        driver:{type:String},
        caseDate:{type:Date},
        caseReason:{type:String},
        caseStatus:{type:String},
        caseDetails:{type:String}
    }],
    accidentHistory:[{
        driver:{type:String},
        accidentDate:{type:Date},
        accidentDetails:{type:String}
    }],
    username:{type:String},
    userid:{type:String}
}, {timestamps:true});

const VehicleRecords = mongoose.model("VehicleRecords", VehicleSchema);

module.exports = VehicleRecords;