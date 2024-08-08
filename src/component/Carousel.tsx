import { Stack, Box, Typography } from "@mui/material";
import Slider, { CustomArrowProps } from "react-slick";



const NextArrow = (props: CustomArrowProps) => {
    const { className, style, onClick } = props;
    return (
        <Box
            className={`${className} custom-arrow`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

const PrevArrow = (props: CustomArrowProps) => {
    const { className, style, onClick } = props;
    return (
        <Box
            className={`${className} custom-arrow`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}



const Carousel = () => {

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const aspiringPrompts = [
        {
            text: ["Prompt: 1", "Dreaming of changing the tech world? Start your journey here.", "Join us to become the next IT entrepreneur and turn your innovative ideas into reality."]
        },
        {
            text: ["Prompt: 2", "Ready to take on the tech world? Our institute equips you with the skills and knowledge to transform your passion into a successful IT startup.", "Are you up for the challenge?"]
        },
        {
            text: ["Prompt: 3", "Unlock your potential and seize the opportunity to lead the next big tech revolution.", "Enroll now to become an IT entrepreneur and make your mark on the industry."]
        },
        {
            text: ["Prompt: 4", "Join a community of innovators and receive the mentorship you need to launch your IT startup.", "Our institute is your gateway to becoming a successful IT entrepreneur."]
        },
        {
            text: ["Prompt: 5", "See a problem in the tech world? We’ll give you the tools to solve it.", "Become an IT entrepreneur with our comprehensive training programs and make a difference."]
        },
        {
            text: ["Prompt: 6", "Follow in the footsteps of successful IT entrepreneurs who started here.", "Join our institute and turn your tech dreams into a thriving business."]
        },
        {
            text: ["Prompt: 7", "Dreaming of a global IT career? Our institute equips you with the skills and credentials to succeed anywhere in the world.", "Join us and start your international journey in tech."]
        },
        {
            text: ["Prompt: 8", "Your IT career knows no boundaries.", "With our training, you can work and thrive in any corner of the globe.", "Are you ready to explore the world through technology?"]
        },
        {
            text: ["Prompt: 9", "Achieve globally recognized IT certifications and skills with our institute.", "Your pathway to an international IT career starts here."]
        },
        {
            text: ["Prompt: 10", "Gain hands-on experience and real-world skills that open doors to IT careers worldwide.", "Enroll today and make your mark globally."]
        },
        {
            text: ["Prompt: 11", "Join a network of IT professionals and alumni working across the globe.", "Our institute provides the connections and support to launch your international IT career."]
        },
        {
            text: ["Prompt: 12", "Follow the footsteps of our graduates who are now IT leaders around the world.", "Start your global IT career with us."]
        },
    ];

    return (
        <Box className="Home" height={740}>
            <Stack>
                <Box
                    sx={{
                        width: '92%',
                        margin: '0 auto',
                        position: 'relative',
                    }}
                >
                    <Slider {...carouselSettings} className="Carousel">
                        {aspiringPrompts.map((prompt, index) => (
                            <Box
                                key={index}
                                className="carousel-slide"
                                sx={{ mt: 25 }}
                                
                            >
                                {prompt.text.map((line, idx) => (
                                    <Typography key={idx} variant="h6" align="center">{line}</Typography>
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
