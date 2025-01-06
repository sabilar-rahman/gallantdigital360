import CountService from "../home/ServiceSection/CountService";

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            {/* About Us Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Logo Section */}
                <div className="text-center">
                    <img
                        src="https://gallantdigital360.com/public/assets/img/mylogo/logo-gen-h.png"
                        alt="Gallant Digital Logo"
                        className="mx-auto w-48 h-auto mb-6"
                    />
                </div>

                {/* Content Section */}
                <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                        About Us
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                        Welcome to Gallant Digital
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Gallant Digital is a creative technological agency that specializes
                        in building awesome applications. We're your go-to tech buddy for
                        transforming ideas into reality, crafting custom solutions tailored
                        to your needs.
                    </p>
                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Our team is a powerhouse of innovation and expertise, dedicated to
                        helping businesses thrive in the digital landscape. With a proven
                        track record of success, we focus on elevating your online presence
                        and driving growth for your business.
                    </p>
                    <p className="text-gray-600 mt-4 italic">
                        Hey! Excited for a digital adventure? Let us help turn your vision
                        into reality!
                    </p>
                </div>
            </div>

            {/* Mission & Vision Section */}

            {/* Mission & Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20">
                {/* Content Section */}
                <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">
                    <h1 className="text-3xl md:text-2xl font-bold text-red-600 mb-4">
                        Mission & Vision
                    </h1>
                    <h2 className="text-xl md:text-4xl font-semibold text-gray-800 mb-4">
                        Digital solution with 7 years of experience...
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Empowering businesses through innovation and proven expertise. Our track record of
                        success sets us apart, delivering tailored solutions to elevate your digital presence
                        and drive sustainable growth.
                    </p>
                </div>

                {/* Image Section */}
                <div className="relative">
                    {/* Background Image */}
                    <img
                        src="https://gallantdigital360.com/public/assets/img/home-3/about/about-page.jpg"
                        alt="Hand picture"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                    {/* Logo Outside the Hand Picture */}
                    <img
                        src="https://gallantdigital360.com/public/assets/img/mylogo/fav-icon.png"
                        alt="Gallant Digital Logo"
                        className="absolute top-[-50px] right-[-40px] w-36 h-auto  "
                    />
                </div>

            </div>

            <CountService/>

        </div>
    );
};

export default AboutUs;
