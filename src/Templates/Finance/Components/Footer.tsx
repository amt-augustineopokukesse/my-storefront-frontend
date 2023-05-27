import facebooklogo from '../../../assets/svg/templates-svg/facebook.svg'
import instagramlogo from '../../../assets/svg/templates-svg/instagram.svg'
import twitterlogo from '../../../assets/svg/templates-svg/twitter.svg'
import '../../../assets/styles/templatesStyles/Finance/Footer.scss'
import TemplateData from '../../../staticDB/FinanceData'
import { useAppSelector } from '../../../store'
  
export const Footer: React.FC = () => {

    const project = useAppSelector((state) => state.project);
    
  
    return (
        <div className='footer' 
        style={TemplateData.footer.style}>
            <span className='footer-logo' 
            style={TemplateData.footer.components.globalFontStyle.headerStyle}>
                {project.name}
            </span>
            <div className='footer-text' 
            style={TemplateData.footer.components.globalFontStyle.textStyle}>
                <p>{project.description}</p>
                <p>{project.address !== "Add your Address" ? project.address : ""}</p>
                <p>{project.location !== "Add your location" ? project.location : ""}</p>
            </div>
            <div className='contact-span'>
                <span className='social-media-span'>
                    <a href={project.facebookURL || "https://www.facebook.com"}><img src={facebooklogo} alt="" /> </a>
                    <a href={project.instagramURL || "https://www.instagram.com"}><img src={instagramlogo} alt="" /></a>
                    <a href={project.twitterURL || "https://www.instagram.com"}><img src={twitterlogo} alt="" /></a> 
                </span>
                <p>{TemplateData.footer.components.p1.content}</p>
                <p>{project.phoneNumber !== "024 12 345 6789" ? project.phoneNumber : "Store has no contact"}</p>
            </div>
        </div>
    )
}