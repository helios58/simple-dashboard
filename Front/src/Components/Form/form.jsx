import React, { useState } from 'react';
import { Box, Typography, FormControl, Select, MenuItem } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

const Form = ({ setStartTimestamp, setEndTimestamp }) => {
  const [dateRange, setDateRange] = useState([null, null]);

  const handleDateChange = (newValue) => {
    setDateRange(newValue);

    const startTimestamp = newValue[0] ? newValue[0].unix() : null;
    const endTimestamp = newValue[1] ? newValue[1].unix() : null;

    setStartTimestamp(startTimestamp); 
    setEndTimestamp(endTimestamp); 
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
      <Typography variant="h6" fontWeight="bold" color="primary.dark">
        Vue d'ensemble
      </Typography>

      <Box display="flex" alignItems="center" gap={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangePicker
            label="Selectionner"
            name="Selectionner"
            value={dateRange}
            onChange={handleDateChange}
            sx={{ backgroundColor: '#fff' }}
            slotProps={{
              textField: {
                size: 'small',
                sx: { width: 250 },
              },
            }}
          />
        </LocalizationProvider>

        <FormControl size="small">
          <Select defaultValue="monthly" sx={{ minWidth: 120, backgroundColor: '#fff' }}>
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Form;