process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

if (process.env.NODE_ENV === 'dev') {
  require('dotenv').config();
}
const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;

/*  will: HLDhqU0fRlYeDZWn */
process.env.MONGO_URI = `mongodb+srv://${mongoUser}:${mongoPass}@cluster0-ctnik.mongodb.net/tech-impresoras`;
