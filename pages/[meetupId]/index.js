import MeetupDetails from "@/components/meetups/MeetupDetails";

function MeetupDetail() {

    return <MeetupDetails
        title='The first meetup'
        image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
        address='Varanasi, UP, India'
        description='This is first meetup'
    />
}

export async function getStaticPaths(){

    return {
        fallback: false,
        paths:[
            {
                params:{
                    meetupId:'m1',
                }
            },
            {
                params:{
                    meetupId:'m2',
                }
            },
            {
                params:{
                    meetupId:'m3',
                }
            }
        ]
    }
}
export async function getStaticProps(context) {
    
    const meetupId=context.params.meetupId;

    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
                id: meetupId,
                title: 'The first meetup',
                address: 'Varanasi, UP, India',
                description: 'This is first meetup'
            }
        }
    }
}
export default MeetupDetail;