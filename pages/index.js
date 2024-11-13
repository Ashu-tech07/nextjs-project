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

export async function getStaticProps(){
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}

export default HomePage;