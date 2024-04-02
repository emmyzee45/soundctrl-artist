import React, { useState, useEffect, SetStateAction } from 'react';
import { Snackbar, IconButton, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { alpha } from '@mui/material/styles';

interface NotificationProps {
  message: string;
  type: 'success' | 'error'; 
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
}

const Notification = ({ message, type, show, setShow }: NotificationProps) => {
  console.log("incoming", show)
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const [open, setOpen] = useState(false);
  console.log("inner", open)
  
  useEffect(() => {
    show && setOpen(show);
  }, [show]);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={show}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
        className={`SnackbarContent-root ${type === 'success' ? 'SnackbarItem-variantSuccess' : 'SnackbarItem-variantError'}`}
        sx={{
          width: '100%',
          padding: theme.spacing(1),
          margin: theme.spacing(0.25, 0),
          boxShadow: theme.customShadows.z8,
          borderRadius: theme.shape.borderRadius,
          color: theme.palette.grey[isLight ? 0 : 800],
          backgroundColor: theme.palette.grey[isLight ? 900 : 0],
          [theme.breakpoints.up('md')]: {
            minWidth: 240,
          },
        }}
        style={{
          backgroundColor: "transparent",
          color: theme.palette.getContrastText(type === 'success' ? theme.palette.success.main : theme.palette.error.main),
        }}
      />
    </>
  );
};

export default Notification;