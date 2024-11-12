import { details } from './data';
import Link from 'next/link';

function AboutUsPage() {
    return (
        <div>
            <ul>
                {
                    details.map(member =>
                        <li key={member.id}>
                            <Link href={`aboutus/${member.id}`}>{member.name}</Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default AboutUsPage;