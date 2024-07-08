import { mainColor } from "@/Colors";
import DataObjectIcon from "@mui/icons-material/DataObject";

export default function Home() {
  return (
    <div className="poopins">
      <Navbar />
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Buttons />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <div style={{ backgroundColor: mainColor }} className="p-[6px] rounded-md">
        <DataObjectIcon sx={{ fontSize: 27, color: "white" }} />
      </div>
      <div className="flex gap-1 text-[19px]">
        <span style={{ color: mainColor }} className="font-bold">
          Snippet
        </span>
        <span className="text-slate-600">Master</span>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
      <button
        style={{ backgroundColor: mainColor }}
        className="max-sm:w-full p-[8px] px-6 text-sm text-white rounded-md"
      >
        Sign In
      </button>

      <button
        style={{ borderColor: mainColor, color: mainColor }}
        className="text-sm border hover:bg-[#8338ec] hover:text-white p-[8px] px-6 rounded-md"
      >
        Sign Up
      </button>
    </div>
  );
}


