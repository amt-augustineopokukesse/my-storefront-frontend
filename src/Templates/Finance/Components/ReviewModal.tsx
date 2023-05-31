import Modal from 'react-modal'
import '../../../assets/styles/templatesStyles/Finance/ReviewModal.scss'

interface modalProp{
    openModal: boolean,
    setOpenModal: (value: boolean) => void
}
export const ReviewModal: React.FC<modalProp> = ({ openModal, setOpenModal }) => {
    const handClose = () => {
        setOpenModal(false);
    }
    return (
        <Modal 
        isOpen={openModal} 
        style={{
            content: {
                width: '50vw',
                height: '60vh',
                display: 'flex',
                position: 'relative',
                top: '10vh',
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
            <button className='close-modal' onClick={handClose}>close</button>

        </Modal>
    )
}