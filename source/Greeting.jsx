function Greeting({ name }) {
  const displayName = name.trim() || "User";

  return <h1>Hello, {displayName}!</h1>;
}

export default Greeting;
