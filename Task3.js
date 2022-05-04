// 1. For the given JSON iterate over all for loops (for, for in, for of, forEach)

//1. Using an array for loop

var numbers = [ 10, 20, 30, 40, 50];
for (var i=0; i < numbers.length; i++) {
   console.log(numbers[i])
}

//2. Looping through an Object Property using for in.

var person = [ 10, 20, 30, 40, 50]; 
 for (let x in person) {
    console.log(x + ": "+ person[x])
 }

//3. The ForEach() Loop

var names = [ 10, 20, 30, 40, 50];;
names.forEach(function1);
function function1(currentValue, index) {
   console.log("Index in array is: "+index + " ::  Value is: "+currentValue);
}

//4. The for of loop.

const iterable = [ 10, 20, 30, 40, 50];

for (const value of iterable) {
  console.log(value);
}

//2. Create your own resume data in JSON format

let resume = {
    "basics": {
      "name": "Arman mogal",
      "label": "FSD",
      "image": "",
      "email": "armanmogal1996.com",
      "phone": "(91) 80875794 ",
      "url": "https://armanmogal.com",
      "summary": "A summary of John Doe…",
      "location": {
        "address": "new shahupuri",
        "postalCode": "416003",
        "city": "KOlHAPUR",
        "countryCode": "INDIA",
        "region": "Maharashtra"
      },
      "profiles": [{
        "network": "Twitter",
        "username": "Arman",
        "url": "https://twitter.com/Arman"
      }]
    },
    "work": [{
      "name": "Company",
      "position": "Programmer",
      "url": "https://Programmer.com",
      "startDate": "2022-01-01",
      "endDate": "2022-01-01",
      "summary": "Description…",
      "highlights": [
        "Started the company"
      ]
    }],
    "volunteer": [{
      "organization": "Organization",
      "position": "Volunteer",
      "url": "https://organization.com/",
      "startDate": "2022-01-01",
      "endDate": "2022-01-01",
      "summary": "Description…",
      "highlights": [
        "Awarded 'Volunteer of the Month'"
      ]
    }],
    "education": [{
      "institution": "University",
      "url": "https://institution.com/",
      "area": "Software Development",
      "studyType": "Bachelor",
      "startDate": "2014-01-01",
      "endDate": "2017-01-01",
      "score": "4.0",
      "courses": [
        "guvi-geek - FSD"
      ]
    }],
    "awards": [{
      "title": "Award",
      "date": "2022-11-01",
      "awarder": "Company",
      "summary": "There is no spoon."
    }],
    "certificates": [{
      "name": "Certificate",
      "date": "2021-11-07",
      "issuer": "Company",
      "url": "https://certificate.com",
    }],
    "publications": [{
      "name": "Publication",
      "publisher": "Company",
      "releaseDate": "2014-10-01",
      "url": "https://publication.com",
      "summary": "Description…"
    }],
    "skills": [{
      "name": "Web Development",
      "level": "Master",
      "keywords": [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    }],
    "languages": [{
      "language": "English",
      "fluency": "Native speaker"
    }],
    "interests": [{
      "name": "Wildlife",
      "keywords": [
        "Ferrets",
        "Unicorns"
      ]
    }],
    "references": [{
      "name": "Arman Mogal",
      "reference": "Reference…"
    }],
    "projects": [{
      "name": "Project",
      "description": "Description…",
      "highlights": [
        "Won award at AIHacks 2016"
      ],
      "keywords": [
        "HTML"
      ],
      "startDate": "2019-01-01",
      "endDate": "2021-01-01",
      "url": "https://project.com/",
      "roles": [
        "Team Lead"
      ],
      "entity": "Entity",
      "type": "application"
    }]
  }

  console.log(resume)