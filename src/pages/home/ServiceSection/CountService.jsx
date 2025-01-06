
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
        <h2 className="text-3xl font-bold text-red-600 mb-12">
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
