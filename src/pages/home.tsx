import React from "react";

import {
  BookOpen,
  Users,
  BookMarked,
  Settings,
  ArrowRight,
} from "lucide-react";
import { StatCard } from "../components/StatCard.tsx";
import { ActionButton } from "../components/ActionButton.tsx";

const Home = () => {
  return (
    <div className="min-h-full ">
      {/* Hero Section */}
      <section className=" flex items-center justify-center px-4 min-h-200 border-4 border-red-400">
        <div className="">
          <div className="">
            <img
              src={"../assets/library-icon.png"}
              alt="Library Management System"
              className=""
            />
          </div>

          <h1 className="">
            Welcome to the Library
            <span className="">Management System</span>
          </h1>

          <p className="">
            Stay organized and efficient with our elegant solution for managing
            your library's collection, members, and transactions.
          </p>

          <div className="">
            <button className="">
              Start Managing Books
              <ArrowRight className="" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
