let fetchJoke = async () => {
    let url = 'https://official-joke-api.appspot.com/random_joke';
    try {
      let response = await fetch(url);
      let jokeData = await response.json();
      return jokeData;
    } catch (error) {
      console.log(error);
    }
  };
  
  async function displayJoke() {
    let jokeData = await fetchJoke();
    if (!jokeData) {
      return;
    }
  
    let { id, punchline, setup, type } = jokeData;
  
    let cardContainer = document.getElementById("card-container");
    
    cardContainer.innerHTML = `
      <div class="cards">
        <div class="front-card">
          <span class="id">${id}</span>
          <h3 class="type">${type}</h3>
          <p class="setup">${setup}</p>
        </div>
        <div class="back-card">
          <span class="id">${id}</span>
          <h3 class="type">${type}</h3>
          <p class="punchline">${punchline}</p>
        </div>
      </div>
    `;
  }
  
  displayJoke();
  
  let reload = document.getElementById('btn');
  reload.addEventListener('click', function(){
    location.reload();
  })