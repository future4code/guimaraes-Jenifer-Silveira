import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import { StyledToolBar} from "./styled"


export default function ButtonAppBar(props) {
  return (
    
      <AppBar position="static">
        <StyledToolBar>
          
            
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> STAR WARS </Typography>
          
        </StyledToolBar>
      </AppBar>
    
  );
}
