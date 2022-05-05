import { DragPreviewImage, useDrag } from 'react-dnd';

import Text from '../../assets/images/text.png';
import PlaceholderImage from '../../assets/images/PlaceholderImage.png';
import ChartPlaceholder from '../../assets/images/nn.png';
import ListPlaceholder from '../../assets/images/listPlaceholder.png';
import { StyledWrapper } from './styled';
import { CodeIcon, DonutLargeSharpIcon, FormatListBulletedIcon, ImageIcon, ListIcon, TextFieldsIcon } from 'reader/icons';
import { useState } from 'react';

interface DropResult {
    name?: string;
    pageName?: string;
    setFileDetails?: any;
    children: any;
    tipi?: any;
    src?: string;
    chartType?: any;
    handleDroppableEvent?(dropResult: DropResult): void;
    onClick?(): void;
}


const RenderIcons = (iconName: string) => {
    switch (iconName) {
        case 'TextFieldsIcon':
            return <TextFieldsIcon />
        case 'ImageIcon':
            return <ImageIcon />
        case 'DonutLargeSharpIcon':
            return <DonutLargeSharpIcon />
        case 'ListIcon':
            return <FormatListBulletedIcon />
        case 'CodeIcon':
            return <CodeIcon />
    }
}

const RenderSrc = (src: string) => {
    switch (src) {
        case 'Text':
            return Text
        case 'Image':
            return PlaceholderImage
        case 'Chart':
            return ChartPlaceholder
        case 'List':
            return ListPlaceholder
        // case 'Code'
    }
}

const WidgetList = ({ handleDroppableEvent, children, tipi, src, chartType }: DropResult) => {

    const [openDrag, setOpenDrag] = useState<boolean>(false)
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: 'box',
        item: { name: 'itemi' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<DropResult>()
            if (item && dropResult) {
                handleDroppableEvent({ ...dropResult, tipi: tipi })
                alert(`You dropped ${item.name} into section: ${dropResult.name} page: ${dropResult.pageName} type: ${tipi}! `)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))

    return <StyledWrapper ref={drag} onClick={(e) => { setOpenDrag(!openDrag) }}>
        <DragPreviewImage connect={preview} src={RenderSrc(src)} />
        {/* {console.log((RenderSrc(src) === 'http://localhost:3000/5db805baa1e23f5ff0faeabea753fc21.png'), 'source')} */}
        {/* {openDrag && <WidgetList handleDroppableEvent={handleDroppableEvent} tipi={"chart1"} src={RenderSrc(src)} />} */}
        {/* {openDrag && chartType.map((chart: any) => <WidgetList
            handleDroppableEvent={handleDroppableEvent}
            children={chart.iconName}
            tipi={chart.type}
        />)} */}
        {RenderIcons(children)}
        {/* {RenderSrc(src) === 'http://localhost:3000/5db805baa1e23f5ff0faeabea753fc21.png' && openDrag && <WidgetList handleDroppableEvent={handleDroppableEvent} children={"erza"} tipi={'chart1'} src="" />} */}
    </StyledWrapper>
}

export default WidgetList