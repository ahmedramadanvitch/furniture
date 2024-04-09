import MainHeading from "../MainHeading/MainHeading";

function SignUp() {
  return (
    <div className="container px-5 mx-auto my-5">
      <MainHeading
        head_text="Sign Up For Our Newsletter"
        sub_text="Subscribe & be the first to know of all the exclusive offers, free giveaways, and one-in-a-lifetime deals!"
      />
      <div className="flex flex-col border border-gray-300 gap-3 md:flex-row md:border-none p-3 md:p-0 rounded-lg justify-center ">
        <input
          type="email"
          placeholder="Your Email Address"
          id=""
          className="border border-gray-300 px-3 py-3 rounded-3xl outline-none md:w-[40%] "
        />
        <button
          type="search"
          className="text-white bg-black rounded-3xl px-8 py-4 font-semibold tracking-wider hover:bg-slate-800"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default SignUp;
