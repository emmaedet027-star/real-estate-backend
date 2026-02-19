const houseSchema= new mongoose.Schema({
  price:{type:Number, required:true},
  city:{type:String, required:true},
  bedrooms:{type:String, required:true},
  description:{type:String, required:true},
  status:{type:String, required:true, default:'available'},
  favCount:{type:Number, default:0}
});

module.exports = mongoose.model('House', houseSchema);