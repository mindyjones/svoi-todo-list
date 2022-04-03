import React, {useEffect, useContext} from 'react'
import {observer} from 'mobx-react-lite';
import {Link} from 'react-router-dom';

import MainContext from '../../context/main'
import {Box, Grid} from '@mui/material';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import NavItem from './NavItem';

const Sidebar = () => {
    const {tags} = useContext(MainContext);

    useEffect(() => {
        tags.loadTags()
    }, []);

    // TODO Поиск по id тега
    return (
        <Box
            sx={{
                width: 300,
                height: '100vh',
                backgroundColor: '#f3f5ff',
            }}
        >
            <List
                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Теги
                    </ListSubheader>
                }
            >
                {tags.allTags.map(tag =>
                    <NavItem tag={tag} key={tag.id} />
                )}
            </List>
        </Box>
    )
}

export default observer(Sidebar)