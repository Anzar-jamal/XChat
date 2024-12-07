import { styled } from '@mui/material';
import {Link as LinkComponent } from 'react-router-dom';

export const VisuallyHiddenInput = styled("input")({
  position: 'absolute',
  width: 1,
  height: 1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
  border: 0,
  margin: -1, // Corrected this line
});




export const Link = styled(LinkComponent)`
    
    text-decoration: none;
    color: black;
    padding: 1rem;

    &:hover{
    background-color: #f0f0f0;
    }

`;
