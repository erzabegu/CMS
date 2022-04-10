import React from 'react'
import Avatar from '@mui/material/Avatar';
import { theme } from "reader/styles";

interface Props {
    name: string;
}

const UserAvatar = ({ name }: Props) => {
    return <Avatar style={{ height: '30px', width: '30px', backgroundColor: `${theme.colors.primary.axiansPink}` }}>{name[0]}</Avatar>
}

export default UserAvatar