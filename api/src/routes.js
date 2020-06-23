const { 
    express, routes, middleware,middlewareuser,showStore, registerStore,loginStore,editStore,registerClient,loginClient,editClient,
    registerPromotion,indexPromotion,readPromotion,editPromotion,deletePromotion,registerAttendance,editAttendance,
    deleteAttendance,readAttendance
} = require('./config/imports');


//Rotas das lojas
routes.get('/stores',showStore.showStore );
routes.post('/store',registerStore.registerStore );
routes.post('/login-store',loginStore.authenticate );
routes.put('/edit-store',middleware,editStore.editStore);

//Rotas do cliente
routes.post('/client',registerClient.registerClient);
routes.post('/login-client',loginClient.authenticate);
routes.put('/edit-client',middlewareuser,editClient.editClient);

//Rotas das promoções
routes.post('/promotion',middleware,registerPromotion.registerPromotion);
routes.get('/promotion',middleware,indexPromotion.index);
routes.get('/promotion-read',middleware,readPromotion.readPromotion);
routes.put('/edit-promotion',middleware,editPromotion.editPromotion);
routes.delete('/delete-promotion',middleware,deletePromotion.deletePromotion);

//Rotas dos atendimentos
routes.post('/attendance',middlewareuser,registerAttendance.registerAttendance);
routes.put('/edit-attendance',middlewareuser,editAttendance.editAttendance);
routes.delete('/delete-attendance',middlewareuser,deleteAttendance.deleteAttendance);
routes.get('/attendance-read',middlewareuser,readAttendance.readAttendance);


module.exports = routes;