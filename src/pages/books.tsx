import React from "react";


import "../css/books.css";

function Books() {
  return (
    <>
      {/* Button to Show Add Book Form */}
      <div className="container m-2000 border text-center">
        <button className="btn btn-primary">Add Book</button>
      </div>

      {/* Add Book Form */}
      <div className="container mt-44 h-screen " style={{ display: "none" }}>
        <h3 className="text-center text-primary">Add New Book</h3>

        <form>
          <div className="mb-3">
            <label htmlFor="bookTitle" className="form-label">
              Book Title
            </label>
            <input
              type="text"
              className="form-control"
              id="bookTitle"
              placeholder="Enter book title"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="bookAuthor" className="form-label">
              Author
            </label>
            <input
              type="text"
              className="form-control"
              id="bookAuthor"
              placeholder="Enter author's name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="bookPublicationYear" className="form-label">
              Publication Year
            </label>
            <input
              type="number"
              className="form-control"
              id="bookPublicationYear"
              min="1000"
              max="2025"
              placeholder="Enter publication year"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="bookPublisher" className="form-label">
              Publisher
            </label>
            <input
              type="text"
              className="form-control"
              id="bookPublisher"
              placeholder="Enter publisher"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="bookQuantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="bookQuantity"
              min="0"
              placeholder="Enter quantity"
              required
            />
          </div>

          <button type="submit" className="btn btn-success">
            Add Book
          </button>
        </form>
      </div>

      {/* Manage Books Table */}
      <div className="container mt-5">
        <h3 className="text-center text-primary">Manage Books</h3>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Book Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>{/* Books will be rendered here */}</tbody>
        </table>
      </div>
    </>
  );
}

export default Books;
