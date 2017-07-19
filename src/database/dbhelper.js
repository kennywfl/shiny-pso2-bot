const Datastore = require("nedb");
var db = new Datastore({
    filename: 'data.db',
    autoload: true
});

exports.save = (record, callback) => {
    db.find({
        _id: record._id
    }, (err, docs) => {
        if (err !== null) {
            console.error(err);
            // callback();
        } else {
            if (docs.length > 0) {
                console.log('Record found, updating to existing data.');
                db.update({
                    _id: record._id
                }, {
                    position: record.position,
                    image: record.image
                }, {}, (err) => {
                    // callback();
                });
            } else {
                console.log(`Nothing found, inserting new record.`);
                db.insert(record, (err, newDoc) => {
                    // callback();
                });
            }
        }
    });
};
