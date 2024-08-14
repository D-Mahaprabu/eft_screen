import React, { useState } from 'react';
import { Stack, Box, Typography, Paper, Tabs, Tab, Button } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuickLinks from './Quicklinks';
import Discover from './Discover';

const FullStackCource = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 0:
                return (
                    <Typography variant="body1">
                        Full-stack development refers to the practice of developing both the front-end and back-end aspects of a web application
                        Full-stack development refers to the practice of developing both the front-end and back-end aspects of a web application
                        Full-stack development refers to the practice of developing both the front-end and back-end aspects of a web application
                        Full-stack development refers to the practice of developing both the front-end and back-end aspects of a web application
                        Full-stack development refers to the practice of developing both the front-end and back-end aspects of a web application
                        Full-stack development refers to the practice of developing both the front-end and back-end aspects of a web application
                    </Typography>
                );
        }
    };

    return (
        <Stack direction={'row'} width={'100%'} height={700} justifyContent={'space-between'} bgcolor={'white'} sx={{mt:10}}>
            <Box height={'auto'} width={'60%'} sx={{ ml: 2 }}>
                <Stack>
                    <Typography variant="h4">FULLSTACK ENGINEERING</Typography>
                </Stack>
                <Stack width={'auto'} direction={'row'}>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: 'red', color: 'white', mt: 2, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography sx={{ mt: 2.5, ml:1 }}>15 Modules</Typography>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: 'red', color: 'white', mt: 2, ml: 1, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography sx={{ mt: 2.5, ml:1 }}>6 Months</Typography>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 35, height: 35, borderRadius: '50%', bgcolor: 'red', color: 'white', mt: 2, ml: 1, position: 'relative', overflow: 'hidden' }}>
                        <MenuBookIcon />
                    </Box>
                    <Typography sx={{ mt: 2.5, ml:1 }}>Beginner</Typography>
                </Stack>
                <Box sx={{ width: '100%', mt: 2 }}>
                    <Paper square>
                        <Tabs 
                            value={activeTab} 
                            onChange={handleTabChange} 
                            indicatorColor="primary"
                            textColor="inherit"
                        >
                            <Tab 
                                label="Overview" 
                                sx={{ 
                                    color: activeTab === 0 ? 'red' : 'rgba(0, 0, 0, 0.54)' 
                                }} 
                            />
                        </Tabs>
                    </Paper>
                    <Box sx={{ p: 3 }}>
                        {renderContent()}
                    </Box>
                </Box>
            </Box>
            <Box height={'auto'} width={'38%'} sx={{ fontWeight: 'bold' }}>
                <Stack height={130} width={'auto'} direction={'row'}>
                    {/* <Box height={130} width={'50%'} >
                        <Typography variant='h4' sx={{ ml: 1 }}>FullStack Engineering</Typography>
                        <Button variant='contained' sx={{ borderRadius: 10, ml: 1 }}>20% offer</Button>
                    </Box>
                    <Box width={'50%'}>
                        <Stack direction={'row'} alignItems={'center'} display={'flex'} justifyContent={'center'}>
                            <Typography sx={{ textDecoration: 'line-through', mt: 6 }}>$32k</Typography>
                            <Typography variant='h4' color={'red'} sx={{ mt: 6 }}>24k</Typography>
                        </Stack>
                    </Box>
                </Stack>
                <Stack direction={'row'} >
                    <Button variant='contained' sx={{ backgroundColor: '#FDA800', color: 'black', width: '200px' }}>Add to cart</Button>
                    <Button variant='contained' sx={{ backgroundColor: '#0C5FF3', color: 'white', width: '200px', ml:2 }}>
                        Buy Now
                    </Button> */}
                </Stack>
                <Box sx={{ mt: 2 }}>
                    <QuickLinks />
                    <Discover />
                </Box>
            </Box>
        </Stack>
    );
};

export default FullStackCource;
