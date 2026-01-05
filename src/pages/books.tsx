import { useState } from "react";
import { Link } from "react-router-dom";

type Book = {
  title: string;
  author: string;
  genre: string;
  availability: string;
};

export default function Books() {
  const [showForm, setShowForm] = useState(false);

  const [books, setBooks] = useState<Book[]>([
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      availability: "Available",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      availability: "Checked Out",
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      availability: "Available",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Classic",
      availability: "Available",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-Help",
      availability: "Checked Out",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Philosophical",
      availability: "Available",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      genre: "Programming",
      availability: "Available",
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      genre: "Programming",
      availability: "Checked Out",
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "History",
      availability: "Available",
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      genre: "Finance",
      availability: "Available",
    },
  ]);

  return (
    <div className="min-h-screen mb-10">
      <div className="intro h-[30vh] border  bg-linear-to-r from-[#242e3d] to-[#323f54] "></div>
      {/* ================= ADD BOOK BUTTON ================= */}
      <div className="mx-auto mt-6 text-center  w-full ">
        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-lg bg-indigo-500 px-6 py-2 text-white hover:bg-indigo-600 transition"
        >
          Add Book
        </button>
      </div>

      {/* ================= ADD BOOK FORM ================= */}
      {showForm && (
        <div className="mx-auto mt-6 max-w-xl rounded-lg bg-black/80 p-6 shadow">
          <h3 className="mb-4 text-center text-xl font-semibold text-indigo-500">
            Add New Book
          </h3>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Book Title</label>
              <input className="mt-1 w-full border-[0.14px] border-gray-500 rounded  px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium">Author</label>
              <input className="mt-1 w-full border-[0.14px] border-gray-500 rounded  px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Publication Year
              </label>
              <input
                type="number"
                className="mt-1 w-full border-[0.14px] border-gray-500 rounded  px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Publisher</label>
              <input className="mt-1 w-full border-[0.14px] border-gray-500 rounded  px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium">Quantity</label>
              <input
                type="number"
                className="mt-1 w-full border-[0.14px] border-gray-500 rounded  px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <button className="w-full rounded bg-emerald-500 py-2 text-white hover:bg-emerald-600 transition">
              Add Book
            </button>
          </form>
        </div>
      )}

      {/* ================= BOOK TABLE ================= */}
      <div className="mx-auto mt-10   w-full max-w-400 ">
        <h3 className="mb-4 text-center text-xl font-semibold text-indigo-500">
          Manage Books
        </h3>

        <div className="overflow-x-auto rounded-lg bg-black shadow  ">
          <table className="w-full text-center ">
            <thead className="bg-slate-700 text-white">
              <tr>
                <th className="py-3">#</th>
                <th>Book Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Availability</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {books.map((book, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-700 text-center border"
                >
                  <td className="py-2">{index + 1}</td>
                  <td className="">{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>{book.availability}</td>
                  <td className="space-x-2">
                    <button className="rounded bg-indigo-500 px-3 py-1 text-sm text-white hover:bg-indigo-600">
                      Edit
                    </button>
                    <button className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
