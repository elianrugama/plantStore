import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function Tabss() {
  const [value, setValue] = useState('all');


  return (
    <Box sx={{ width: '100%' }}>
      <Tabs aria-label="basic tabs example" scrollButtons="auto" variant="scrollable">

        <Tab
          label={
            <Button variant={
                value === 'all' ? 'contained' : 'text'} color="success" onClick={
                    () => {
                        setValue('all')
                    }
                }>
              All
            </Button>
          }
        />
        <Tab
          label={
            <Button variant={
                value === 'Outdoors' ? 'contained' : 'text'} color="success" onClick={
                    () => {
                        setValue('Outdoors')
                    }
                }>
              Outdoors
            </Button>
          }
        />
        <Tab
        label={
          <Button 
            variant={
                value === 'Indoors' ? 'contained' : 'text'} color="success" onClick={
                    () => {
                        setValue('Indoors')
                    }
                }>

            Indoors
          </Button>
        }
      />
      <Tab
      label={
        <Button 
            variant={value === 'Garden' ? 'contained' : 'text'} color="success" onClick={
                    () => {
                        setValue('Garden')
                    }
                }>

          Garden
        </Button>
      }
    />
      </Tabs>
    </Box>
  );
}
