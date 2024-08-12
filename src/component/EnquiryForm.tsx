import React, { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Swal from 'sweetalert2';

const EnquiryForm: React.FC = () => {

    const [fullname, setFullname] = useState('');
    const [qualification, setQualification] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [learningProgram, setLearningProgram] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData: {
            fullname: string;
            qualification: string;
            mobileNumber: string;
            email: string;
            city: string;
            learningProgram: string;
            comments: string;
            access_key: string; 
        } = 
        { 
            fullname, 
            qualification, 
            mobileNumber, 
            email, 
            city, 
            learningProgram, 
            comments,
            access_key: "c81b29a5-104d-4bb8-9ba3-e3df75207448" 
        };
    
        //console.log('Form data submitted:', formData);
        const json = JSON.stringify(formData);
    
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
            }).then((res) => res.json());
    
            if (res.success) {
                Swal.fire({
                    title: "Success!",
                    text: "Your Enquiry Sent Successfully, we will get in touch with you shortly!",
                    icon: "success",
                    background: "red",
                    confirmButtonColor: "red", 
                    color: "white"
                });

                setFullname('');
                setQualification('');
                setMobileNumber('');
                setEmail('');
                setCity('');
                setLearningProgram('');
                setComments('');

            } else {
                Swal.fire({
                    title: "Error!",
                    text: res.message || "There was an error sending your enquiry.",
                    icon: "error"
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "There was an error sending your enquiry.",
                icon: "error"
            });
        }
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
    };

    const selectStyles = {
        '& .MuiSelect-icon': {
            color: 'white'
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
        },
        '& .MuiSelect-select': {
            color: 'white'
        },
        '& .MuiInputLabel-root': {
            color: 'white',
            '&.Mui-focused': {
                color: 'white'
            }
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
                label="Qualification"
                name="qualification"
                type="text"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                margin="normal"
                sx={{ ml: 8.7, width: 240, ...textFieldStyles }}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
            />
            <TextField
                label="Mobile Number"
                name="mobileNumber"
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
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
            <FormControl sx={{ ml: 8.7, width: 240 }} margin="normal">
                <InputLabel sx={{ color: 'white' }}>Learning Program</InputLabel>
                <Select
                    label="Learning Program"
                    value={learningProgram}
                    onChange={(e) => setLearningProgram(e.target.value)}
                    sx={{ ...selectStyles, ...textFieldStyles }}
                    inputProps={{
                        style: { color: 'white' }
                    }}
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Full Stack">Full Stack</MenuItem>
                    <MenuItem value="Cloud Computing">Cloud Computing</MenuItem>
                    <MenuItem value="DevOps">DevOps</MenuItem>
                    <MenuItem value="AI & ML">AI & ML</MenuItem>
                    <MenuItem value="Data Engineering">Data Engineering</MenuItem>
                    <MenuItem value="Web Development">Web Development</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Comments"
                name="comments"
                type="text"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
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
