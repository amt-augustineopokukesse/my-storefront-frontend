import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import '../../assets/styles/dashboardStyles/ProjectPage.scss'
import filelogo from '../../assets/svg/icons8-file.svg'
import pluslogo from '../../assets/svg/icons8-plus-math-50.png'
import { Link } from 'react-router-dom';

type user = {
    [key: string]: any;
}

export const ProjectPage: React.FC<user> = (props) => {

    const { merchantUser } = props;
    const [ merchantExists, setmerchantExists ] = useState(merchantUser)
    
    useEffect(() => {
        const merchant = localStorage.getItem("merchant");
        if (merchant) {
            setmerchantExists(JSON.parse(merchant));
        }
    }, [])

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "projectName", headerName: "Project Name", width: 180 },
        { field: "projectCategory", headerName: "Category", width: 180 },
        { field: "projectPublished", headerName: "Published", width: 180 },
        { field: "projectAddress", headerName: "Address", width: 180 }
    ]

    const row = (project: any, idx: number) => {
        return { id: idx, projectName: project.name, projectCategory: project.category, projectPublished: `${!project.published ? "Not Published" : "Published"}`, projectAddress: project.address }
    }
 
    const rows = merchantExists ? 
            merchantExists.business.projects.map((project:any, index: number) => row(project, index))
        :   { id: 0, projectName: "",  projectCategory: "", projectPublished: "", projectAddress: "" }
    

    return (
        <div className='project-page'>
            <Link to='templates' className='router-link' >
            <button className='new-project-button'>
                <span className='filelogo-name-span'>
                    <img src={filelogo} alt="" />
                    New Project
                </span>
                <img className='plus' src={pluslogo} alt="" />
            </button>
            </Link>
            <div className="recent-projects">
                {
                    merchantExists && merchantExists.business.projects.length ? 

                    <>
                        <h3 className='recent-projects-header'>Recents</h3>
                        <div style={{ height: 400, width: 'fit-content', margin: "2rem" }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                                }}
                                pageSizeOptions={[5, 10]}
                                checkboxSelection
                            />
                        </div>
                    </>
                    : <h3 className='recent-projects-header'>You have no recent projects</h3>
                }
            </div>
        </div>
    )
}