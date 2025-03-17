import Link from "next/link";
export default function Hero() {
  return (
    <section className="bg-[url('/img/hero/hero-bg.jpg')] bg-center bg-cover  text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl sm:text-6xl font-bold">Find Your Dream Home</h1>
        <p className="text-lg mt-4">
          Search through thousands of listings to find the perfect home for you.
        </p>
        <div className="flex gap-4 mt-8">
          <input
            type="text"
            placeholder="Search for homes..."
            className="p-2 w-full"
          />
          <button className="bg-yellow-500 text-white px-4 py-2">Search</button>
        </div>
      </div>
    </section>
  );
}
