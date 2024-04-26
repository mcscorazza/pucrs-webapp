const InputText = (props) => {
  return (
    <div className="flex flex-col items-start w-full my-2">
      <label className="text-sm font-bold" htmlFor="chk01">
        {props.title}
      </label>
      <input className="w-full p-1" type={props.type} name={props.id} id={props.id} placeholder={props.ph}/>
    </div>
  );
};

export default InputText;
