import NavBar from "../../components/nav";

function Explore() {
  return (
    <div>
      <NavBar />
      <div className="flex h-screen">
        <div className="flex h-full w-64 border-r">
          <div className="mt-5 ml-10 flex flex-col gap-y-1">
            <h1 className="text-xl font-semibold text-[#1877F2]">SEARCH</h1>

            <input></input>

            <h1 className="text-xl font-semibold text-[#1877F2]">COURSE</h1>

            <div className="flex flex-col space-y-2 ml-2">
              <button className="text-left cursor-pointer mt-3 text-md font-medium underline">Robotics</button>
              <button className="text-left cursor-pointer text-md font-medium underline">Microcontrollers</button>
              <button className="text-left cursor-pointer text-md font-medium underline">Programming</button>
            </div>
          </div>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}

export default Explore;
