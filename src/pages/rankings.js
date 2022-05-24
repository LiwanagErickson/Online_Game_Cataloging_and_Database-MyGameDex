import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import UserLayout from '../components/UserLayout';
import { Typography } from '@mui/material';

export default function rankings() {
  return (
    <Typography>
      
    </Typography>
  );
}
rankings.getLayout = function getLayout(page){
  return <UserLayout>{page}</UserLayout>
}
