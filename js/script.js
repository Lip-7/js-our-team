/* must create a function that will run at start and make all the stuffs work */
function cardGen() { /* WANTED ASK SORRY TO MY FRIENDS AND SAMUEL, TY FOR YOUR IMAGES */
    /* i have to create an array of objects, every object must have nname, role and photo */
    const team = [
        {
            name: 'Filippo',
            surname: 'Giampapa',
            role: 'Founder & CEO',
            image: 'fil-giam.jfif'
        },
        {
            name: 'Cristian',
            surname: 'Totaro',
            role: 'Chief Editor',
            image: 'cristian.png'
        },
        {
            name: 'Daniele',
            surname: 'Ceravolo',
            role: 'Ducks Manager',
            image: 'daniele-cer.png'
        },
        {
            name: 'Andrea',
            surname: 'Collura',
            role: 'Graphic Designer',
            image: 'andre-col.png'
        },
        {
            name: 'Vito',
            surname: 'De Palma',
            role: 'Head of Marketing',
            image: 'vito-depal.png'
        },
        {
            name: 'Nicolò',
            surname: 'Zibra',
            role: 'Official Dj',
            image: 'nicol-zib.png'
        },
        {
            name: 'Raffaele',
            surname: 'Capaldo',
            role: 'DebuggerMan',
            image: 'raff-cap.png'
        },
        {
            name: 'Samuel',
            surname: 'Panicucci',
            role: 'Dancer',
            image: 'samu.png'
        },
        {
            name: 'Giuseppe',
            surname: 'Indomenico',
            role: "Charge of Float",
            image: 'giuse-indom.png'
        },
        {
            name: 'Giorgio',
            surname: 'Lumia',
            role: 'Official Speaker',
            image: 'giorg-lum.png'
        },
        {
            name: 'Gaetano',
            surname: 'Spampinato',
            role: 'Blasphemer',
            image: 'gaetano-scamp.png'
        },
        {
            name: 'Nello',
            surname: 'Rossi',
            role: 'The man in the code',
            image: 'nell-ross.png'
        },
        {
            name: 'Chiara',
            surname: 'Sucato',
            role: 'Main Chef',
            image: 'chiara.png'
        },
        {
            name: 'Alessandro',
            surname: 'Pagliuca',
            role: 'The man who volunteers',
            image: 'aless-pagl.png'
        },
        {
            name: 'Clelia',
            surname: 'Fradella',
            role: 'Official Navigator',
            image: 'clelia.png'
        },
        {
            name: 'Filippo',
            surname: 'Verrone',
            role: 'Clochard',
            image: 'fil-ver.jpg'
        }
    ];
    /* create a variable that will contains all our cards */
    let cards = ''
    /* print on console every information of any object */
    for (person of team) {
        console.log(person.name, person.surname, person.role)
        /* make one card for every object in array with his infos */
        cards += `
        <div class="card">
            <img src="./img/${person.image}" class="card-img-top" alt="${person.name+ ' ' + person.surname}">
            <div class="card-body">
              <h5 class="memberName" class="card-title fw-semibold">${person.name+ ' ' + person.surname}</h5>
              <p class="card-text">${person.role}</p>
            </div>
        </div>
        `
    }
    /* print the cards in the html */
    document.getElementById('cards').innerHTML = cards
}
/* call the main function */
cardGen()

