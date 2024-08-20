import { Stack, Box, Typography } from "@mui/material";
import Slider from "react-slick";

const Carousel = () => {

    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 22,
        arrows: false
    };

    const aspiringPrompts = [
        {
            text: ["Dreaming of changing the tech world? Start your journey here. Join us to become the next IT entrepreneur and turn your innovative ideas into reality."]
        },
        {
            text: ["Ready to take on the tech world? Our institute equips you with the skills and knowledge to transform your passion into a successful IT startup."]
        },
        {
            text: ["Unlock your potential and seize the opportunity to lead the next big tech revolution."]
        },
        {
            text: ["Join a community of innovators and receive the mentorship you need to launch your IT startup. Our institute is your gateway to becoming a successful IT entrepreneur."]
        },
        {
            text: ["See a problem in the tech world? We’ll give you the tools to solve it. Become an IT entrepreneur with our comprehensive training programs and make a difference."]
        },
        {
            text: ["Follow in the footsteps of successful IT entrepreneurs who started here. Join our institute and turn your tech dreams into a thriving business."]
        },
        {
            text: ["Dreaming of a global IT career? Our institute equips you with the skills and credentials to succeed anywhere in the world. Join us and start your international journey in tech."]
        },
        {
            text: ["Your IT career knows no boundaries. With our training, you can work and thrive in any corner of the globe. Are you ready to explore the world through technology?"]
        },
        {
            text: ["Achieve globally recognized IT certifications and skills with our institute. Your pathway to an international IT career starts here."]
        },
        {
            text: ["Gain hands-on experience and real-world skills that open doors to IT careers worldwide. Enroll today and make your mark globally."]
        },
        {
            text: ["Join a network of IT professionals and alumni working across the globe. Our institute provides the connections and support to launch your international IT career."]
        },
        {
            text: ["Follow the footsteps of our graduates who are now IT leaders around the world. Start your global IT career with us."]
        },
        {
            text: ["Seize the opportunity to become a global IT leader. Our graduates are making an impact worldwide. Join them today."]
        },
    ];

    return (
        <Box className="Home" height={608}>
            <Stack>
                <Box
                    sx={{
                        width: '100%',
                        margin: '0 auto',
                        position: 'relative',
                    }}
                >
                    <Typography 
                                    width={'426px'}
                                    height={'120px'}
                                    fontFamily={'Poppins'}
                                    fontWeight={500}
                                    fontSize={'40px'}
                                    lineHeight={'60px'}
                                    color={'white'}
                                    align="left"
                                    sx={{ mt:24, ml: 5 }}
                                >
                                    Your Online Learning Journey Made Easy
                    </Typography>
                    <Slider {...carouselSettings}>
                        {aspiringPrompts.map((prompt, index) => (
                            <Box
                                key={index}
                                className="carousel-slide"
                                sx={{
                                    height: 608
                                }}
                            >
                                {prompt.text.map((line, idx) => (
                                    <Typography
                                        key={idx} 
                                        width={'480px'}
                                        height={'72px'}
                                        fontFamily={'Poppins'}
                                        fontWeight={500}
                                        fontSize={'16px'}
                                        lineHeight={'24px'}
                                        align="left"
                                        sx={{
                                            mt:3,
                                            ml: 5,
                                            color: 'white',
                                        }}
                                    >
                                        {line}
                                    </Typography>
                                ))}
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Stack>
        </Box>
    );
};

export default Carousel;
