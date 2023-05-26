let petList = {
  name: "The Fashion Pet",
  address: {
    country: "Mexico",
    city: "Tijuana",
    zip: "23456",
  },
  phone: "6659987311",
  pets: [
    {
      name: "Scooby",
      age: 26,
      gender: "Male",
      service: "Grooming",
      breed: "Great Dane",
    },
    {
      name: "Scrappy",
      age: 1,
      gender: "Male",
      service: "Neuter",
      breed: "Great Dane",
    },
    {
      name: "Snoop",
      age: 5,
      gender: "Male",
      service: "Grooming",
      breed: "Doberman",
    },
  ],
};

document.getElementById("info").innerHTML = ` 
<p> Welcome to ${petList.name}</p>
<p> Located in ${petList.address.city} and ${petList.address.country} zip code ${petList.address.zip} </p>
<p> name: ${petList.pets[0].name}</p>
<p> name: ${petList.pets[1].name}</p>
<p> name: ${petList.pets[2].name}</p>
`;

let listOfPets = ["Scooby", "Scrappy", "Snoop"];

function register() {
  let newPet = document.getElementById("txtNewPet").value;
  listOfPets.push(newPet);
  displayPets();
}

function displayPets() {
  for (let index = 0; index < listOfPets.length; index++) {
    document.write("Pet name;" + listOfPets[index]);
  }
}

console.log(petList);
