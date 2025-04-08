import Marquee from "react-fast-marquee";

const MarqueeText: React.FC = () => {
  return (
    <Marquee
      speed={60}
      gradient={false}
      pauseOnHover
      direction="left"
    >
<p className="text-white p-5">Important Message!</p>
    </Marquee>
  );
};

export default MarqueeText;
