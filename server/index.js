const { MongoClient } = require("mongodb");

const uri = 'mongodb://localhost:27017/';

const client = new MongoClient(uri);

const main = async () => {
  try {
    await client.connect();
    const db = client.db("company");
    const collection = db.collection("employees");
    const data = await collection.find({ salary: { $gt: 1200 } }).toArray();
    // const await collectionpmnpn
    console.log(data);
    return "done";
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
};

main().then(result => console.log(result));
