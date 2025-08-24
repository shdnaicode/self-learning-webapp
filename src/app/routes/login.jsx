function Login() {
  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <div className="h-[45vh] w-[45vh] overflow-hidden rounded-lg border bg-[#D3DAD9]/20 backdrop-blur-sm">
        <form
          className="flex h-full flex-col items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex w-full justify-center pt-7 text-2xl font-semibold">
            LOGIN
          </div>
          <label
            htmlFor="email"
            className="text-md mt-7 mb-2 self-start pl-6 font-medium"
          >
            Email Address
          </label>
          <input
            id="email"
            placeholder="username@gmail.com"
            className="mb-5 h-11 w-[40vh] rounded-lg border border-black/40 bg-white pl-3 text-sm font-normal outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></input>
          <label
            htmlFor="password"
            className="text-md mb-2 self-start pl-6 font-medium"
          >
            Password
          </label>
          <input
            id="password"
            placeholder="password123 "
            className="mb-9 h-11 w-[40vh] rounded-lg border border-black/40 bg-white pl-3 text-sm font-normal outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></input>
          <button
            value="Submit"
            type="submit"
            className="text-md h-11 w-[40vh] rounded-lg border border-black/40 bg-[#1877F2] font-normal text-white outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        <div className="flex h-screen flex-col items-center justify-center">
          <div className="h-[45vh] w-[45vh] overflow-hidden rounded-lg border bg-[#D3DAD9]/20 backdrop-blur-sm"></div>
        </div>
      </div>
      <div className="mt-7 flex flex-col items-center justify-center">
        <div className="h-[10vh] w-[45vh] overflow-hidden rounded-lg border bg-[#D3DAD9]/20 backdrop-blur-sm">
          <p className="justify-center items-center flex h-full">To Be Add</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
