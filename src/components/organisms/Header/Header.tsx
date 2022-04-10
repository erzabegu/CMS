import { StyledHeader } from './styled';
import { Image, UserAvatar } from 'reader/atoms';
// import AxiansImage from '../../images/axians.png'

const Header = () => {
    // {console.log(AxiansImage,'axiansImAGE')}
    return <StyledHeader>
        <Image src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_bjuo31elkGbmweJkXnaTPTBIpydFwZAE7wRAPp7uhx8e64K81eDWjCu2GaTVfx_5w&usqp=CAU`} />
        <UserAvatar name={'Ereza'}></UserAvatar>
    </StyledHeader>
}

export default Header 