/**
 * Expose
 */

module.exports = {
  db: process.env.MONGODB_URL || 'mongodb://localhost/MyPerfectFit'
  //db: process.env.MONGODB_URL || 'mongodb://azizahtas:bir7cha8su6@ahtastraders-shard-00-00-cvgnu.mongodb.net:27017,ahtastraders-shard-00-01-cvgnu.mongodb.net:27017,ahtastraders-shard-00-02-cvgnu.mongodb.net:27017/MyPerfectFit?ssl=true&replicaSet=AhtasTraders-shard-0&authSource=admin&retryWrites=true&w=majority'
};
