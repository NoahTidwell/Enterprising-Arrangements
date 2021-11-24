async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const first_name = document.querySelector("#first_name").value.trim();
  const last_name = document.querySelector("#last_name").value.trim();
  const phone_number = document.querySelector("#phone_number").value.trim();
  const position_title = document.querySelector("#position_title").value.trim();

  if (
    username &&
    email &&
    password &&
    first_name &&
    last_name &&
    phone_number &&
    position_title
  ) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        phone_number,
        position_title,
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // check the response status
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
