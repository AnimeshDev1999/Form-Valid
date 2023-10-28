import star from "../images/star.svg";
import quote from "../images/quote.svg";

const Tbox = (props) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        <img src={star} alt="" className="h-5" />
        <img src={star} alt="" className="h-5" />
        <img src={star} alt="" className="h-5" />
        <img src={star} alt="" className="h-5" />
        <img src={star} alt="" className="h-5" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
        laboriosam praesentium culpa eveniet rerum unde voluptas nemo.
      </p>
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-5">
          <img src={props.img} alt="" className="h-14 rounded-full" />
          <div className="flex flex-col">
            <h3 className="font-semibold">{props.nam}</h3>
            <p>{props.plat}</p>
          </div>
        </div>
        <img src={quote} alt="" className="h-6" />
      </div>
    </div>
  );
};

export default Tbox;
