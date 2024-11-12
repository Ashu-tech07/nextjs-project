import { useRouter } from 'next/router';
import { details } from './data';

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