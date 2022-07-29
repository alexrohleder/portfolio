function BaseFooter() {
  return (
    <footer className="container print:hidden">
      <div className="p-8 mx-auto">
        <div className="p-8 rounded-md">
          This site is released under a{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            className="hover:text-blue-500"
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
