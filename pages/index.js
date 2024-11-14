import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
    {
        id:'m1',
        title:'The first meetup',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address:'Varanasi, UP, India',
        description:'This is first meetup'
    },
{
    id:'m2',
    title:'The second meetup',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address:'Lucknow, UP, India',
    description:'This is second meetup'
},
{
    id:'m3',
    title:'The third meetup',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address:'Noida, UP, India',
    description:'This is third meetup'
},
]
function HomePage(props){
    return <MeetupList meetups={props.meetups} />
}

// export async function getServerSideProps( context){
//     const req=context.req;
//     const res= context.res;

//     //fetch data from an API

//     return {
//         props :{
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps(){
    // fetch data from an API
    const client= await MongoClient.connect('mongodb+srv://aybhu96:uO9frASk9bATnESZ@cluster0.1ygz9.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')
        const db=client.db();
        
        const meetupsCollection= db.collection('meetups');

        const meetups=await meetupsCollection.find().toArray();

        client.close();

    return {
        props: {
            meetups: meetups.map( meetup=> ({
                title:meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate:10
    };
}

export default HomePage;