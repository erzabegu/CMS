import React, { useState } from 'react'
import { Image, Input } from 'reader/atoms'
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
        {source.profileImg && <Image src={source.profileImg} height={height} width={width} onClick={() => setEdit(!edit)} />}
        {
            edit && <StyledEditBox>
                <Input type="number" max={500} min={10} value={height} onChange={(e) => setHeight(Number(e.target.value))} />
                <Input type="number" max={500} min={10} value={width} onChange={(e) => setWidth(Number(e.target.value))} />
            </StyledEditBox>
        }
    </div>
}

export default RenderImage

const StyledEditBox = styled.div`
    position: absolute;
    display: flex;
`
