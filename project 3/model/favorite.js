const favoriteSchema= new mongoose.Schema({
  userId:{type: mongoose.Schema.Type.ObjectId, ref:'User'},
  houesId:{type: mongoose.Schema.Type.ObjectId, ref:'House'}
});

module.exports = mongoose.model('Favorite', favoriteSchema);