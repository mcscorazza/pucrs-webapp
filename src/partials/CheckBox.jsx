const CheckBox = (props) => {
  return (
    <div className="flex flex-row items-center">
      <input type="checkbox" name="chk01" id="chk01" />
      <label className="ml-1 text-sm font-bold" htmlFor="chk01">
        {props.title}
      </label>
    </div>
  );
};

export default CheckBox;
