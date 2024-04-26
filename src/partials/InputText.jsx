const InputText = (props) => {
  return (
    <div className="flex flex-col items-start w-full mt-4 ">
      <label className="text-sm font-semibold text-sky-950" htmlFor={props.id}>
        {props.title}
      </label>
      <input 
        onChange={(e) => props.onChange(e)}
        className="w-full py-1 px-3 rounded-sm shadow-md" 
        type={props.type} 
        name={props.id} 
        id={props.id} 
        placeholder={props.ph}
        value={props.value}
      />
    </div>
  );
};

export default InputText;
