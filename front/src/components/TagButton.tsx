
import React, { FC, ReactNode } from 'react'
import Button, { ButtonProps } from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';


interface TagButtonProps {
    icon?: ReactNode,
    selected?: boolean,
    children?: ReactNode,
    className?: string,
    onClick?: (a: any) => void;
}

const TagButton: FC<TagButtonProps> =
    ({ icon,
        children,
        selected,
        className,
        onClick
    }) => {

        const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
            color: theme.palette.getContrastText(grey[500]),
            backgroundColor: selected ? '#fff' : grey[100],
            boxShadow: 'none',
            textTransform: 'none',
            width: '100%',
            '&:hover': {
                backgroundColor: '#fff',
                boxShadow: 'none',
            },
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: 16,
            letterSpacing: 0.15,
        }));

        return (
            <ColorButton
                className={className}
                startIcon={icon}
                sx={{ justifyContent: "flex-start" }}
                fullWidth
                onClick={onClick}
            >
                {children}
            </ColorButton>
        )
    }

export default TagButton