import React from 'react';
import { Box, Card, CardContent, Typography, CardMedia, Stack } from "@mui/material";
import { Link } from 'react-router-dom';
import AiMlBgImage from '../images/aiLogo.png';
import FullStackBgImage from '../images/fullStackLogo.png';
import ClougBgImage from '../images/cloudLogo.jpg';
import DataEngineerBgImage from '../images/dataEngineerLogo.png';
import DevopsBgImage from '../images/devopsLogos.jpg';
import WebDevelopmentBgImage from '../images/webLogo.png';

const Courses = () => {
    const courses = [
        { 
            title: "Full Stack", 
            path: "/fullstack-engineer", 
            image: FullStackBgImage,
            info: "Become proficient in front-end and back-end technologies."
        },
        { 
            title: "Cloud Computing", 
            path: "/cloud", 
            image: ClougBgImage,
            info: "Master cloud computing platforms. Gain skills in AWS, Azure, and Google Cloud."
        },
        { 
            title: "DevOps", 
            path: "/devops", 
            image: DevopsBgImage,
            info: "Integrate development and operations. Learn CI/CD pipelines, automation, and more."
        },
        { 
            title: "AI & ML", 
            path: "/ai-ml", 
            image: AiMlBgImage,
            info: "Dive into artificial intelligence and machine learning and data science."
        },
        { 
            title: "Data Engineering", 
            path: "/data-engineer", 
            image: DataEngineerBgImage,
            info: "Become a data expert and Work with big data technologies and data pipelines."
        },
        { 
            title: "Web Development", 
            path: "/web-development", 
            image: WebDevelopmentBgImage,
            info: "Become a data expert and Work with big data technologies and data pipelines."
        }
    ];

    return (
        <Box className="Courses" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: 1140 }}>
            <Typography variant="h5" color="red" fontFamily="Roboto" sx={{ mt: 5, mr: 163 }}>
                Available
            </Typography>
            <Typography variant="h4" color="black" fontFamily="Roboto" sx={{ mt: 1, mr: 160  }} style={{ fontWeight: 'bold' }}>
                Courses
            </Typography>
            <Stack 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    flexWrap: 'wrap', 
                    mt: 1, 
                    mr: 15, 
                    p: 2,
                    gap: 9
                }} 
                direction={'row'}
            >
                {courses.map(course => (
                    <Card sx={{ width: 350, height: 380, borderRadius: 2, mr: 4 }} key={course.title}>
                        <CardMedia
                            component="img"
                            width="350"
                            height="280"
                            image={course.image}
                            alt={course.title}
                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography fontFamily={"Roboto"} color={'red'} variant="h6" component={Link} to={course.path}>
                                {course.title}
                            </Typography>
                            <Typography fontFamily={"Roboto"} color={'black'} variant="caption" sx={{ textAlign: 'center' }}>
                                {course.info.split('.')[0]}
                            </Typography>
                            <Typography fontFamily={"Roboto"} color={'black'} variant="caption" sx={{ textAlign: 'center' }}>
                                {course.info.split('.')[1]}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Box>
    );
};

export default Courses;
