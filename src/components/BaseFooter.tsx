function BaseFooter() {
  return (
    <footer className="container print:hidden">
      <div className="px-8 py-32 lg:py-48 text-center">
        <a href="mailto:alexrohleder96@gmail.com">
          <div className="text-2xl -mb-2 lg:-mb-4">
            I can help on your project
          </div>
          <div className="text-6xl lg:text-9xl font-bold hover:text-blue-500">
            Get in touch.
          </div>
        </a>
      </div>
      <div className="mx-auto p-8">
        <div className="bg-gray-900 text-white p-8 rounded-md">
          This site is released under a{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            className="hover:text-blue-400"
          >
            Creative Commons BY-NC License
          </a>
          . <br className="hidden lg:block" /> Made with ❤️ by Alex Rohleder –
          Freelancer Frontend Engineer based in Oslo, Norway.
        </div>
      </div>
    </footer>
  );
}

export default BaseFooter;
