import { FileRejection } from 'react-dropzone';
// @mui
<<<<<<< HEAD
import { alpha } from '@mui/material/styles';
=======
import { alpha } from '@mui/system';
>>>>>>> 907b60ac692199d52a0dfdb2db536c01a786ca99
import { Box, Paper, Typography } from '@mui/material';
// type
import { CustomFile } from './type';
// utils
import { fData } from '../../utils/formatNumber';

// ----------------------------------------------------------------------

type Props = {
  fileRejections: FileRejection[];
};

export default function RejectionFiles({ fileRejections }: Props) {
  return (
    <Paper
      variant="outlined"
      sx={{
        py: 1,
        px: 2,
        mt: 3,
        borderColor: 'error.light',
        bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
      }}
    >
      {fileRejections.map(({ file, errors }) => {
        const { path, size }: CustomFile = file;

        return (
          <Box key={path} sx={{ my: 1 }}>
            <Typography variant="subtitle2" noWrap>
              {path} - {fData(size)}
            </Typography>

            {errors.map((error) => (
              <Typography key={error.code} variant="caption" component="p">
                - {error.message}
              </Typography>
            ))}
          </Box>
        );
      })}
    </Paper>
  );
}
