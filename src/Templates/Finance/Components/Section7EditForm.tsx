import '../../../assets/styles/templatesStyles/Finance/Section7EditForm.scss'

export const Section7EditForm: React.FC = () => {
    return (
        <div className="section7-form">
            <h4>Section 7</h4>
            <span className='label-input-span'>
                <label htmlFor="logo">Logo</label>
                <input type="text" name='' />
            </span>
            <span className='label-input-span'>
                <label htmlFor="">Text</label>
                <input type="text" name='' />
            </span>
            <span className='label-input-span'>
                <label htmlFor="">Contact 1</label>
                <input type="number" name='' />
            </span>
            <span className='label-input-span'>
                <label htmlFor="">Contact 2</label>
                <input type="number" name='' />
            </span>
            <span className="color-color-span">
                <span className='label-input-span'>
                    <label htmlFor="">Text Colour</label>
                    <input type="color" name='' />
                </span>
                <span className='label-input-span'>
                    <label htmlFor="">Background Colour</label>
                    <input type="color" name='' />
                </span>
            </span>
        </div>
    )
}