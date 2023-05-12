import '../../assets/styles/templatesStyles/TemplatesPreview.scss'
import Templates from '../../staticDB/templateData'
export interface templatesType{
    name: string,
    imgSrc: string
}
interface TemplatePreviewProps{
    category: string
}

export const TemplatesPreview: React.FC<TemplatePreviewProps> = (props) => {
    const { category } = props
    const categoryData = Templates.find((c) => c.name === category);
    console.log(categoryData)
    if(!categoryData){
        return null;
    }
    return(
        <div className='template-preview-container'>
            {categoryData.templates.map((template: templatesType) =>(
                <div className="template-preview">
                <div className="template-img-div"><img src={template.imgSrc} alt=""  className='template-img'/></div>
                <span className="template-text-span"><p className='template-text'>{template.name}</p></span>
            </div>
            ))}
        </div>
        
    )
}