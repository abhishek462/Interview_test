/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */ 

module.exports = {
  'create': function (req, res) {
             if(req.method=='POST'&&req.param('User',null)!=null)
             {             
               User.create(req.param('User')).exec(function(err,model){
               // Error handling
                 if (err) {
                 	return res.send("Error:Sorry !Something went Wrong");
                 }else {
                    return res.redirect('/user/index');
                 }
               });
             }
             else{
               return res.render( '/user/index');
             }
        },
        'index': function (req, res) {
        User.find().exec(function(err, users) {
       		res.render('user/index',{'users':users});
       return;
     });
   },
    'apiList': function (req, res) {
        User.find().exec(function(err, users) {
         return res.send({'users':users}); 
     });
   },
   'view': function (req, res) {
           var id=req.param("id",null);
           User.findOne(id).exec(function(err,model){
         res.render( 'user/view',{'model':model});    
           });
       },
 'update': function (req, res) {
                   var id=req.param("id",null); 
            User.findOne(id).exec(function(err, model) {
               sails.log(req.method+"      "+req.param("User",null));
              if(req.method=="POST"&&req.param("User",null)!=null)
            { 
                var p=req.param("User",null);
              model.name=p.name;
              model.age=p.age; 
              User.update(
    {id: id}, //this is find
    {name: p.name, age: p.age} // this is update
).exec(function(err, updatedModel) {
    if (err) {
                    
                   return res.send("Error");
                }else {
                    
                  return  res.redirect('/user/view/'+model.id);
                }
});
            
            }
            else
            {
               
              res.render('user/update',{'model':model});

            }
          });
              },
              'delete': function (req, res) { 
    User.destroy(req.param('id',null)).exec(function(err, todo){ 
       if (err) {
                    
                   return res.send("Error");
                }else {
                    
                  return   res.redirect('/user/index');
                }
         
    });
     
}


};

