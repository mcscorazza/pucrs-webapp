const InputTextInactive = (props) => {
  return (
    <div className="flex flex-col items-start w-full">
      <label className="text-sm font-semibold text-sky-950" htmlFor={props.id}>
        {props.title}
      </label>
      <input 
        onChange={(e) => props.onChange(e)}
        className="w-40 py-1 px-3 rounded-sm shadow-md bg-slate-200 text-slate-500" 
        type={props.type} 
        name={props.id} 
        id={props.id} 
        placeholder={props.ph}
        value={props.value}
      />
    </div>
  );
};

export default InputTextInactive;
