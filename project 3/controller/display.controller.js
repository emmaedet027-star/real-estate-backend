const House = require('../model/house');

exports.displayAllHouses = async (req,res)={
  try{
    const house = await House.find();
    if(house.status === 'available' || house.status === 'reserved'){
      res.json({house});
    }
    }
    catch(err){
      console.log(err);
    }

}

exports.displayOneHouse = async (req,res)={
  try{
    const house = await House.findById(req.params.id);
    res.json({house});
    }
    catch(err){
      console.log(err);
    }

}
