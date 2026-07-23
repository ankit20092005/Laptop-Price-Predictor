import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto py-10 px-6">
        {children}
      </main>
    </>
  );
}

export default Layout;