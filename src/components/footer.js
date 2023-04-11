import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
    return(<div className='socialmedia'>
            <div className='socialmedia-links'>
                <a className = "instagram" href="https://www.instagram.com/claws_n_wings/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer"><span><InstagramIcon></InstagramIcon></span></a>
                <a className = "facebook" href="https://m.facebook.com/p/Claws-n-Wings-100063716814944/?_rdr" target="_blank" rel="noreferrer"><span><FacebookIcon></FacebookIcon></span></a>
            </div>
            <div className='address'>
                <span className='address-text'>Golden leaf apartment, Saibaba Nagar, Alwal, Hyderabad, Telangana 500010, India</span>
                <span className='contact'>Contact: +91 9000770732</span>
                <span>info@claws_n_wings.com</span>
            </div>

        </div>);
}
export default Footer;