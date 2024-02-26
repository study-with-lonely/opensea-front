import React from 'react';
import {Modal} from "@mui/material";

const ImageModal = (props) => {
    const {open, handleClose, image} = props;

    return open && (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <img
                    src={image.img}
                    style={{
                        position: 'absolute',
                        left: '25%',
                        right: '25%',
                        top: '25%',
                        bottom: '25%',
                        margin: 'auto',
                        border: '2px solid white',
                        borderRadius: '4px',
                        objectFit: 'contain',
                        maxHeight: '80vh'
                    }}
                    alt={image.title}
                    loading="lazy"
                />
            </Modal>
        </>
    );
};

export default ImageModal;