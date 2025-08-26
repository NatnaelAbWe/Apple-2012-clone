import watch from "../assets/home/watch-series-5.jpg";
import watchSeriesLogo from "../assets//icons/watch-series5-logo.png";
import appleCard from "../assets/home/apple-card.jpg";
import appleCardLogo from "../assets/icons/apple-card-logo.png";

export default function WatchSeries() {
  return (
    <section className="flex flex-col md:flex-row m-5 text-center">
      <section
        className=" bg-cover bg-center bg-no-repeat h-[700px] w-full md:w-1/2 p-10"
        style={{ backgroundImage: `url(${watch})` }}
      >
        <img
          src={watchSeriesLogo}
          className="mx-auto"
          alt="apple watch series 5 logo"
          loading="lazy"
        />
        <p className="mt-7.5 text-3xl">
          With the new Always-On Retina display
          <br />
          You’ve never seen a watch like this.
        </p>
        <div className="space-x-4 mt-2">
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
      </section>
      <section
        className="bg-cover bg-center bg-no-repeat h-[700px] w-full md:w-1/2 p-10 ml-5"
        style={{ backgroundImage: `url(${appleCard})` }}
      >
        <img
          src={appleCardLogo}
          className="mx-auto"
          alt="apple watch series 5 logo"
          loading="lazy"
        />
        <p className="mt-7.5 text-3xl">
          Get 3% Daily Cash on purchases from
          <br />
          Apple using Apple Card.
        </p>
        <div className="space-x-4 mt-2">
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
      </section>
    </section>
  );
}
