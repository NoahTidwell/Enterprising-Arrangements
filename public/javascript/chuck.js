const chuckNorrisEl = document.querySelector("#chuck");

//The API call to the chucknorris API:
let getcreateJokeAJAX = async function (getJoke) {
  try {
    let res = await fetch("https://api.chucknorris.io/jokes/random");

    //Json response from the API call:
    let resJSON = await res.json(getJoke);

    if (res.ok === false) {
      console.log("API not working");
      throw new Error(`${res.status} (${res.statusText})`);
    }

    //Console log the responses to see data coming back for testing and trounble shooting purposes.
    console.log(res, resJSON);

    //Return JSON data:
    return resJSON;
  } catch (err) {
    // alert (err);
  }
};

// Getting the API data that will populate Chuck Noriiiiiiiiiiiiiiiiiiis! card:
async function createJoke(getJoke) {
  try {
    let createJoke = await getcreateJokeAJAX(getJoke);

    //Grabs just the createJoke data that we need:
    let createJokeData = createJoke;

    if (createJokeData === undefined) {
      throw new Error("We don't have any joke data");
    }

    //Create the object we need for the HTML card data:
    let createJokeDataForCard = {
      chuckImage: createJokeData.icon_url,
      randomJoke: createJokeData.value,
    };

    let cardHTML = jokeCard(createJokeDataForCard, "Parks for stargazing");

    //Add HTML to the DOM:
    chuckNorrisEl.insertAdjacentHTML("beforeend", cardHTML);
  } catch (err) {
    //alert(err)
  }
}

//Create the HTML card template to be inserted into the HTML element:
function jokeCard(obj) {
  let htmlOut = `
  <div class="d-flex justify-content-center mt-5 mb-5">
  <div class="card shadow rounded-2" style="width: 18rem;">
  <img src="${obj.chuckImage}" class="card-img-top" alt="Chuck Nooooooooorrriiiiiiiiiiiiiiisssss!">
  <div class="card-body bg-light">
    <p class="card-text">${obj.randomJoke}</p>
  </div>
  </div>`;

  return htmlOut;
}

//This command builds the card on the page:

createJoke();
