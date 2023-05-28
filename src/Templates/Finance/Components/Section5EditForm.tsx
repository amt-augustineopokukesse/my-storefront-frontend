import '../../../assets/styles/templatesStyles/Finance/Section5EditForm.scss'

export const Section5EditForm: React.FC = () => {
    return (
        <div className="section5-form">
            <h4>Section 5</h4>
            <span className='label-input-span'>
                <label htmlFor="logo">Header</label>
                <input type="text" name='logo' />
            </span>
            <span className='label-input-span'>
                <label htmlFor="logo">Text</label>
                <input type="text" name='logo' />
            </span>
            <span className='label-input-span'>
                <label htmlFor="logo">Background Colour</label>
                <input type="color" name='logo' />
            </span>
            <span className='upload-image'>
                <label htmlFor="">Upload Image</label>
                <input type="file" accept='image/*'/>
            </span>
            
        </div>
    )
}