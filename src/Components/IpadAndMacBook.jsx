import macLaptop from "../assets/home/mac-laptop.jpg";
import newIpad from "../assets/home/new-ipad.jpg";

export default function IpadAndMacBook() {
  return (
    <section class="flex flex-col md:flex-row m-5 text-center gap-5">
      <section class="bg-[#F5F5F7] w-full md:w-1/2 p-10 flex flex-col items-center">
        <p class="text-sm text-gray-500">16-inch model</p>
        <h3 class="mt-1 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
          MacBook Pro
        </h3>
        <p class="mt-2 text-xl text-gray-700">The best for the brightest.</p>

        <ul class="mt-6 flex items-center justify-center gap-x-6 text-blue-600">
          <li>
            <a
              href="#"
              class="inline-flex items-center font-medium hover:underline"
            >
              Learn more{" "}
              <span class="ml-1" aria-hidden="true">
                ›
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="inline-flex items-center font-medium hover:underline"
            >
              Buy{" "}
              <span class="ml-1" aria-hidden="true">
                ›
              </span>
            </a>
          </li>
        </ul>

        <img
          src={macLaptop}
          alt="MacBook Pro"
          class="mt-8 mx-auto w-full max-w-3xl h-auto drop-shadow-xl"
          loading="lazy"
        />
      </section>
      <section class="bg-[#F5F5F7] w-full md:w-1/2 p-10 flex flex-col items-center">
        <p class="text-sm text-gray-500">The new</p>
        <h3 class="mt-1 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
          iPad
        </h3>
        <p class="mt-2 text-xl text-gray-700">
          Like a computer. Unlike any computer.
        </p>

        <ul class="mt-6 flex items-center justify-center gap-x-6 text-blue-600">
          <li>
            <a
              href="#"
              class="inline-flex items-center font-medium hover:underline"
            >
              Learn more{" "}
              <span class="ml-1" aria-hidden="true">
                ›
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="inline-flex items-center font-medium hover:underline"
            >
              Buy{" "}
              <span class="ml-1" aria-hidden="true">
                ›
              </span>
            </a>
          </li>
        </ul>
        <img
          src={newIpad}
          alt="iPad with accessories"
          class="mt-8 mx-auto w-full max-w-3xl h-auto drop-shadow-xl"
          loading="lazy"
        />
      </section>
    </section>
  );
}
