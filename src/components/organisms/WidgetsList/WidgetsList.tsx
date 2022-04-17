import { DragPreviewImage, useDrag } from 'react-dnd';
import styled from 'styled-components';

import TextFieldsIcon from '@mui/icons-material/TextFields';
import ImageIcon from '@mui/icons-material/Image';
import DonutLargeSharpIcon from '@mui/icons-material/DonutLargeSharp';
import Text from '../../images/Text.png'
import PlaceholderImage from '../../images/placeholderImage.png'
import ChartPlaceholder from '../../images/ChartPlaceholder.png'

interface DropResult {
    name?: string;
    pageName?: string;
    fileDetails?: any;
    setFileDetails?: any;
    handleDroppableEvent?(dropResult: DropResult): void;
    children: any;
    tipi?: any;
    src?: string;
}


const RenderIcons = (iconName: string) => {
    switch (iconName) {
        case 'TextFieldsIcon':
            return <TextFieldsIcon />
        case 'ImageIcon':
            return <ImageIcon />
        case 'DonutLargeSharpIcon':
            return <DonutLargeSharpIcon />
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
    }
}

const WidgetList = ({ fileDetails, handleDroppableEvent, children, tipi, src }: DropResult) => {

    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: 'box',
        item: { name: 'itemi' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<DropResult>()
            if (item && dropResult) {
                handleDroppableEvent({ ...dropResult, tipi: tipi })
                // alert(`You dropped ${item.name} into section: ${dropResult.name} page: ${dropResult.pageName} type: ${tipi}! `)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))

    return <StyledWrapper ref={drag}>
        <DragPreviewImage connect={preview} src={RenderSrc(src)} />
        {RenderIcons(children)}
    </StyledWrapper>
}

export default WidgetList

const StyledWrapper = styled.div`
    display: flex;
    padding: 5px;
`