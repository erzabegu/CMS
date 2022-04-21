import { StyledHeader } from './styled';
import { Image, UserAvatar } from 'reader/atoms';
import AxiansImage from '../../assets/images/axians.png';
import { theme } from 'reader/styles';

const Header = () => {
    return <StyledHeader>
        <Image
            src={AxiansImage}
            height={50}
            width={100}
            style={{ objectFit: 'contain' }} />
        <UserAvatar
            name={'Ereza'}
            height={'30px'}
            width={'30px'}
            backgroundColor={`${theme.colors.primary.axiansPink}`} />
    </StyledHeader>
}

export default Header  