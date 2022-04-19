import React from 'react'
import Avatar from '@mui/material/Avatar';
import { theme } from "reader/styles";

interface Props {
    name: string;
    width: string;
    height: string;
    backgroundColor: string;
}

const UserAvatar = ({ name, width, height, backgroundColor }: Props) => {
    return <Avatar sx={{ height: height, width: width, backgroundColor: backgroundColor }}>{name[0]}</Avatar>
}

export default UserAvatar