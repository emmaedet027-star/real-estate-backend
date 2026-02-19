const House = require('../model/house');
const User = require('../model/user');

exports.addHouse = async(req, res)=>{
  try{
    if(user.role === 'user'){
      return res.status(400).json({'Upgrade to an agent or owner's plan to access this action'});
    }
    const{price, city, bedrooms, describtion, status,} = req.body;
    const house = await House.create({
      req.body
    });
    res.status(200).jon({house});
    console.log('Created successfully!');
  }
  catch(err){
    console.log(err);
  }
}
