import Home from "../Home/Home";
import "./Navigation.css";
import logo from "/images/n.png";

export default function Navigation() {
  return (
    <>
      <div className="pt-5 z-50 fixed flex justify-between navbar bg-base-100">
        <div className="ml-9">
          {/* <p className="btn btn-ghost text-4xl w-36 h-28"> */}
          <a href="#home">
            <img
              src={logo}
              alt="logo"
              className="n-logo ml-4 h-24"
              // className=" border-2 border-rose-500 btn btn-ghost h-24"
            />
          </a>

          {/* </p> */}
        </div>
        <div className="">
          <ul className="text-xl header">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a>Contacts</a>
            </li>
            {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li> */}
          </ul>
        </div>
      </div>
      <Home />
    </>
  );
}
