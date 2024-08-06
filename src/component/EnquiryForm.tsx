import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const EnquiryForm: React.FC = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [course, setCourse] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = { fullname, email, phone, course, city, address, description };
        console.log('Form data submitted:', formData);
        // Add your form submission logic here
    };

    const textFieldStyles = {
        bgcolor: 'red',
        '& .MuiInputBase-root': { color: 'white', bgcolor: 'red' },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white'
            },
            '&:hover fieldset': {
                borderColor: 'white'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white'
            },
        },
        '& .MuiInputLabel-root': {
            color: 'white'
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: 'white'
        },
        '& .MuiInputLabel-root.MuiFormLabel-filled': {
            color: 'white'
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} p={3} boxShadow={3} borderRadius={2} bgcolor="red" width={550} height={500} sx={{ mt: 7.5, ml: 6 }}>
            <Typography variant="h6" gutterBottom color={'white'}>
                Enquire the Course
            </Typography>
            <Typography variant="h6" gutterBottom color={'white'}>
                We will get 
            </Typography>
            <TextField
                label="Full Name"
                name="fullname"
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                margin="normal"
                sx={{ width: 240, ...textFieldStyles }}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
            />
            <TextField
                label="Email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                sx={{ ml: 8.7, width: 240, ...textFieldStyles }}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
            />
            <TextField
                label="Phone Number"
                name="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                margin="normal"
                sx={{ width: 240, ...textFieldStyles }}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
            />
            <TextField
                label="Course"
                name="course"
                type="text"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                margin="normal"
                sx={{ ml: 8.7, width: 240, ...textFieldStyles }}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
            />
            <TextField
                label="City"
                name="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                margin="normal"
                sx={{ width: 240, ...textFieldStyles }}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
            />
            <TextField
                label="Address"
                name="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                margin="normal"
                sx={{ ml: 8.7, width: 240, ...textFieldStyles }}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
            />
            <TextField
                label="Description"
                name="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                margin="normal"
                fullWidth
                size='medium'
                sx={{
                    height: '80px',
                    ...textFieldStyles,
                    '& .MuiInputBase-root': { height: '100%', color: 'white', bgcolor: 'red' }
                }}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
            />
            <Button type="submit" variant="contained" sx={{ mt: 3, color: 'red', bgcolor: 'white', '&:hover': { color: 'red', backgroundColor: 'white' } }} 
                fullWidth>
                Request Information
            </Button>
        </Box>
    );
};

export default EnquiryForm;
