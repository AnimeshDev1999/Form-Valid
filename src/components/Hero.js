import { useState } from "react";

const Hero = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [ppl, setPpl] = useState("");
  const [dest, setDest] = useState("");
  const [date, setDate] = useState("");

  const changeHandler = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "mob") {
      setMobile(e.target.value);
    } else if (e.target.id === "ppl") {
      setPpl(e.target.value);
    } else if (e.target.id === "dest") {
      setDest(e.target.value);
    } else {
      setDate(e.target.value);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(
      name && mobile && ppl && dest && date
        ? `Name:${name} Mob:${mobile} People:${ppl} Destination:${dest} Date:${date}`
        : "Please fill all fields"
    );

    name && mobile && ppl && dest && date
      ? props.func(true)
      : props.func(false);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 items-center md:px-10 py-10">
      <div className="max-w-[540px] flex flex-col justify-center items-center md:items-start gap-5">
        <p className=" text-slate-200">ELEVATE YOUR TRAVEL JOURNEY</p>
        <h1 className="text-5xl font-bold text-center md:text-left leading-[3.5rem] text-white">
          Discover Your World With Trippy Baba
        </h1>
        <p className="text-slate-200 hidden md:block">
          Trippy Baba is your gateway to unforgettable journeys. We're
          passionate about crafting unique travel experiences that immerse you
          in culture, adventure, and discovery. Join us in exploring the world's
          most captivating destinations, one trip at a time. Travel with Trippy
          Baba for unforgettable memories.{" "}
        </p>
      </div>
      <form className="max-w-[540px] flex flex-col bg-white rounded-2xl w-[90%] p-10 gap-5">
        <h2 className="text-xl font-semibold mb-8">Contact Us</h2>
        <div className="field">
          <label htmlFor="" className="lab">
            Full name:
          </label>
          <input type="text" id="name" onChange={changeHandler} />
        </div>
        <div className="field">
          <label htmlFor="" className="lab">
            Mobile:
          </label>
          <input type="text" id="mob" onChange={changeHandler} />
        </div>
        <div className="field">
          <label htmlFor="" className="lab">
            No of People:
          </label>
          <input type="number" id="ppl" onChange={changeHandler} />
        </div>
        <div className="field">
          <label htmlFor="" className="lab">
            Destination:
          </label>
          <select
            name=""
            id="dest"
            className="bg-transparent"
            onChange={changeHandler}
          >
            <option value="Dubai">-- Select --</option>
            <option value="Dubai">Dubai</option>
            <option value="Thailand">Thailand</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="" className="lab">
            Travel Date:
          </label>
          <input type="date" id="date" onChange={changeHandler} />
        </div>
        <button
          onClick={submit}
          className="text-white py-3 mt-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Hero;
