import axios from "axios";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("name");

  const handleLogout = async (ev) => {
    ev.preventDefault();

    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    const bodyParameters = {
      key: "value",
    };
    const urlBase = "http://127.0.0.1:8000/api/logout";
    try {
      await axios.post(urlBase, bodyParameters, config).then((res) => {
        console.log(res.data.message);
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        navigate("/");
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full bg-sky-950 text-white text-2xl">
      <div className="h-12 bg-sky-900 text-white flex items-center  justify-between overflow-hidden relative">
        <div className="w-96 h-96 bg-amber-900 absolute top-[-60px] right-[-50px] rotate-[60deg]"></div>
        <div className="flex justify-between w-full px-4">
          <div className="z-50">
            <img src="generic-logo.svg" alt="" width={150} />
          </div>
          <div className="z-50 flex gap-2">
            {userName}
            <form className="z-50" onSubmit={handleLogout}>
              <input type="hidden" name="token" value="" />
              <button>
                <LogOut />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
