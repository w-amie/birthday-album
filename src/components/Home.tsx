import Gallery from "./Album";

export function Home() {
  return (
    <section className="bg-emerald-800 px-4 py-20 dark:bg-gray-900 lg:py-36 lg:pb-2">
      <div className="mx-auto grid min-h-[70vh] px-2 py-4 pb-20 lg:max-w-screen-xl lg:px-8 xl:gap-4">
        <h1 className="text-4xl text-white lg:text-8xl">Celebrating Кирил </h1>
        <h1 className="text-white lg:text-2xl">May 15th, 2023 - Chicago, IL</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/2560px-Flag_of_Bulgaria.svg.png"
          alt="bulgarian flag"
          className="h-10 w-[100vw] lg:w-full"
        />
        <Gallery />
      </div>
    </section>
  );
}
