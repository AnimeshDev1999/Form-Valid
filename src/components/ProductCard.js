import house from "../images/iconsHouse.png";
import fork from "../images/iconsCutlery.png";
import th1 from "../images/thailand1.jpg";

const ProductCard = (props) => {
  return (
    <div className="rounded-t-2xl shadow-lg rounded-b-md overflow-hidden m-5 relative">
      <img src={props.data.img} alt="" />
      <div className="flex justify-between items-center p-5 relative">
        <div className="flex flex-col">
          <p className="text-slate-700">{props.data.dur}</p>
          <h3 className="font-semibold">{props.data.nam}</h3>
        </div>
        <button className="text-sky-600 font-semibold">Book Now</button>
        <div className="absolute top-0 flex left-0 translate-y-[-100%] rounded-tr-lg overflow-hidden">
          <img src={house} alt="" className="h-10" />
          <img src={fork} alt="" className="h-10" />
          <img src={house} alt="" className="h-10" />
          <img src={fork} alt="" className="h-10" />
        </div>
      </div>
      <p className="absolute top-6 right-0 bg-white px-4 py-2 font-semibold rounded-l-lg">
        {props.data.price}
      </p>
    </div>
  );
};

export default ProductCard;
