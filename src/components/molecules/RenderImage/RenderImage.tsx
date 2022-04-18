import React, { useState } from 'react'
import { Image } from 'reader/atoms'
import styled from 'styled-components';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const RenderImage = () => {

    const [source, setSource] = useState<any>({});
    const [edit, setEdit] = useState<boolean>(false)
    const [height, setHeight] = useState<number>(100)
    const [width, setWidth] = useState<number>(100)

    const hiddenFileInput = React.useRef(null);
    const handleClick = (e: any) => {
        hiddenFileInput.current.click();
    };

    const imageHandler = (e: any) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setSource({ profileImg: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };

    return <div style={{ padding: '5px' }}>
        {!source.profileImg &&
            <><UploadFileIcon style={{ cursor: 'pointer' }} onClick={handleClick} />
                <input ref={hiddenFileInput} style={{ display: 'none' }} type="file" accept="image/png, image/jpeg" onChange={imageHandler} />
            </>}
        {source.profileImg && <Image src={source.profileImg} height={height} maxWidth={width} onClick={() => setEdit(!edit)} />}
        {
            edit && <div style={{ position: 'absolute' }} >
                <StyledInput type="number" max={500} min={10} value={height} onChange={(e) => setHeight(Number(e.target.value))} />
                <StyledInput type="number" max={500} min={10} value={width} onChange={(e) => setWidth(Number(e.target.value))} />
            </div>
        }
    </div>
}

export default RenderImage

const StyledInput = styled.input`
    background-color: #e6e6e6;
    margin: 2px;
    outline: none;
    border: none;
    border-bottom: 1px solid lightgrey;
`