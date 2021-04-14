const Index = () => (
  <main className="container m-auto px-6 py-24">
    <header className="flex flex-col lg:flex-row gap-4">
      <img
        className="rounded h-36 w-36"
        src="https://media-exp1.licdn.com/dms/image/C5603AQHs6kpEH849ZQ/profile-displayphoto-shrink_800_800/0/1547587447758?e=1623888000&v=beta&t=dkWP8_jl1mg6g63e33yLggzQDbu6oakK0ui2FZKDQ-c"
      />
      <div className="flex flex-col w-full lg:h-36 lg:justify-between">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <div className="w-full lg:w-auto">
            <h1 className="text-4xl font-semibold">Alex Rohleder</h1>
            <h2 className="text-lg">Software Engineer</h2>
          </div>
          <a
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            href="https://calendly.com/alexrohleder/30min"
            target="_blank"
          >
            Schedule a meeting
          </a>
        </div>
        <div className="mt-24 grid lg:grid-rows-2 lg:mt-0 lg:grid-cols-2 gap-2 w-full">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a href="tel:+4741244953">+47 412 44 953</a>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <a href="mailto:contact@alexrohleder.com">
              contact@alexrohleder.com
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <a href="https://linkedin.com/in/alexrohleder" target="_blank">
              linkedin.com/in/alexrohleder
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Trondheim, Norway (open to remote)
          </div>
        </div>
      </div>
    </header>
  </main>
);

export default Index;
