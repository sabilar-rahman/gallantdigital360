// import { useInView } from 'react-intersection-observer';
// import CountUp from 'react-countup';

// const CountService = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true, // Trigger animation only once
//     threshold: 0.5, // Start animation when 50% of the section is in view
//   });

//   return (
//     <section ref={ref} className="py-16 ">
//     <div className="container mx-auto text-center">
//       <h2 className="text-3xl font-bold text-gray-800 mb-12">
//         Our Achievements
//       </h2>

//       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         <div className="flex flex-col items-center">
//           <CountUp start={0} end={80} duration={2} redraw={inView} separator="," className="text-4xl font-semibold text-blue-600" />
//           <p className="text-lg font-medium text-gray-600 mt-2">Projects Completed</p>
//         </div>

//         <div className="flex flex-col items-center">
//           <CountUp start={0} end={25} duration={2} redraw={inView} separator="," className="text-4xl font-semibold text-green-600" />
//           <p className="text-lg font-medium text-gray-600 mt-2">Satisfied Clients</p>
//         </div>

//         <div className="flex flex-col items-center">
//           <CountUp start={0} end={15} duration={2} redraw={inView} separator="," className="text-4xl font-semibold text-yellow-600" />
//           <p className="text-lg font-medium text-gray-600 mt-2">Custom Software</p>
//         </div>

//         <div className="flex flex-col items-center">
//           <CountUp start={0} end={50} duration={2} redraw={inView} separator="," className="text-4xl font-semibold text-red-600" />
//           <p className="text-lg font-medium text-gray-600 mt-2">eCommerce Solutions</p>
//         </div>
//       </div>
//     </div>
//   </section>
//   );
// };

// export default CountService;

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const CountService = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.5, // Start animation when 50% of the section is in view
  });

  // Data for counts
  const achievements = [
    { count: 80, label: "Projects Completed", color: "text-blue-600" },
    { count: 25, label: "Satisfied Clients", color: "text-green-600" },
    { count: 15, label: "Custom Software", color: "text-yellow-600" },
    { count: 50, label: "eCommerce Solutions", color: "text-red-600" },
  ];

  return (
    <section ref={ref} className="py-16">
      <div className=" text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Our Achievements
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map(({ count, label, color }, index) => (
            <div key={index} className="flex flex-col items-center">
              <CountUp
                start={0}
                end={count}
                duration={2}
                redraw={inView}
                separator=","
                className={`text-4xl font-semibold ${color}`}
                delay={index * 0.5}
              />
              <p className="text-lg font-medium text-gray-600 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountService;
