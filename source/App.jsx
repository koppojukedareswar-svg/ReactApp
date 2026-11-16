import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Greeting from "./Greeting.jsx";

function App() {
  return (
    <>
      <nav className="navigation" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}
function Home() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const courses = [
    {
      id: "react-basics",
      title: "React Basics",
      description: "Learn how React builds a page from components.",
    },
    {
      id: "components",
      title: "Components",
      description: "Split a page into small, reusable pieces.",
    },
    {
      id: "state",
      title: "State",
      description: "Make the page respond to user actions.",
    },
  ];

  return (
    <main className="app">
      <Greeting name={name} />
      <p>I am learning React.</p>
      <label htmlFor="name">Your name</label>
      <input
        id="name"
        placeholder="Enter your Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="button" onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
      <section className="course-list" aria-labelledby="courses-heading">
        <h2 id="courses-heading">What you are learning</h2>
        <div className="courses">
          {courses.map((course) => (
            <article className="course-card" key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function About() {
  return (
    <main className="app">
      <h1>About</h1>
      <p>This page is shown when the URL is /about.</p>
    </main>
  );
}

function Products() {
  return (
    <main className="app">
      <h1>Products</h1>
      <p>This page is shown when the URL is /products.</p>
    </main>
  );
}

export default App;
