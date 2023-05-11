import '../../assets/styles/dashboardStyles/ProjectPage.scss'
import filelogo from '../../assets/svg/icons8-file.svg'
import pluslogo from '../../assets/svg/icons8-plus-math-50.png'
import { Link } from 'react-router-dom'

export const ProjectPage: React.FC = () => {
    return (
        <div className='project-page'>
            <Link to='/templates' className='router-link' >
            <button className='new-project-button'>
                <span className='filelogo-name-span'>
                    <img src={filelogo} alt="" />
                    New Project
                </span>
                <img className='plus' src={pluslogo} alt="" />
            </button>
            </Link>
            <div className="recent-projects">
                <h3 className='recent-projects-header'>Recent</h3>
            </div>
        </div>
    )
}