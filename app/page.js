import Link from "next/link";

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="font-bold text-6xl text-primary">ChatWander AI</h1>
          <p className="py-6 text-lg leading-loose">
            Experience cities like never before with ChatWander AI: Your
            friendly chat companion meets expert tour guides for seamless
            exploration!
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
