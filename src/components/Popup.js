const Popup = (props) => {
  return (
    <div className={props.cls}>
      <p className="font-semibold">{props.warn}</p>
      <p>{props.msg}</p>
    </div>
  );
};

export default Popup;
