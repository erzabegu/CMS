import { StyledHeader } from './styled';
import { Image, UserAvatar } from 'reader/atoms';
import CmsImage from '../../assets/images/cms.jpg';
import { theme } from 'reader/styles';

const Header = () => {
    return <StyledHeader>
        <Image
            src={CmsImage}
            height={50}
            width={200}
            style={{ objectFit: 'contain' }} />
        <UserAvatar
            name={'Ereza'}
            height={'30px'}
            width={'30px'}
            backgroundColor={`${theme.colors.primary.Pink}`} />
    </StyledHeader>
}

export default Header  