
import React, { FC, ReactNode } from 'react'
import Button, { ButtonProps } from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import palette from './../../theme/palette';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: palette.secondaryBackground.default,
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