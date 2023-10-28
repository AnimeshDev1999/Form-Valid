import Tbox from "./Tbox";
import p1 from "../images/13.jpg";
import bg from "../images/newreviews.png";

const Testimonials = () => {
  return (
    <div className="bg-white px-5 md:px-10 py-10 flex flex-col md:flex-row md:justify-center md:items-center gap-5">
      <div className="flex max-w-[540px] flex-col gap-5">
        <h2 className="font-semibold text-slate-700">Client Feedback</h2>
        <p className="text-3xl font-semibold">Trippy Baba Through Their Eyes</p>
        <Tbox img={p1} nam="Akshay Thakur" plat="Gujarat, India"></Tbox>
      </div>
      <img src={bg} alt="" className="w-full max-w-[540px]" />
    </div>
  );
};

export default Testimonials;
