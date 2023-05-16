import facebooklogo from '../../../assets/svg/templates-svg/facebook.svg'
import instagramlogo from '../../../assets/svg/templates-svg/instagram.svg'
import twitterlogo from '../../../assets/svg/templates-svg/twitter.svg'
import '../../../assets/styles/templatesStyles/Finance/Footer.scss'
import TemplateData from '../../../staticDB/FinanceData'

export const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <span className='footer-logo'>
                {TemplateData.footer.header}
            </span>
            <span className='footer-text'>
                {TemplateData.footer.text}
            </span>
            <span className='contact-span'>
                <span className='social-media-span'>
                    <a href=""><img src={facebooklogo} alt="" /> </a>
                    <a href=""><img src={instagramlogo} alt="" /></a>
                    <a href=""><img src={twitterlogo} alt="" /></a> 
                </span>
                <p>{TemplateData.footer.p1}</p>
                <p>{TemplateData.footer.p2}</p>
            </span>
        </div>
    )
}