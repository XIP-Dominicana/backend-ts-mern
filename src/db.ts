import mongoose, { ConnectOptions } from 'mongoose';

const {
    DB_URI,
    DB_PASS,
    DB_USER,
    DB_NAME
} = process.env;

const connectionOptions: ConnectOptions = {
    dbName: DB_NAME,
    user: DB_USER,
    pass: DB_PASS
};

(async () => {
    try {
        const db = await mongoose.connect((DB_URI as string), connectionOptions);
        console.info('You are connected to', db.connection?.name);
    }catch (err) {
        console.log(err);
    }
})();