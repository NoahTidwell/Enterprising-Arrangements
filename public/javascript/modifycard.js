async function deleteFormHandler(event) {
  event.preventDefault();
  var targetEl = event.target;
  if (targetEl.matches(".delBtn")) {
    var id = targetEl.id;
    const response = await fetch(`/api/venues/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
       document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  if (targetEl.matches(".editBtn")) {
    var id = targetEl.id;
    document.location.replace(`/dashboard/edit/${id}`)
  }
}
document.querySelector("#target").addEventListener('click', deleteFormHandler);