export default function Home() {
  return (
    <main className="h-screen bg-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 sm:pt-10 lg:pt-60">
        <div
          className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Manage your expenses
              <br/>
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              SplitFree is a smart and free expense splitter app.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=xyz.splitfree"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              {/*<a href="#" className="text-sm font-semibold leading-6 text-white">*/}
              {/*  Learn more <span aria-hidden="true">→</span>*/}
              {/*</a>*/}
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="mx-auto lg:w-[25rem] sm:w-[10rem]"
              src="https://i.ibb.co/FJYxP8T/Split-Free.png"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
