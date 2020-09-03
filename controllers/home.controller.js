class HomeController{
     async index (req,res){
         return res.send({message:'hello word'})
     }
}

module.exports = new HomeController();