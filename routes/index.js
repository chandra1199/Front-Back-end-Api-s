const userController = require('../controllers').user;
module.exports= app => {
    app.get('/user',userController.get);
    app.post('/user/post',userController.post);
    // app.delete('/user/delete',userController.delete);
}