import React from 'react';
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const GalleryImage = (props) => {
    const {item, setOpen} = props;

    return (
        <>
            <ImageListItem cols={item.cols || 1} rows={item.rows || 1} onClick={setOpen}>
                <img
                    {...srcset(item.img, 360, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    sx={{
                        background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                    }}
                    title={
                        <Typography
                            variant="body1"
                            gutterBottom
                            sx={{
                                m: 0,
                                textAlign: 'start',
                                fontWeight: 600
                            }}
                        >
                            {item.title}
                        </Typography>
                    }
                    subtitle={
                        <Typography
                            variant="body1"
                            gutterBottom
                            sx={{
                                textAlign: 'start',
                                fontWeight: 400,
                                fontSize: '.8em'
                            }}
                        >
                            {item.author}
                        </Typography>
                    }
                    position="top"
                />
            </ImageListItem>
        </>
    );
};

export default GalleryImage;