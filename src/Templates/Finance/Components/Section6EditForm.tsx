import '../../../assets/styles/templatesStyles/Finance/Section6EditForm.scss'

export const Section6EditForm: React.FC = () => {
    return (
        <div className="section6-form">
             <h4>Section 6</h4>
             <span className='upload-image'>
                <label htmlFor="">Upload Image</label>
                <input type="file" accept='image/*'/>
            </span>
        </div>
    )
}