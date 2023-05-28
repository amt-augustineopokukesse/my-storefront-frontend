import '../../../assets/styles/templatesStyles/Finance/TopBarForm.scss'

export const TopBarForm: React.FC = () => {
    return(
        <div className="section1-form">
            <h4>Section 1</h4>
            <span className='label-input-span'>
                <label htmlFor="logo">Logo</label>
                <input type="text" name='logo' />
            </span>
            <span className='font-color-span'>
                <span className='label-input-span'>
                    <label htmlFor="font-size">Font Size</label>
                    <input type="number" minLength={1}  maxLength={2} min={30} 
                    max={40} name='font-size'/>
                </span>
                <span className='label-input-span'>
                        <label htmlFor="color">Colour</label>
                        <input type="color" />
                </span>
            </span>
                
            <span className='label-input-span'>
                <label htmlFor="button1">Text</label>
                <input type="text" name='button 1'/>
            </span>
            <span className='label-input-span'>
                    <label htmlFor="button1">Colour</label>
                    <input type="color" name='button 1'/>
            </span>
              
             <span className='label-input-span'>
                <label htmlFor="button2">Text</label>
                <input type="text" name='button 2'/>
            </span>
            <span className='label-input-span'>
                    <label htmlFor="button1">Colour</label>
                    <input type="color" name='button 2'/>
            </span>
            <span className='label-input-span'>
                    <label htmlFor="button1">Background colour</label>
                    <input type="color" name='button 2'/>
            </span>
              
        </div>
    )
}