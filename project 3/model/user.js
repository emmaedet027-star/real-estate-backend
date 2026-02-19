const houseSchema= new mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String, required:true, unique:true},
  password:{type:String, required:true},
  role:{type:String, enum:['user','owner','agent'], required:true}
});

module.exports = mongoose.model('User', userSchema)