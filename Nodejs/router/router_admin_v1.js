/*********************************************************************************************************** */
//                                  This is API Router for APP                                     //
/********************************************************************************************************* */


const apiEndpint = "/api/v1";
const userController = require('./../controllers/user');



module.exports.set = (app) => {
    app.post(apiEndpint + '/saveUser', userController.saveUser);
    app.get(apiEndpint + '/getUsers', userController.getUsers);
    app.put(apiEndpint + '/updateUser', userController.updateUser);
    app.delete(apiEndpint + '/deleteUser', userController.deleteUser);
}

