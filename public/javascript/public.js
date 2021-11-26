const response = await fetch(`/`, {
  method: "POST",
  body: JSON.stringify({
    title,
    post_url,
  }),
  headers: {
    "Content-Type": "application/json",
  },
});

if (response.ok) {
  document.location.replace("/dashboard");
} else {
  alert(response.statusText);
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
