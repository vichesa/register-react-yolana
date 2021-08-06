import React from "react";

export default function Home(props) {
  const [username] = React.useState(localStorage.getItem("username"));
  const [email] = React.useState(localStorage.getItem("email") || "");
  const [id] = React.useState(localStorage.getItem("id") || "");

  const logout = () => {
    props.history.push("/");
    // window.location.reload();
    // console.log("user", props);
  };
  return (
    <div>
      <form
        className="form homes"
        style={{ alignItems: "center", marginTop: "10%" }}
      >
        <h1 style={{ textAlign: "center" }}>Welcome to Vichesa React</h1>
        <label />
        <h2 style={{ textAlign: "center" }}>
          Welcome : <i>{username}</i>
        </h2>
        <h2 style={{ textAlign: "center" }}>
          Your ID : <i>{id}</i>
        </h2>

        <h2 style={{ textAlign: "center" }}>
          Your Email : <i>{email}</i>
        </h2>

        <div>
          <button onClick={logout}>LOGOUT</button>
        </div>
      </form>
    </div>
  );
}
