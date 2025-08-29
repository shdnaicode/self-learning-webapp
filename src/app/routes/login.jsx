function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="h-[45vh] w-[45vh] overflow-hidden rounded-lg border bg-[#D3DAD9]/20 backdrop-blur-sm">
        <form
          className="flex h-full flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex w-full justify-center pt-7 text-2xl font-semibold">
            LOGIN
          </div>
          <label
            htmlFor="email"
            className="text-md mt-7 mb-2 self-start pl-6 font-medium"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            maxLength={30}
            placeholder="username@gmail.com"
            className="mb-5 h-11 w-[40vh] rounded-lg border border-black/40 bg-white pl-3 text-sm font-normal outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></input>
          <div className="flex justify-between items-center w-full">
            <label
              htmlFor="password"
              className="text-md mb-2 self-start pl-6 font-medium"
            >
              Password
            </label>
            <a href="#" className="text-md self-end pr-6 mb-2 font-normal text-[#1877F2] hover:underline">Forgot password?</a>
          </div>
          <input
            id="password"
            type="password"
            maxLength={30}
            className="mb-9 h-11 w-[40vh] rounded-lg border border-black/40 bg-white pl-3 text-sm font-normal outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></input>
          <button
            value="Submit"
            type="submit"
            className="text-md h-11 w-[40vh] cursor-pointer rounded-lg border border-black/40 bg-[#1877F2] font-normal text-white outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

      </div>
      <div className="mt-7 flex flex-col items-center justify-center">
        <div className="h-[10vh] w-[45vh] overflow-hidden rounded-lg border bg-[#D3DAD9]/20 backdrop-blur-sm">
          <p className="flex h-full items-center justify-center">
            Don't have account?&nbsp;
            <a href="#" className="text-[#1877F2] hover:underline">
              Sign up here!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
