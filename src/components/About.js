import about from "../images/about.png";

const About = () => {
  return (
    <div className="flex items-center justify-center px-5 md:px-10 py-10 bg-white">
      <div className="bg-white max-w-[540px] flex flex-col gap-5 md:w-1/2">
        <h2 className="font-semibold text-slate-700">About TrippyBaba</h2>
        <p className="text-3xl font-semibold">
          Providing the Best Travel Experinces, Always.
        </p>
        <img src={about} alt="" className="md:hidden" />
        <p className="text-slate-700">
          Trippy Baba is one of the best travel agencies so far in Delhi NCR.
          With a splendid experience of delivering the best travel experiences
          in most stunning holiday destinations ranging from Goa to Singapore
          and prominent honeymoon locations like Bali. In our journeys, we blend
          adventure and culture to provide unforgettable memories for our
          clients.For those with a spirit of exploration and adventure, We offer
          packages that will help them embark on a transforming journey.{" "}
        </p>
      </div>
      <img
        src={about}
        alt=""
        className="w-[45%] max-w-[540px] h-full hidden md:block"
      />
    </div>
  );
};

export default About;
