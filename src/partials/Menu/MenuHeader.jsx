const MenuHeader = (props) => {
  if(props.status) {
      return (
        <div className="px-2 py-1 border-l-4 font-bold border-orange-800 text-xl text-sky-950 border-b">{props.title}</div>
      )
  } else {
    return (
        <div className="px-2 py-1 border-l-4 font-semibold border-slate-400 text-xl border-b text-slate-400">{props.title}</div>
      )
  }
}

export default MenuHeader