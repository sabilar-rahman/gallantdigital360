import { Gallery } from "react-grid-gallery";

import img1 from "../../assets/aboutsection/about-1.jpg";
import img2 from "../../assets/aboutsection/about-2.jpg";
import img3 from "../../assets/aboutsection/about-3.jpg";
import img4 from "../../assets/aboutsection/about-4.jpg";

const images = [
    {
        src: img1,
        width: 320,
        height: 174,
        isSelected: true,
        caption: "After Rain ",
    },
    {
        src: img2,
        width: 360,
        height: 240,
        tags: [
            { value: "problem", title: "Ocean" },
            { value: "solution", title: "Boats" },
            
        ],
        alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
        src: img3,
        width: 400,
        height: 200, 
        isSelected: true,
    },
    {
        src: img4,
       
        width: 340,
        height: 220,
    },
    {
        src: img1,
        width: 320,
        height: 174,
        isSelected: true,
        caption: "After Rain ",
    },
];

const AboutSection = () => {
    return (
        <section className=" py-16 px-8">
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-16">
                {/* Text Section */}
                <div className="lg:w-5/12 text-center lg:text-left">
                    {/* <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
                        About Us
                    </h2> */}
                     <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-red-500">
                     About Us
                     </h2>
                    <p className="text-gray-700 text-lg mb-8 text-justify">
                        Digital solutions crafted with <strong>7 years of experience</strong>. 
                        At Gallant Digital, we empower businesses through innovation and expertise, 
                        creating tailored solutions that elevate your digital presence and foster 
                        sustainable growth. Our proven track record makes us your trusted partner 
                        for success in the digital age.
                    </p>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Our Mission
                    </h3>
                    <p className="text-gray-700 text-lg text-justify">
                        Our mission at Gallant Digital is to transform businesses through cutting-edge 
                        technology solutions. Driven by your goals, unwavering integrity, and a dedication 
                        to social impact, we envision a future where technology is the driving force behind 
                        success and meaningful change.
                    </p>
                </div>

                {/* Images Section */}
                <div className="lg:w-6/12">
                    <Gallery
                        images={images}
                        enableImageSelection={false}
                        backdropClosesModal
                        rowHeight={180}
                        margin={8}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
