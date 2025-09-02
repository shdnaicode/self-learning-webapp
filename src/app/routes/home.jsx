import NavBar from "../../components/nav";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <div className="mt-30 ml-60 flex max-w-sm flex-col justify-start">
          <div className="h-40 w-40 justify-items-end overflow-hidden bg-gray-300">
            <img src="/" className="h-full w-full object-cover" />
          </div>
          <div className="pt-10 text-2xl font-medium">Shindanai Sudprasert</div>
          <div className="pt-7">
            <button className="text-md h-10 w-32 cursor-pointer rounded-md border bg-[#1877F2] font-medium text-white">
              Edit Profile
            </button>
          </div>
          <h1 className="pt-15 pb-2 text-lg font-semibold text-[#1877F2]">
            Description
          </h1>
          <div className="text-md leading-relaxed">
            Hello! I'm a computer scientist based in Thailand! And I built this
            website!
          </div>
          <h1 className="pt-15 pb-2 text-lg font-semibold text-[#1877F2]">
            Join Date
          </h1>
          <div className="text-md">26 May, 2024</div>
          <h1 className="pt-15 pb-2 text-lg font-semibold text-[#1877F2]">
            Email
          </h1>
          <div className="text-md">smartsoodprasert@gmail.com</div>
        </div>

        <div className="mt-23 ml-15 flex max-w-4xl flex-1 flex-col pl-5">
          <div className="mt-5 text-lg font-semibold text-[#1877F2]">
            Personal showcase
          </div>
           <div className="mt-7 flex flex-wrap gap-7 w-[91%]">
            <div className="flex h-28 w-sm items-center justify-center border">
              Completed course #1
            </div>
            <div className="flex h-28 w-sm items-center justify-center border">
              Completed course #2
            </div>
            <div className="flex h-28 w-sm items-center justify-center border">
              Completed course #3
            </div>
            <div className="flex h-28 w-sm items-center justify-center border">
              Completed course #4
            </div>
          </div>  

          <div className="mt-15 text-lg font-semibold text-[#1877F2]">
            Registered course
          </div>

          <div className="mt-7 flex flex-col gap-7 w-[91%]">
            <div className="flex h-30 items-center justify-center border">
              Registered course #1
            </div>
            <div className="flex h-30 items-center justify-center border">
              Registered course #2
            </div>
             <div className="flex h-30 items-center justify-center border">
              Registered course #2
            </div>
          </div>

          <div className="mt-15 text-lg font-semibold text-[#1877F2]">
            Progress
          </div>

          <div className="mt-7 h-64 border w-[91%]">
            <div>
              Dashboard here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
