const user = require('../models').User;
module.exports ={
    post(req,res){
        return user.create({
            UserName: req.body.UserName,
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            Type:req.body.Type,
        })
        .then(user=>{res.status(201).send(user)})
        .catch(error=>{res.status(400).send(error)});

        },

        get(req,res){
            console.log('findall..........')
            return user.findAll()
            .then(user=>{
                if(user.length>0){
                    res.status(201).send(user)
                }else{
                    res.status(201).send('no data found')
                }
            }).catch(error=>{res.status(400).send(error)});
        },

        delete(req,res){
            return user.delete({
                where : {
                    id:req.params.id
                }
                    
                
            })
            // .then(user=>{
            //     res.json({id:id,message:"deleted user with id" +id})
            //     .catch(err=> {
            //         console.log(err);
            //     })
            }
        
}