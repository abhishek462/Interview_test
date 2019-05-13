/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: function (req, res) {
             if(req.method=='POST'&&req.param('User',null)!=null)
             {
               User.create(req.param('User')).done(function(err,model){
               // Error handling
                 if (err) {
                 res.send(“Error:Sorry!Something went Wrong”);
                 }else {
                     res.send(“Successfully Created!”);
                 //res.redirect( ‘person/view/’+model.id);
                 }
               });
             }
             {
               res.render( 'user/create');
             }
        } 
};

