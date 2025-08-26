import Iphone11 from "../assets/home/iphone11-bg.jpg";

export default function Iphone11Pro() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat h-[700px] text-black/90"
      style={{ backgroundImage: `url(${Iphone11})` }}
    >
      <div className="max-w-4xl mx-auto text-center py-10">
        <h2 className="text-6xl font-bold mb-4">iPhone 11</h2>
        <p className="text-2xl mb-2">Just the right amount of everything.</p>
        <p className="text-sm text-gray-600 mb-6">
          From $16.62/mo. or $399 with trade‑in.
        </p>
        <div className="space-x-4">
          <a href="#" className="text-blue-600 hover:underline">
            Learn more{" "}
            <span aria-hidden="true" className="ml-1">
              &gt;
            </span>
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            Buy{" "}
            <span aria-hidden="true" className="ml-1">
              &gt;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
