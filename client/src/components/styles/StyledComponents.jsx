import { styled } from '@mui/material';
import {Link as LinkComponent } from 'react-router-dom';
import { grayColor } from '../../constants/color';

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



export const InputBox = styled("input")`
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      padding: 0 3rem;
      border-radius: 1.5rem;
      background-color: #EDEADE;
`
