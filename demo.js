var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb+srv://auduongvanhieu:mycandy96@cicocia-xvqu0.mongodb.net/cicociadb', function (err, db) {
    //neu ket noi khong thanh cong thi in ra loi
    if (err) throw err;
    //neu thanh cong thi log ra thong bao
    console.log('Ket noi thanh cong');
    db.close();
    console.log('close thanh cong');
});