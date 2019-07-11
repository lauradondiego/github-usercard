/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/





const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
  'lauradondiego',
  'ayunas'
];

followersArray.forEach( username => {
  axios.get(`https://api.github.com/users/${username}`)
  .then(data => {
    // handle success
    const instructor = data.data
    cards.appendChild(createInstructorCard(instructor))
    console.log('page is working', data.data);
  })
  .catch(error => {
    // handle error
    console.log('currently down', error);
  })

})



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const cards = document.querySelector('.cards')

  // axios.get('https://api.github.com/users/lauradondiego')
  // .then(data => {
  //   // handle success
  //   // console.log(data)
  //   const instructor = data.data
  //   cards.appendChild(createInstructorCard(instructor))
  //   console.log('page is working', data.data);
  // })
  // .catch(error => {
  //   // handle error
  //   console.log('currently down', error);
  // })
  

  function createInstructorCard (instructor) {
      const card = document.createElement('div')
      const cardInfo = document.createElement('div')
      const selfie = document.createElement('img')
      const fullName = document.createElement('h3')
      const username = document.createElement('p')
      const location = document.createElement('p')
      const profUrl = document.createElement('a')
      const profile = document.createElement('p')
      const followers = document.createElement('p')
      const following = document.createElement('p')
      const bio = document.createElement('p')
      console.log(cardInfo, selfie, fullName, username, location, profUrl, followers, following, bio);

      
      card.classList.add('card');
      cardInfo.classList.add('card-info');
      fullName.classList.add('name');
      username.classList.add('username');

      selfie.src = instructor.avatar_url
      fullName.textContent = instructor.name
      username.textContent = instructor.login
      location.textContent = `Location: ${instructor.location}`
      profUrl.textContent = instructor.html_url
      profUrl.href = instructor.html_url
      profile.textContent = `Profile: `
      followers.textContent = `Followers: ${instructor.followers}`
      following.textContent = `Following: ${instructor.following}`
      bio.textContent = `Bio: ${instructor.bio}`


      profile.appendChild(profUrl);
      cardInfo.appendChild(fullName);
      cardInfo.appendChild(username);
      cardInfo.appendChild(location);
      cardInfo.appendChild(profile);
      cardInfo.appendChild(followers);
      cardInfo.appendChild(following);
      cardInfo.appendChild(bio);
      card.appendChild(selfie);
      card.appendChild(cardInfo);


    return card
  
  }
