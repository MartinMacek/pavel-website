import AppBar from "./components/appbar";
import ContactLink from "./components/contact-link";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-100 font-sans dark:bg-zinc-900">
      <main className="flex flex-col min-h-screen w-full py-8 px-6 ">
        <AppBar />
        <div className="flex flex-col h-full mt-8 gap-4">
          <h2 className="text-5xl lg:text-6xl xl:text-8xl max-w-3xl lg:max-w-4xl xl:max-w-7xl font-light">
            Dřevorubecké práce, sečení trávy, čištění pozemků a údržba zeleně.
          </h2>
          <div className="flex h-full"></div>

          <div className="flex flex-col gap-4 max-w-md items-start mb-8">
            <div
              className="text-md font-semibold"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </div>
            <div
              className="text-md text-gray-500 font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </div>
            <button className="mt-4">Email</button>
          </div>

          <div className="flex flex-row gap-4 justify-between items-end">
            <div className="flex flex-row gap-6">
              <ContactLink text="pavel@spruzina.cz" />
              <ContactLink text="+420 724 123 456" />
            </div>

            <div className="flex flex-row gap-2">
              <button>Instagram</button>
              <button>WhatsApp</button>
              <button>Sečení</button>
              <button >Timmy House</button>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
