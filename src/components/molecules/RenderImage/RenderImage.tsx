import React, { useEffect, useState } from 'react'
import { Image, Input } from 'reader/atoms'
import styled from 'styled-components';
import UploadFileIcon from '@mui/icons-material/UploadFile';

interface Props {
    item: any;
    handleUpdate?(passedItem: any): void;
}

const RenderImage = ({ item, handleUpdate }: Props) => {

    const hiddenFileInput = React.useRef(null);

    const [edit, setEdit] = useState<boolean>(false)
    const [height, setHeight] = useState<number>(100)
    const [width, setWidth] = useState<number>(100)
    const [loading, setLoading] = useState<boolean>(false)


    const handleClick = (e: any) => {
        hiddenFileInput.current.click();
    };

    const imageHandler = (e: any) => {
        console.log('imageHandler')
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                handleUpdate({ ...item, src: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };

    return <div style={{ padding: '5px' }}>
        {!item.src &&
            <><UploadFileIcon style={{ cursor: 'pointer' }} onClick={handleClick} />
                <input ref={hiddenFileInput} style={{ display: 'none' }} type="file" accept="image/png, image/jpeg" onChange={imageHandler} />
            </>}
        {item.src && <Image src={item.src} height={item.height ? item.height : height} width={item.width ? item.width : width} onClick={() => setEdit(!edit)} />}
        {
            edit && <StyledEditBox>
                <Input type="number" max={500} min={10} width={'40px'} margin={'2px'} value={height} onChange={(e) => {
                    setHeight(Number(e.target.value))
                    setLoading(true)
                    loading && handleUpdate({ ...item, height: height })
                }} />
                <Input type="number" max={500} min={10} width={'40px'} margin={'2px'} value={width} onChange={(e) => {
                    setWidth(Number(e.target.value))
                    handleUpdate({ ...item, width: width })
                }} />
            </StyledEditBox>
        }
    </div>
}

export default RenderImage

const StyledEditBox = styled.div`
    position: absolute;
    display: flex;
`
