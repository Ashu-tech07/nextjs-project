import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

function NewMeetupPage() {
    const router=useRouter();

   async function addMeetupHandler(enteredData){

       const response = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(enteredData),
        headers:{
            'Content-Type': 'application/json'
        }
       }) 

       const data= await response.json();

       console.log(data);
       router.push('/')
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}

export default NewMeetupPage;