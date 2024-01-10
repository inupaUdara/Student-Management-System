const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({

    name : { 
        type:String,required:true
    },

    age:{
        type:Number,
        required:true
    },

    gender:{
        type:String,
        required:true
    },
    // username:{
    //     type:String,
    //     required:true
    // },

    // password: {
    //     type:String,
    //     required:true
    // }
})

const Teacher = mongoose.model("Teacher",TeacherSchema);

module.exports = Teacher;