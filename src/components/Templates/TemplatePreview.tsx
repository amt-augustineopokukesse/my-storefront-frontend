import { useState } from 'react'
import '../../assets/styles/templatesStyles/TemplatesPreview.scss'
import Templates from '../../staticDB/templateData'
import Modal from 'react-modal'
import { Finance } from '../../Templates/Finance/Pages/Finance'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store'
export interface templatesType{
    name: string,
    imgSrc: string,
    description: string
}
interface TemplatePreviewProps{
    category: string
}

export const TemplatesPreview: React.FC<TemplatePreviewProps> = (props) => {

    // let merchant = localStorage.getItem("merchant") || "";
    // let business_id;

    // try {
    //   let parsedId = JSON.parse(merchant);
    //   business_id = parsedId.business.id;
    //   console.log(business_id);
    // } catch (error) {
    //   // Handle the error or provide a default value
    //   console.error("Error parsing JSON: ", error);
    //   business_id = null; // Or assign a default value
    // }
    
    // const business_id = useAppSelector(state=>)

    const [openModal, setModal] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState('');
    const { category } = props;
    
    const categoryData = Templates.find((c) => c.name === category);

    if(!categoryData){
        return null;
    }

    const handleModal = (event: React.MouseEvent<HTMLDivElement>) => {
        setModal(!openModal);
        setSelectedTemplate(event.currentTarget.id);
    }

    //add to code 
    const gotoTemplate = async() => {
        
        window.location.href =
          selectedTemplate === "Ecommerce1" ? "./templates/ecommerce" : "";
    }
    
    return(
        <div className='template-preview-container'>
            {categoryData.templates.map((template: templatesType) =>(
                <div className="template-preview" onClick={handleModal} id={template.description} key={template.description}>
                <div className="template-img-div"><img src={template.imgSrc} alt=""  className='template-img'/></div>
                <span className="template-text-span"><p className='template-text'>{template.name}</p></span>
                <Modal isOpen={openModal} preventScroll={true} style={{
                    content: {
                        width: '80vw',
                        height: '80vh',
                        display: 'flex',
                        position: 'absolute',
                        top: '0',
                        overflow: 'hidden',
                        contain: 'content',
                        WebkitOverflowScrolling: 'touch',
                        justifyContent: 'center',
                        margin: ' 5vh auto 5vh auto',
                    },
                    overlay: {
                        background: 'rgba(0, 0, 0, 0.25)',
                        backdropFilter: 'blur(2.5px)',
                        padding: '0',
                    }
                }}>
                    
                    
                    <button className='edit-template-button' onClick={gotoTemplate} >
                        Edit
                    </button>
                    
                </Modal>
            </div>
            ))}
        </div>
    )
}