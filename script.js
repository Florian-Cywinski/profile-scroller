// An example for what we can use generators for

// We use a generator to create an iterator that basically iterates through person profiles

// To create some user profiles
const people = [  // An array of person profiles
  { // A person profile object
    name: 'Jamie Williams',
    age: 26,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/1.jpg',
    looking: 'Female looking for male',
  },
  {
    name: 'John Smith',
    age: 35,
    gender: 'male',
    location: 'New York, NY',
    imageURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    looking: 'Male looking for female',
  },
  {
    name: 'Bob Johnson',
    age: 42,
    gender: 'male',
    location: 'Chicago, IL',
    imageURL: 'https://randomuser.me/api/portraits/men/2.jpg',
    looking: 'Male looking for male',
  },
  {
    name: 'Shannon Jackson',
    age: 29,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/2.jpg',
    looking: 'Female looking for female',
  },
];


// To bring in the relevant elements
const container = document.querySelector('.container');
const img = document.querySelector('img');
const profileInfo = document.querySelector('.profile-info');
const nextBtn = document.querySelector('#next');


// To create the generator
function* createPeopleIterator() {
  let index = 0;
  while (true) {  // To leave it always run
    yield people[index++ % people.length];  // yield is gonna pause whenever the next method is called and return the person - [index++ % people.length] always returns an index between 1 and 4
  }
}


// To use the generator
const iterator = createPeopleIterator();
// To test the iterator
// console.log(createPeopleIterator());   // Generator {  }
// console.log(iterator.next());          // Object { value: {…}, done: false }
// console.log(iterator.next().value);    // Object { name: "John Smith", age: 35, gender: "male", location: "New York, NY", imageURL: "https://randomuser.me/api/portraits/men/1.jpg", looking: "Male looking for female" }

nextBtn.addEventListener('click', () => { // An event listener on a click event on the 'Show Next' button
  const person = iterator.next().value;   // To get the person object
  img.src = person.imageURL;              // To chnage the source of the image
  profileInfo.querySelector('h3').textContent = person.name;
  profileInfo.querySelectorAll('p')[0].textContent = `${person.age} Years Old`;
  profileInfo.querySelectorAll('p')[1].textContent = `From ${person.location}`;
  profileInfo.querySelectorAll('p')[2].textContent = person.looking;
});


// To initally run it when the website is loaded
nextBtn.click();