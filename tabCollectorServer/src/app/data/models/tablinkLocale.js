var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var tabLinkLocaleSchema=new Schema({
    description:{type:String, require:true, unique:false},
    dateCreated:{type:Date, require:true, unique:false},
    dateDeleted:{type:Date, require:false, unique:false}
});

var TabLinkLocale=mongoose.model('TabLinkLocale', tabLinkLocaleSchema);

module.exports=TabLinkLocale;