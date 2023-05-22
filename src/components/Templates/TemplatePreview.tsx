import { useState } from 'react'
import '../../assets/styles/templatesStyles/TemplatesPreview.scss'
import Templates from '../../staticDB/templateData'
import Modal from 'react-modal'
import { Finance } from '../../Templates/Finance/Pages/Finance'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../store'
import { setSelectedTemplate } from '../../Redux/SelectedTemplateSlice'
import EcommerceHome from '../../Templates/Ecommerce/Pages/EcommerceHome'
export interface templatesType{
    name: string,
    imgSrc: string,
    description: string
}
interface TemplatePreviewProps{
    category: string
}

export const TemplatesPreview: React.FC<TemplatePreviewProps> = (props) => {
    const dispatch = useAppDispatch();
    const [openModal, setModal] = useState(false);
    const [selectedTemplate, setClickedTemplate] = useState('');
    const { category } = props;
    
    const categoryData = Templates.find((c) => c.name === category);

    if(!categoryData){
        return null;
    }

    const handleModal = (event: React.MouseEvent<HTMLDivElement>) => {
        setModal(!openModal);
        setClickedTemplate(event.currentTarget.id);
        dispatch(setSelectedTemplate(event.currentTarget.id));
    }

    const getId = () => {
        if (selectedTemplate === 'Ecommerce1') {
            window.location.href= './templates/ecommerce'
        } else if(selectedTemplate === 'Ecommerce2'){
            window.location.href = ''
        }

        
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
                    { selectedTemplate === 'Finance1' ? <Finance /> : '' }
                    { selectedTemplate === 'Ecommerce1' ? <EcommerceHome /> : '' }
                    <Link to='edit-template-page'>
                    <button className='edit-template-button' onClick={getId}>
                        Edit
                    </button>
                    </Link>
                </Modal>
            </div>
            ))}
        </div>
    )
}