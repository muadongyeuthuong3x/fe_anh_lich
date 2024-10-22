import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function HorizontalCardProduct() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="container mx-auto mt-5 pb-5">
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>

      {/* TabPanel được đặt ở dưới Tabs */}
      <TabPanel value={value} index={0}>
        <div>312312321</div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>3324234</div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>432423432432</div>
      </TabPanel>
    </Box>
  );
}

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};
