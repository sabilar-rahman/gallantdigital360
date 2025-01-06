import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CountService from "./CountService";

const ServiceListSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("/service.json") // Using axios to fetch the data
      .then((response) => {
        // console.log('Fetched data:', response.data);  // Check the structure of the data
        setServices(response.data.services); // Extract 'services' array from the response
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  return (
    <section className="py-10">
      {/* SERVICE LIST Header Section */}
      <div className="px-6 mb-8">
        <h2 className="text-3xl text-red-600 text-center font-bold  mb-2">
          SERVICE LIST
        </h2>
        <p className="text-xl text-gray-600">
          Gallant Digital Core Services: Your One-Stop Digital Partner—Creating
          Websites, Custom Applications, Elevating eCommerce, and Enhancing
          Visibility with Expert SEO Services.
        </p>
      </div>

      {/* Service Cards Section */}
      <div className="px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {services.map((service) => (
            <Card
              key={service.id}
              className="shadow-lg border border-red-300 hover:text-red-600 hover:border-black"
            >
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>
                  {" "}
                  {service.description.split(" ").length > 20
                    ? service.description.split(" ").slice(0, 20).join(" ") +
                    "..."
                    : service.description}
                </CardDescription>
              </CardHeader>
              {/* <CardContent>
                            <p>{service.description}</p>
                        </CardContent> */}
              <CardFooter>
                <a href="#" className=" font-medium  hover:underline">
                  {service.read_more}
                </a>
              </CardFooter>
            </Card>
          ))}

        </div>
      </div>


      {/* counter Cards Section */}
      <h2 className="text-3xl text-center font-bold text-red-600 mt-12">
        OUR ACHIEVEMENTS
      </h2>

      <CountService />


    </section>
  );
};

export default ServiceListSection;
