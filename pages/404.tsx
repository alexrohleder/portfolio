import Header from "../components/Header";

const NotFound = () => {
  return (
    <main className="container m-auto px-8 py-24">
      <Header />
      <hr className="h-px bg-gray-300 w-full my-12" />
      <div className="text-center">
        <h1 className="mb-2 font-semibold text-xl">404 NOT FOUND</h1>
        <p>
          Hey, I'm still working on this site so not all pages are finished yet.
        </p>
      </div>
    </main>
  );
};

export default NotFound;
