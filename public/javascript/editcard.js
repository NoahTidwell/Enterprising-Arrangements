async function editFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const comments = document.querySelector("#comments").value;
  const url = document.querySelector("#url").value.trim();
  const street = document.querySelector("#street").value.trim();
  const city = document.querySelector("#city").value.trim();
  const state = document.querySelector("#state").value.trim();
  const zipcode = document.querySelector("#zipcode").value.trim();
  const min = document.querySelector("#min").value.trim();
  const max = document.querySelector("#max").value.trim();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  //validate yes or not on Third party vendor
  const rbs = document.querySelectorAll('input[name="flexRadioDefault"]');
  for (const rb of rbs) {
    if (rb.checked) {
      third_party_vendors = parseInt(rb.value);
      break;
    }
  }
  const response = await fetch(`/api/venues/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      name,
      comments,
      url,
      street,
      city,
      state,
      zipcode,
      min,
      max,
      third_party_vendors,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
