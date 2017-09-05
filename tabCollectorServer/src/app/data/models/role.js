var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var roleSchema=new Schema({
    name:{type:String, required:true, unique:false},
    dateCreated:{type:Date, required:true, unique:false},
    dateDeleted:{type:Date, required:false, unique:false}
});

var Role=mongoose.model('Role', roleSchema);

module.exports=Role;