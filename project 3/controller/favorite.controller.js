const House = require('../model/house');
const Favorite = require('../model/favorite');

exports.addToFav = async(req, res)=>{
try{
  const fav = await Favorite.findOne({userId:req.userId, houseId:req.params.id});
  if(fav){
    const house = await House.findByIdAndUpdate({req.params.id},
        {$inc:{favCount:-1}}      
      );
    const match = await Favorite.findOneAndDelete({userId:req.userId, houseId:req.params.id});
    await house.save;
  }else{
    const fav = await Favorite.create({
      userId: req.userId,
      houseId: req.params.id
    });
    const house = await House.findOne({_id:req.params.id},
      {$inc:{favCount:1}}
      );
    await house.save;  
    await res.status(200).json({favorite});
}
}
}
catch(err){
  console.log(err);
}