const categories = require('./categories.models')

async function  AllCategories(){
    return await categories.find();  
}

async function  OneCategories(filter, type){
    if (!type) {
        return await categories.find({filter:[filter]});
    }else{
        return await categories.find({filter:[filter],type:[type]});
    }
}
async function CreateCategories (body) {
    return await categories.create(body);
}

async function EditCategories (id, change) {
    return await categories.findByIdAndUpdate(id, change);
  }

module.exports={
    AllCategories,
    OneCategories,
    CreateCategories,
    EditCategories
}
