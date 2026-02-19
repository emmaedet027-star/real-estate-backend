const House = require('../model/house');

exports.searchByRooms = async(req, res)=>{
  try{
    const{query} = req.body;
    const house = await House.find({bedrooms:req.body});
    if(!house){
      return res.status(400).json('Not found!');
    }
    res.json({house});
  }
}

exports.searchByCity = async(req, res)=>{
  try{
    const{query} = req.body;
    const house = await House.find({city:req.body});
    if(!house){
      return res.status(400).json('Not found!');
    }
    res.json({house});
  }
}

exports.searchByPrice = async(req, res)=>{
  try{
    const{query} = req.body;
    const house = await House.find({price:req.body});
    if(!house){
      return res.status(400).json('Not found!');
    }
    res.json({house});
  }
}