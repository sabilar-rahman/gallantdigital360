import React from 'react';

const AboutSection = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:justify-between p-8 ">
            {/* Text Section */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
                <p className="text-gray-600 mb-6">
                    Digital solutions crafted with <strong>7 years of experience</strong>. 
                    At Gallant Digital, we empower businesses through innovation and expertise, 
                    creating tailored solutions that elevate your digital presence and foster 
                    sustainable growth. Our proven track record makes us your trusted partner 
                    for success in the digital age.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                    Our mission at Gallant Digital is to transform businesses through cutting-edge 
                    technology solutions. Driven by your goals, unwavering integrity, and a dedication 
                    to social impact, we envision a future where technology is the driving force behind 
                    success and meaningful change.
                </p>
            </div>

            {/* Images Section */}
            <div className="lg:w-1/2 flex flex-col gap-4">
                <img 
                    src="/images/team.jpg" 
                    alt="Team collaboration" 
                    className="w-full rounded-lg shadow-md" 
                />
                <img 
                    src="/images/innovation.jpg" 
                    alt="Innovative solutions" 
                    className="w-full rounded-lg shadow-md" 
                />
            </div>
        </div>
    );
};

export default AboutSection;
