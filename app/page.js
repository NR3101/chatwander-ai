import Link from "next/link";

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="font-bold text-6xl text-primary">ChatWander AI</h1>
          <p className="py-6 text-lg font-semibold leading-loose ">
            ChatWander AI: Your go-to for instant answers! Explore cities tours
            and beyond with our intuitive AI companion, delivering knowledge,and
            providing tailored info and insights seamlessly.
          </p>
          <Link href="/chat" className="btn btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
