import { StyledHeader } from './styled';
import { Image, UserAvatar } from 'reader/atoms';
import AxiansImage from '../../images/axians.png'

const Header = () => {
    return <StyledHeader>
        <Image src={AxiansImage} height={50} maxWidth={100} style={{objectFit:'contain'}}/>
        <UserAvatar name={'Ereza'}></UserAvatar>
    </StyledHeader>
}

export default Header 