import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';

const Playground = () => {
    const [isOpen, setIsOpen] = useState(false);
    const playgroundContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div style={playgroundContainerStyle}>
            <h1>Modal Playground</h1>
            <Button onClick={openModal}>Open Modal</Button>
            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                layoutProps={{
                    width: '400px',
                    height: '200px',
                }}
                visualProps={{
                    bgColor: '#ffffff',
                    fontColor: '#000000',
                    popupDirection: 'left-fit',
                }}
                addOverlay={true}
            >
                <h2>This is a modal!</h2>
                <p>You can put any content here.</p>
            </Modal>
        </div>
    );
};

export default Playground;
