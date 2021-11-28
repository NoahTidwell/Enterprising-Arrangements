async function newFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const venuetype = document.querySelector("#venuetype").value;
  const url = document.querySelector("#url").value;
  const street = document.querySelector("#street").value;
  const city = document.querySelector("#city").value;
  const state = document.querySelector("#state").value;
  const zipcode = document.querySelector("#zipcode").value;
  const min = document.querySelector("#min").value;
  const max = document.querySelector("#max").value;
  // const third_party_vendors = document.querySelector(
  //   'input[name="third_party_vendors"]'
  // ).value;

  // const  = document.querySelector('input[name=""]').value;
  // const  = document.querySelector('input[name=""]').value;
  // const  = document.querySelector('input[name=""]').value;
  // const  = document.querySelector('input[name=""]').value;

  const response = await fetch(`/api/venues`, {
    method: "POST",
    body: JSON.stringify({
      name,
      venuetype,
      url,
      street,
      city,
      state,
      zipcode,
      min,
      max,
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
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
