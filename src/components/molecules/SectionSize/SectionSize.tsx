import { margin } from '@mui/system';
import React, { useState } from 'react'
import { Input } from 'reader/atoms';

interface Props {
    openModal: boolean;
    setModal: any;
    feature?: string;
    section?: any;
    page?: any;
    handleNewFeatures?(name: any, pageName: any, feature: {}): void;
}

const SectionSize = ({ openModal, handleNewFeatures, setModal, feature, section, page }: Props) => {
    const [left, setLeft] = useState<number>(5);
    const [left1, setLeft1] = useState<number>(5);
    const [right, setRight] = useState<number>(5);
    const [top, setTop] = useState<number>(5);

    return <div style={{position:'relative'}}>
        {openModal && <div>
            <Input type="number"
                value={feature === "margin" ? left : left1}
                onChange={(e) => {
                    feature === 'margin' ? setLeft(Number(e.target.value)) : setLeft1(Number(e.target.value))
                    feature === "margin" && handleNewFeatures(section, page, { marginLeft: Number(left) })
                    feature === "padding" && handleNewFeatures(section, page, { paddingLeft: Number(left1) })
                }}
                width={'50px'}
            />
            <button onClick={() => setModal(false)}>Close</button>
        </div>}
    </div>
}

export default SectionSize;