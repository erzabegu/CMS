import { StyledHeader } from './styled';
import { Image, UserAvatar } from 'reader/atoms';
import AxiansImage from '../../images/axians.png'

const Header = () => {
    return <StyledHeader>
        <Image src={AxiansImage} />
        <UserAvatar name={'Ereza'}></UserAvatar>
    </StyledHeader>
}

export default Header 