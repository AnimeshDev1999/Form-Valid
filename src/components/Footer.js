import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="p-10 bg-[#071654] md:flex md:flex-col md:justify-center md:items-center">
      <div className="flex flex-col max-w-[1080px] md:flex-row md:justify-between gap-10 mb-10">
        <div className="flex flex-col gap-5 md:w-1/3 items-start">
          <img src={logo} alt="" className="h-[5rem]" />
          <p className="text-slate-400">
            Trippy Baba is one of the best travel agencies so far in Delhi NCR.
            With a splendid experience of delivering the best travel experiences
            in most stunning holiday destinations ranging from Goa to Singapore
            and prominent honeymoon locations like Bali.{" "}
          </p>
        </div>
        <div className="flex justify-around md:justify-between md:gap-10 items-center md:items-start">
          <ul>
            <li className="font-semibold text-white">About</li>
            <li className="text-slate-400">About</li>
            <li className="text-slate-400">Destination</li>
            <li className="text-slate-400">Testionials</li>
          </ul>
          <ul>
            <li className="font-semibold text-white">Links</li>
            <li className="text-slate-400">Home</li>
            <li className="text-slate-400">About Us</li>
            <li className="text-slate-400">Contact Us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-semibold text-white">Contact Us</li>
            <li className="text-slate-400">8178550422 / 7827423788</li>
            <li className="text-slate-400">enquiry@trippybabatours.com </li>
            <li className="text-slate-400">Social Links</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-slate-200 border-t-2 pt-5">
          All Right reserved by ©: trippybabatours.com{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
