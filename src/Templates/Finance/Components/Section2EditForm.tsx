import '../../../assets/styles/templatesStyles/Finance/Section2EditForm.scss'

export const Section2EditForm: React.FC = () => {
    return (
        <div className='section2' id='section2'>
            <h4>Section 2</h4>
            <span className='label-input-span'>
                <label htmlFor="">Header</label>
                <input type="text" name="" id="" className='header-input-style'/>
            </span>
            <span className='label-input-span'>
                <label htmlFor="">Parargraph</label>
                <input type="text" name="" id="" className='header-input-style'/>
            </span>
            <span className='upload-image'>
                <label htmlFor="">Upload Image</label>
                <input type="file" accept='image/*'/>
            </span>
        </div>
    )
}