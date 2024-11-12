import { useRouter } from 'next/router';

const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
]


function AboutUsMember() {

    const router = useRouter();
    const id = router.query.id;
    // or const {id}=router.query;

    const member = details.find((member) => member.id === parseInt(id))

    return (
        <div>
            {member ? (<div>
                <h1>{member.name}</h1>
                <p>Role: {member.role}</p>
            </div>)
                : (<h1>Developer doesn't exist</h1>)
            }
        </div>
    )
}

export default AboutUsMember;