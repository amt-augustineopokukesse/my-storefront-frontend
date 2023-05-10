import React from 'react'
import '../assets/styles/dashboardStyles/DashboardSideBar.css'
import dashboardlogo from '../assets/grid-view-svgrepo-com.svg'
import projectlogo from '../assets/list-square-svgrepo-com.svg'
import profilelogo from '../assets/briefcase-svgrepo-com.svg'
import { Outlet, Link } from 'react-router-dom'
import supportlogo from '../assets/Vector (1).png'

export const DashboardSideBar: React.FC = () => {
    return (
        <>
        <div className="navigation-sidebar">
            <ul className='navigation-sidebar-list'>
                <li className='dashboard'>
                    <Link to="/" className='link'>
                        <button className='dashboard-button'>
                            <img src={dashboardlogo} alt="" />
                            Dashboard 
                        </button>
                    </Link>
                </li>

                <li className='project'>
                    <Link to="project" className='link'>
                        <button className='dashboard-button'>
                            <img src={profilelogo} alt="" />
                            Project
                        </button>
                    </Link>
                </li>

                <li className='profile'>
                    <Link to="profile" className='link'>
                        <button className='dashboard-button'>
                            <img src={projectlogo} alt="" />
                            Profile
                        </button>
                    </Link>
                </li>

                <li className='support'>
                    <Link to="support" className='link'>
                        <button className='dashboard-button'>
                            <img src={supportlogo} alt="" />
                            Support
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
        <Outlet />
        </>
    )
}