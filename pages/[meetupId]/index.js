import MeetupDetails from "@/components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetail(props) {

    return <MeetupDetails
        title={props.meetupData.title}
        image={props.meetupData.image}
        address={props.meetupData.address}
        description={props.meetupData.description}
    />
}

export async function getStaticPaths(){
    const client= await MongoClient.connect('mongodb+srv://aybhu96:uO9frASk9bATnESZ@cluster0.1ygz9.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')
        const db=client.db();
        
        const meetupsCollection= db.collection('meetups');

        const meetups=await meetupsCollection.find({}, { _id: 1}).toArray();

        client.close();

    return {
        fallback: false,
        paths: meetups.map((meetup)=> ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))
    }
}
export async function getStaticProps(context) {
    
    const meetupId=context.params.meetupId;
    const client= await MongoClient.connect('mongodb+srv://aybhu96:uO9frASk9bATnESZ@cluster0.1ygz9.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')
        const db=client.db();
        
        const meetupsCollection= db.collection('meetups');

        const selectedMeetup=await meetupsCollection.findOne( { _id:ObjectId(meetupId),});

        client.close();


    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image:selectedMeetup.image,
                address:selectedMeetup.address,
                description:selectedMeetup.description,
            }
        }
    }
}
export default MeetupDetail;