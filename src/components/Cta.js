const Cta = () => {
  return (
    <div className="cta-div px-5 py-10 flex justify-center items-center">
      <div className="flex flex-col justify-center items-start md:w-2/3 md:items-center">
        <h2 className="text-2xl text-white font-semibold mb-2">
          Thousand Explorers, One Beloved Travel Agency{" "}
        </h2>
        <p className="text-slate-200 md:text-center">
          Many of our clients have praised us for providing the best travel
          experiences to their preferred locations, like Thailand, Goa, Jammu &
          Kashmir, and the Andaman Islands.{" "}
        </p>
        <button className="text-white py-3 px-8 mt-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
          CHECK OUR PACKAGES !
        </button>
      </div>
    </div>
  );
};

export default Cta;
