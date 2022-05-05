import { useState } from 'react'
import { Input } from 'reader/atoms';
import styled from 'styled-components';

interface Props {
    openModal: boolean;
    setModal: any;
    feature?: string;
    section?: any;
    page?: any;
    handleNewFeatures?(name: any, pageName: any, feature: {}): void;
}

const SectionSize = ({ openModal, handleNewFeatures, setModal, feature, section, page }: Props) => {
    const [leftM, setLeftM] = useState<number>(5);
    const [leftP, setLeftP] = useState<number>(5);
    const [rightM, setRightM] = useState<number>(5);
    const [rightP, setRightP] = useState<number>(5);
    const [topM, setTopM] = useState<number>(5);
    const [topP, setTopP] = useState<number>(5);
    const [bottomM, setBootomM] = useState<number>(5);
    const [bottomP, setBootomP] = useState<number>(5);

    return <div style={{ position: 'relative' }}>
        {openModal && <Styled>
            <Input
                type="number"
                min={0}
                value={feature === 'margin' ? leftM : leftP}
                onChange={(e) => {
                    feature === 'margin' ? setLeftM(Number(e.target.value)) : setLeftP(Number(e.target.value))
                    feature === "margin" && handleNewFeatures(section, page, { marginLeft: Number(leftM) })
                    feature === "padding" && handleNewFeatures(section, page, { paddingLeft: Number(leftP) })
                }}
                width={'50px'}
            />
            <Input
                type="number"
                min={0}
                value={feature === 'margin' ? rightM : rightP}
                onChange={(e) => {
                    feature === 'margin' ? setRightM(Number(e.target.value)) : setRightP(Number(e.target.value))
                    feature === 'margin' && handleNewFeatures(section, page, { marginRight: Number(rightM) })
                    feature === 'padding' && handleNewFeatures(section, page, { paddingRight: Number(rightP) })
                }}
                width={'50px'}
            />
            <Input
                type="number"
                min={0}
                value={feature === 'margin' ? topM : topP}
                onChange={(e) => {
                    feature === 'margin' ? setTopM(Number(e.target.value)) : setTopP(Number(e.target.value))
                    feature === 'margin' && handleNewFeatures(section, page, { marginTop: Number(topM) })
                    feature === 'padding' && handleNewFeatures(section, page, { paddingTop: Number(topP) })
                }}
                width={'50px'}
            />
            <Input
                type="number"
                min={0}
                value={feature === 'margin' ? bottomM : bottomP}
                onChange={(e) => {
                    feature === 'margin' ? setBootomM(Number(e.target.value)) : setBootomP(Number(e.target.value))
                    feature === 'margin' && handleNewFeatures(section, page, { marginBottom: Number(bottomM) })
                    feature === 'padding' && handleNewFeatures(section, page, { paddingBottom: Number(bottomP) })
                }}
                width={'50px'}
            />
        </Styled>}
    </div>
}

export default SectionSize;

const Styled = styled.div`
    position: absolute;
    top: 10px;
    left: 30px;
`