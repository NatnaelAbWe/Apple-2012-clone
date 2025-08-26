import appleTvBackground from "../assets/home/apple-tv-background.jpg";
import appleTvLogo from "../assets/icons/apple-tv-logo.png";
import servantLogo from "../assets/icons/servant-logo.png";
import airPodPro from "../assets/home/air-pods.jpg";

export default function AppleTv() {
  return (
    <section class="flex flex-col md:flex-row m-5 text-center gap-5">
      <section
        class="bg-cover bg-center bg-no-repeat h-[700px] w-full md:w-1/2 p-10 flex justify-center flex-col"
        style={{ backgroundImage: `url(${appleTvBackground})` }}
      >
        <img
          src={appleTvLogo}
          class="mx-auto"
          alt="apple tv logo"
          loading="lazy"
        />
        <img
          src={servantLogo}
          alt="servant logo"
          class="my-auto"
          loading="lazy"
        />
        <a href="#" class="text-sm font-bold text-blue-600">
          Watch Trailer
        </a>
      </section>
      <section class="bg-black bg-center bg-no-repeat h-[700px] w-full md:w-1/2 p-10 flex flex-col justify-center text-white">
        <h2 class="text-4xl font-extrabold tracking-tight">AirPods Pro</h2>
        <p class="my-4 text-2xl">Magic like you’ve never heard.</p>
        <div class="space-x-4 mt-2">
          <a href="#" class="text-blue-600 hover:underline">
            Learn more{" "}
            <span aria-hidden="true" class="ml-1">
              &gt;
            </span>
          </a>
          <a href="#" class="text-blue-600 hover:underline">
            Buy{" "}
            <span aria-hidden="true" class="ml-1">
              &gt;
            </span>
          </a>
          <img
            src={airPodPro}
            class="mx-auto my-10"
            alt="air-pods"
            loading="lazy"
          />
        </div>
      </section>
    </section>
  );
}
