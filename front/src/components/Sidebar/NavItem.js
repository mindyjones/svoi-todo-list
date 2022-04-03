import React from 'react';
import {Link} from 'react-router-dom';

import {Box, ListItemIcon, ListItemButton, Grid} from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import HomeIcon from '@mui/icons-material/Home';

const NavItem = ({tag}) => {
    return (
        <ListItemButton>
            <ListItemIcon>
                <HomeIcon style={{color: tag.color}} />
            </ListItemIcon>
            <ListItemText primary={tag.title} />
        </ListItemButton>
    );
}

export default NavItem;
