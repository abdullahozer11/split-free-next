export default function Goodbye() {
  return (
    <main className="h-screen bg-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-24 sm:px-6 lg:py-32 lg:px-8">
        <div className="relative text-white px-4 py-8 shadow-2xl sm:rounded-3xl sm:px-8 sm:py-16 md:py-24 lg:flex lg:gap-x-20 lg:px-16 lg:py-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h1 className="text-3xl font-bold sm:text-4xl">
              Goodbye
            </h1>
            <p className="mt-4 text-base sm:text-lg">
              Your account is successfully deleted.<br />
              Thank you for using SplitFree! We hope to see you again soon.
            </p>
            <p className="mt-4 text-base sm:text-lg">
              If you have any feedback or need assistance, please do not hesitate to contact us:
            </p>
            <address className="mt-4 text-base sm:text-lg">
              Abdullah OZER<br />
              <a href="mailto:abdullahozer11@hotmail.com" className="text-blue-300">abdullahozer11@hotmail.com</a><br />
            </address>
          </div>
          <div className="flex justify-center mt-10 lg:mt-0 lg:justify-start lg:items-center">
            <div className="text-center lg:text-left">
              <img
                className="mx-auto lg:mx-0 lg:w-40"
                src="https://i.ibb.co/FJYxP8T/Split-Free.png"
                alt="App screenshot"
                width={60}
                height={60}
              />
              <p className="mt-6 text-base sm:text-lg">
                Best regards,
              </p>
              <p className="mt-4 text-base font-bold sm:text-lg">
                The SplitFree Team
              </p>
              <div className="mt-8">
                <a href="/" className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                  Return to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
