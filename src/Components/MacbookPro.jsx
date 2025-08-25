import mac from "../assets/home/mac-laptop.jpg";

function MacBookPro() {
  return (
    <section class="bg-[#FAFAFA]">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10 text-center">
        {/* <!-- Eyebrow --> */}
        <p class="text-sm sm:text-base text-gray-500">16-inch model</p>
        {/* <!-- Title --> */}
        <h2 class="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          MacBook Pro
        </h2>
        {/* <!-- Subtitle --> */}
        <p class="mt-3 text-2xl sm:text-3xl text-gray-700">
          The best for the brightest.
        </p>
        {/* <!-- CTAs --> */}
        <ul class="mt-6 flex items-center justify-center gap-x-6 text-blue-600">
          <li>
            <a
              href="#"
              class="inline-flex items-center font-medium hover:underline"
            >
              Learn more{" "}
              <span aria-hidden="true" class="ml-1">
                &gt;
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="inline-flex items-center font-medium hover:underline"
            >
              Buy{" "}
              <span aria-hidden="true" class="ml-1">
                &gt;
              </span>
            </a>
          </li>
        </ul>
        {/* <!-- Product image --> */}
        <div class="mt-10 sm:mt-12">
          <img
            src={mac}
            alt="macbook pro"
            class="mx-auto w-full max-x-4xl h-auto drop-shadow-green-600"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default MacBookPro;
