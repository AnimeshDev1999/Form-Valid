import ProductCard from "./ProductCard";
import th1 from "../images/thailand1.jpg";
import th2 from "../images/thailand2.jpg";
import th3 from "../images/thailand3.jpg";
import db1 from "../images/dubai1.jpg";
import db2 from "../images/dubai2.jpg";

const cardsData = [
  {
    dur: "4 NIGHT 5 DAYS TOUR",
    nam: "BANGKOK PATTAYA",
    price: "14,800/-",
    img: th1,
  },
  {
    dur: "4 NIGHT 5 DAYS TOUR",
    nam: "PHUKET KRABI",
    price: "15,200/-",
    img: th2,
  },
  {
    dur: "5 NIGHT 6 DAYS TOUR",
    nam: "PATTAYA BANGKOK",
    price: "17,000/-",
    img: th3,
  },
];

const cardsData2 = [
  {
    dur: "4 NIGHT 5 DAYS TOUR",
    nam: "UNBEATABLE DUBAI",
    price: "17,250/-",
    img: db1,
  },
  {
    dur: "4 NIGHT 5 DAYS TOUR",
    nam: "INCREDIBLE DUBAI",
    price: "21,000/-",
    img: db2,
  },
];

const Products = () => {
  return (
    <div className="px-5 md:px-10 py-10 md:flex md:flex-col md:items-center md:justify-center bg-white">
      <div className="bg-white max-w-[1080px] flex flex-col items-center justify-center">
        <h2 className="text-slate-700 mt-1">Our Thiland Packages</h2>
        <p className="text-3xl font-semibold text-center mb-1">
          Check Our Latest Thailand Packages
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {cardsData.map((item) => (
            <ProductCard key={item.nam} data={item}></ProductCard>
          ))}
        </div>
      </div>
      {/* nextdiv */}
      <div className="bg-white max-w-[1080px] flex flex-col items-center justify-center">
        <h2 className="text-slate-700 mt-1">Our Dubai Packages</h2>
        <p className="text-3xl font-semibold text-center mb-1">
          Check Our Latest Dubai Packages
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {cardsData2.map((item) => (
            <ProductCard key={item.nam} data={item}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
