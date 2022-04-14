import { useDrag } from 'react-dnd';
import styled from 'styled-components';

import TextFieldsIcon from '@mui/icons-material/TextFields';
import ImageIcon from '@mui/icons-material/Image';
import DonutLargeSharpIcon from '@mui/icons-material/DonutLargeSharp';

interface DropResult {
    name?: string;
    pageName?: string;
    fileDetails?: any;
    setFileDetails?: any;
    handleDroppableEvent?(dropResult: DropResult): void;
    children: any;
    tipi?: any;
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

const WidgetList = ({ fileDetails, handleDroppableEvent, children, tipi }: DropResult) => {

    const [{ isDragging }, drag] = useDrag(() => ({
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
        {RenderIcons(children)}
    </StyledWrapper>
}

export default WidgetList

const StyledWrapper = styled.div`
    display: flex;
    padding: 5px;
`