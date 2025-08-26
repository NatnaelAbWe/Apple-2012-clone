import Iphone from "../assets/home/iphone11-pro-bg.jpg";

function Iphone11() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat h-[700px] text-white"
      style={{ backgroundImage: `url(${Iphone})` }}
    >
      <div className="max-w-4xl mx-auto text-center py-10">
        <h2 className="text-6xl font-bold mb-4">iPhone 11 Pro</h2>
        <p className="text-2xl mb-2">
          Pro cameras. Pro display. Pro performance.
        </p>
        <p className="text-sm text-gray-300 mb-6">
          From $24.95/mo. or $599 with trade-in
        </p>
        <div className="space-x-4">
          <a href="#" className="text-blue-400 hover:underline">
            Learn more{" "}
            <span aria-hidden="true" className="ml-1">
              &gt;
            </span>
          </a>
          <a href="#" className="text-blue-400 hover:underline">
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

export default Iphone11;
