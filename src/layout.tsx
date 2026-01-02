import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-full min-w-full border border-red-500">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-800 shadow-lg">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <div className="flex items-center gap-3 text-white font-semibold text-lg">
            <img
              src="src\assets\library-icon.png"
              className="h-10 w-10 rounded-lg"
            />
            <span>Library MS</span>
          </div>

          <div className="flex items-center gap-2">
            {["Dashboard", "Books", "Members", "Settings"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="rounded-lg px-4 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-amber-400 transition"
              >
                {item}
              </Link>
            ))}
            <button className="ml-2 text-sm text-red-400 hover:text-red-300">
              Log out
            </button>
          </div>
        </div>
      </nav>

      {/* This is where child pages will render */}
      <div className="min-h-full w-full border-2  row  ">
        <Outlet />
      </div>
      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3">
          {/* Gallery */}
          <div>
            <h3 className="text-lg font-semibold text-white">Image Gallery</h3>
            <div className="my-4 h-1 w-12 rounded bg-sky-400" />
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`src/assets/images/img ${i}.jpeg`}
                  className="h-24 w-full rounded-lg object-cover hover:scale-105 transition"
                />
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-white">About</h3>
            <div className="my-4 h-1 w-12 rounded bg-sky-400" />
            <p>
              Our Library Management System simplifies accessing and managing
              library resources efficiently.
            </p>
            <Link className="mt-3 inline-block text-sky-400" to="#">
              Learn more →
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="my-4 h-1 w-12 rounded bg-sky-400" />
            <p>
              <strong>Phone:</strong> +2519-00-00-00-00
            </p>
            <p>
              <strong>Address:</strong> Addis Ababa, Ethiopia
            </p>
            <p>
              <strong>Email:</strong> TMGROUP@gmail.com
            </p>
          </div>
        </div>

        <div className="bg-slate-900 py-4 text-center text-sm">
          Designed by <span className="text-sky-400">TM GROUP</span>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
