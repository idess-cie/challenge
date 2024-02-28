const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const app_env = process.env.REACT_APP_ENV;

const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;
function errorConnectToServer (callback) {
    client.connect(function (err, db) {
        if (db) {
            _db = db.db("MERN-Training-Challenge");
        } else {
            errorConnectToServer(callback)
        }
        return callback(err);
    });
}

module.exports = {
    connectToServer: function (callback){
        client.connect(function (err, db) {
            if (db) {
                _db = db.db("MERN-Training-Challenge");
            }
            return callback(err);
        });
    },
    getDb: function () {
        return _db;
    },
    getotherDB: async function (db_name) {
        return new Promise((callback)=> {
            client.connect(function (err, db) {
                if (db) {
                    var other_db = db.db(db_name);
                }
                callback(false);
            });
        });
    }
}