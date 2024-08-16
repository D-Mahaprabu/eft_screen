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
    const Courses = [
        { 
            title: "Full Stack", 
            path: "/courses/fullstack", 
            image: FullStackBgImage,
            info: "Full Stack Developer program gives the ability to design complete web applications and websites. They will be upskilled in frontend, backend, database, and debugging of web applications or websites."
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
            path: "/ai&ml", 
            image: AiMlBgImage,
            info: "Dive into artificial intelligence and machine learning and data science."
        },
        { 
            title: "Data Engineering", 
            path: "/data-engineering", 
            image: DataEngineerBgImage,
            info: "Become a data expert and Work with big data technologies and data pipelines."
        },
        { 
            title: "Web Development", 
            path: "/web-development", 
            image: WebDevelopmentBgImage,
            info: "Web development program makes you how to create, build, and maintain of websites. It includes aspects such as web design, web publishing, web programming, and database management."
        }
    ];

    return (
        <Box className="Courses" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: 1120 }}>
            <Typography width={'148px'} height={'35px'} fontStyle={'Poppins'} fontWeight={'400'} fontSize={'32px'} lineHeight={'48px'} color="#D81B0E" sx={{ mt: 5, mr: 150 }}>
                Available
            </Typography>
            <Typography width={'166px'} height={'60px'} fontStyle={'Poppins'} fontWeight={'500'} fontSize={'40px'} lineHeight={'60px'} sx={{ mt: 1, mr: 149  }} style={{ fontWeight: 'bold' }}>
                Courses
            </Typography>
            <Stack 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    flexWrap: 'wrap', 
                    mt: 1, 
                    mr: 10, 
                    p: 2,
                    gap: 6,
                    ml: 10
                }} 
                direction={'row'}
            >
                {Courses.map(course => (
                    <Card sx={{ width: 300, height: 400, borderRadius: 2, mr: 1.5 }} key={course.title}>
                      <CardMedia
                        component="img"
                        width="300"
                        height="270"
                        image={course.image}
                        alt={course.title}
                      />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'left' }}>
                            <Typography width={'354px'} height={'34px'} fontStyle={'Poppins'} fontWeight={'bold'} fontSize={'24px'} lineHeight={'33.6px'} letterSpacing={'0.5%'} color={'#D81B0E'} variant="h6" component={Link} to={course.path} sx={{textDecoration: 'none', mt:-1.5}}>
                                {course.title}
                            </Typography>
                            <Typography fontStyle={'Poppins'} color={'#282938'} variant="caption" sx={{mt:-0.2}}>
                                {course.info.split('.')[0]}
                            </Typography>
                            <Typography fontStyle={'Poppins'} color={'#282938'} variant="caption">
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
