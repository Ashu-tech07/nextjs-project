import { MongoClient } from "mongodb";

async function handler(req, res) {
    if(req.method=== 'POST'){
        const data=req.body;

        const client= await MongoClient.connect('mongodb+srv://aybhu96:uO9frASk9bATnESZ@cluster0.1ygz9.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')
        const db=client.db();
        
        const meetupsCollection= db.collection('meetups');

       const result= await meetupsCollection.insertOne(data);
       console.log(result);

       client.close();

       res.json({ message: 'Meetup inserted!'});
    }
}

export default handler;