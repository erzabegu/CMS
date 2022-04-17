import React, { useState } from 'react'
import { Image } from 'reader/atoms'

const RenderImage = () => {

    const [source, setSource] = useState<any>({});

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
        {!source.profileImg && <input type="file" accept="image/png, image/jpeg" onChange={imageHandler} />}
        {source.profileImg && <Image src={source.profileImg} height={120} maxWidth={120} />}
    </div>
}

export default RenderImage