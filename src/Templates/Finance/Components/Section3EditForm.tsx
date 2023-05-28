import '../../../assets/styles/templatesStyles/Finance/Section3EditForm.scss'

export const Section3EditForm: React.FC = () => {
    return(
        <div className='section3-form'>
            <h4>Section 3</h4>
            <span className='label-input-span'>
                <label htmlFor="logo">Button 1</label>
                <input type="text" name='logo' />
            </span>
            <span className='label-input-span'>
                <label htmlFor="">Button 2</label>
                <input type="text" name='logo' />
            </span>
            <span className='color-color-span'>
                <span className='label-input-span'>
                    <label htmlFor="logo">Text Colour</label>
                    <input type="color" name='logo' />
                </span>
                <span className='label-input-span'>
                    <label htmlFor="logo">Background Colour</label>
                    <input type="color" name='logo' />
                </span>
            </span>
                <span className='label-input-span'>
                    <label htmlFor="logo">Active Text Colour</label>
                    <input type="color" name='logo' />
                </span>
                <span className='label-input-span'>
                    <label htmlFor="logo">Active Background Colour</label>
                    <input type="color" name='logo' />
                </span>
                <span className='label-input-span'>
                    <label htmlFor="logo">Text 1</label>
                    <input type="text" name='logo' />
                </span>
                <span className='label-input-span'>
                    <label htmlFor="logo">Text 2</label>
                    <input type="text" name='logo' />
                </span>
                <span className='label-input-span'>
                    <label htmlFor="logo">Text 3</label>
                    <input type="text" name='logo' />
                </span>
                <span className='label-input-span'>
                    <label htmlFor="logo">Text 4</label>
                    <input type="text" name='logo' />
                </span>
                <span className='label-input-span'>
                    <label htmlFor="logo">Text 5</label>
                    <input type="text" name='logo' />
                </span>

        </div>
    )
}