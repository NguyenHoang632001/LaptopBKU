import { Link } from 'react-router-dom';
import './Contact.scss'
function Contact() {
    return (<div className=' containerContact'>
        Contact pages
        <div className='containerContact'>
            <div className='img1'>
                <div className='img2'></div>
            </div>
            <Link to='/system'> system</Link>
        </div>
    </div>);
}

export default Contact;