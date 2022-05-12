
import React, { FC, ReactNode } from 'react'
import Button, { ButtonProps } from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: '#fff',
    boxShadow: 'none',
    textTransform: 'none',
    width: '100%',
    '&:hover': {
        backgroundColor: grey[100],
        boxShadow: 'none',
    },
}));

interface CustomButtonProps {
    icon?: ReactNode,
    children?: ReactNode,
    className?: string,
    onClick?: (a: any) => void;
}

const CustomButton: FC<CustomButtonProps> =
    ({ icon,
        children,
        className,
        onClick
    }) => {
        return (
            <ColorButton
                variant="contained"
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

export default CustomButton