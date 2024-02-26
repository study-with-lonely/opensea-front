import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import GalleryImage from "./GalleryImage";
import ImageModal from "./ImageModal";

const itemData = [
    {
        img: '/img/os1.jpg',
        title: 'На переходе',
        rows: 2,
        cols: 2,
    },
    {
        img: '/img/os8.jpeg',
        title: 'Подготовка',
        author: '@sergey',
    },
    {
        img: '/img/os3.jpg',
        title: 'На воду',
    },
    {
        img: '/img/os0.jpg',
        title: 'На занятии',
        cols: 2,
    },
    {
        img: '/img/os5.jpg',
        title: 'Соревнования',
        cols: 2,
    },
    {
        img: '/img/os2.jpg',
        title: 'Команда',
        rows: 2,
        cols: 2,
    },
    {
        img: '/img/os7.jpg',
        title: 'Награждение победителей',
    },
    {
        img: '/img/os4.jpg',
        title: 'За честь города',
    }
];


function Gallery() {
    const [openImageModal, setOpenImageModal] = React.useState(null);

    return (
        <ImageList
            sx={{
                width: '100vw',
                margin: '68.5px 0 0 0',
                height: `calc(100vh - 68.5px)`,
                padding: '6px'
            }}
            variant="quilted"
            cols={4}
            rowHeight={360}
        >
            {itemData.map((item) => (
                <GalleryImage key={item.img} item={item} setOpen={() => setOpenImageModal(item)}/>))}
            <ImageModal open={openImageModal !== null} handleClose={() => setOpenImageModal(null)}
                        image={openImageModal}/>
        </ImageList>
    );
}

export default Gallery;
