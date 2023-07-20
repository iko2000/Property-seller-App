const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Array to store the data
const data = [  { "id": 1,
"name": "Bina1 zugdidshi",
"price": 5600,
"facility": "33",
"number": "+995 599282670",
"sell": true,
"loan": false,
"land": true,
"flat": false,
"pic":"/src/assets/pics/2.jpg",
"text": "სახლი, ძალიან ბევრი საინტერესო ლოკაციით, მოსავლიანი მიწით და მომგებიანი პერსპექტივით, ადგილზე გაყვანილია წყალი, ელექტროობა და სხვა ყველა საჭირო ტრესურსი.",
 "additional": ["/src/assets/pics/2.jpg", "/src/assets/pics/6.jpg", "/src/assets/pics/8.jpg", "/src/assets/pics/10.jpg"]
},
{  "id": 2,
"name": "Miwa Bazartan",
"price": 12000,
"facility": "45",
"number": "+995 599282670",
"sell": true,
"loan": false,
"land": true,
"flat": false,
"pic": "/src/assets/pics/2.jpg",
"text": "სახლი, ძალიან ბევრი საინტერესო ლოკაციით, მოსავლიანი მიწით და მომგებიანი პერსპექტივით, ადგილზე გაყვანილია წყალი, ელექტროობა და სხვა ყველა საჭირო ტრესურსი.", "additional": ["/src/assets/pics/2.jpg", "/src/assets/pics/6.jpg", "/src/assets/pics/8.jpg", "/src/assets/pics/10.jpg"]
},
{ "id": 3,
"name": "Bina-2 zugdidshi",
"price": 8200,
"facility": "4",
  "number": "+995 599282670",
"sell": true,
"loan": false,
"land": false,
"flat": true,
"pic": "/src/assets/pics/3.jpg",
"text": "სახლი, ძალიან ბევრი საინტერესო ლოკაციით, მოსავლიანი მიწით და მომგებიანი პერსპექტივით, ადგილზე გაყვანილია წყალი, ელექტროობა და სხვა ყველა საჭირო ტრესურსი.", "additional": ["/src/assets/pics/2.jpg", "/src/assets/pics/6.jpg", "/src/assets/pics/8.jpg", "/src/assets/pics/10.jpg"]
},
{ "id": 4,
"name": "Miwa-2 zugdidshi",
"price": 96500,
"facility": "55",
  "number": "+995 599282670",
"sell": true,
"loan": false,
"land": true,
"flat": true,
"pic": "/src/assets/pics/1.jpg",
"text": "სახლი, ძალიან ბევრი საინტერესო ლოკაციით, მოსავლიანი მიწით და მომგებიანი პერსპექტივით, ადგილზე გაყვანილია წყალი, ელექტროობა და სხვა ყველა საჭირო ტრესურსი.", "additional": ["/src/assets/pics/2.jpg", "/src/assets/pics/6.jpg", "/src/assets/pics/8.jpg", "/src/assets/pics/10.jpg"]
},
{ "id": 5,
"name": "Mekvle bina",
"price": 28500,
"facility": "4",
  "number": "+995 599282670",
"sell": true,
"loan": false,
"land": false,
"flat": true,
"pic": "/src/assets/pics/4.jpg",
"text": "იყიდება ბინა, ოთახებს ნახავთ ფოტოებში, ახალ-გარემონტებულია და ყველა საჭირო რესურსი შემოყვანილია, დამირეკეთ ტელეფონის ნომერზე, ფოტეობშიც ხედავთ მდგომარეობს , ლოკაციაზე დაგიკავშირდებით.", "additional": ["/src/assets/pics/2.jpg", "/src/assets/pics/6.jpg", "/src/assets/pics/8.jpg", "/src/assets/pics/10.jpg"]
},
{ "id": 6,
"name": "Bina-4 zugdidshi",
"price": 6750,
"facility": "45",
  "number": "+995 599282670",
"sell": true,
"loan": true,
"land": true,
"flat": false,
"pic": "/src/assets/pics/5.jpg",
"text": "იყიდება ბინა, ოთახებს ნახავთ ფოტოებში, ახალ-გარემონტებულია და ყველა საჭირო რესურსი შემოყვანილია, დამირეკეთ ტელეფონის ნომერზე, ფოტეობშიც ხედავთ მდგომარეობს , ლოკაციაზე დაგიკავშირდებით.", "additional": ["/src/assets/pics/2.jpg", "/src/assets/pics/6.jpg", "/src/assets/pics/8.jpg", "/src/assets/pics/10.jpg"]
},
{ "id": 7,
"name": "MiwaMiwa zugdidshi",
"price": 44200,
"facility": "100",
  "number": "+995 599282670",
"sell": true,
"loan": false,
"land": true,
"flat": false,
"pic": "/src/assets/pics/1.jpg",
"text": "იყიდება ბინა, ოთახებს ნახავთ ფოტოებში, ახალ-გარემონტებულია და ყველა საჭირო რესურსი შემოყვანილია, დამირეკეთ ტელეფონის ნომერზე, ფოტეობშიც ხედავთ მდგომარეობს , ლოკაციაზე დაგიკავშირდებით.", "additional": ["/src/assets/pics/2.jpg", "/src/assets/pics/6.jpg", "/src/assets/pics/8.jpg", "/src/assets/pics/10.jpg"]
},
{ "id": 8,
"name": "Bina-6 zugdidshi",
"price": 61300,
"facility": "5",
  "number": "+995 599282670",
"sell": true,
"loan": true,
"land": false,
"flat": true,
"pic": "/src/assets/pics/8.jpg",
"text": "იყიდება ბინა, ოთახებს ნახავთ ფოტოებში, ახალ-გარემონტებულია და ყველა საჭირო რესურსი შემოყვანილია, დამირეკეთ ტელეფონის ნომერზე, ფოტეობშიც ხედავთ მდგომარეობს , ლოკაციაზე დაგიკავშირდებით.", "additional": ["/src/assets/pics/2.jpg", "/src/assets/pics/6.jpg", "/src/assets/pics/8.jpg", "/src/assets/pics/10.jpg"]
},
{ "id": 9,
"name": "Nakveti bina",
"price": 19500,
"facility": "55",
  "number": "+995 599282670",
"sell": true,
"loan": false,
"land": true,
"flat": true,
"pic": "/src/assets/pics/9.jpg",
"text": "იყიდება ბინა, ოთახებს ნახავთ ფოტოებში, ახალ-გარემონტებულია და ყველა საჭირო რესურსი შემოყვანილია, დამირეკეთ ტელეფონის ნომერზე, ფოტეობშიც ხედავთ მდგომარეობს , ლოკაციაზე დაგიკავშირდებით.", "additional": ["/src/assets/pics/2.jpg", "/src/assets/pics/6.jpg", "/src/assets/pics/8.jpg", "/src/assets/pics/10.jpg"]
},
{ "id": 10,
"name": "Bina-7 zugdidshi",
"price": 7970,
"facility": "5",
  "number": "+995 599282670",
"sell": true,
"loan": false,
"land": false,
"flat": true,
"pic": "/src/assets/pics/10.jpg",
"text": "იყიდება ბინა, ოთახებს ნახავთ ფოტოებში, ახალ-გარემონტებულია და ყველა საჭირო რესურსი შემოყვანილია, დამირეკეთ ტელეფონის ნომერზე, ფოტეობშიც ხედავთ მდგომარეობს , ლოკაციაზე დაგიკავშირდებით.", "additional": ["/src/assets/pics/2.jpg", "/src/assets/pics/6.jpg", "/src/assets/pics/8.jpg", "/src/assets/pics/10.jpg"]
},
{ "id": 11,
"name": "Bina-8 zugdidshi",
"price": 35000,
"facility": "35",
  "number": "+995 599282670",
"sell": true,
"loan": false,
"land": true,
"flat": true,
"pic": "/src/assets/pics/11.jpg",
"text": "იყიდება ბინა, ოთახებს ნახავთ ფოტოებში, ახალ-გარემონტებულია და ყველა საჭირო რესურსი შემოყვანილია, დამირეკეთ ტელეფონის ნომერზე, ფოტეობშიც ხედავთ მდგომარეობს , ლოკაციაზე დაგიკავშირდებით.", "additional": ["/src/assets/pics/2.jpg", "/src/assets/pics/6.jpg", "/src/assets/pics/8.jpg", "/src/assets/pics/10.jpg"]
},
{ "id": 12,
"name": "Bina-9 zugdidshi",
"price": 7150,
"facility": "5",
  "number": "+995 599282670",
"sell": true,
"loan": false,
"land": true,
"flat": false,
"pic": "/src/assets/pics/12.jpg",
"text": "იყიდება ბინა, ოთახებს ნახავთ ფოტოებში, ახალ-გარემონტებულია და ყველა საჭირო რესურსი შემოყვანილია, დამირეკეთ ტელეფონის ნომერზე, ფოტეობშიც ხედავთ მდგომარეობს , ლოკაციაზე დაგიკავშირდებით.", "additional": ["/src/assets/pics/2.jpg", "/src/assets/pics/6.jpg", "/src/assets/pics/8.jpg", "/src/assets/pics/10.jpg"]
},
{ "id": 13,
"name": "Miwa-10 zugdidshi",
"price": 95400,
"facility": "80",
  "number": "+995 599282670",
"sell": true,
"loan": true,
"land": true,
"flat": true,
"pic": "/src/assets/pics/13.jpg",
"text": "იყიდება ბინა, ოთახებს ნახავთ ფოტოებში, ახალ-გარემონტებულია და ყველა საჭირო რესურსი შემოყვანილია, დამირეკეთ ტელეფონის ნომერზე, ფოტეობშიც ხედავთ მდგომარეობს , ლოკაციაზე დაგიკავშირდებით.", "additional": ["/src/assets/pics/2.jpg", "/src/assets/pics/6.jpg", "/src/assets/pics/8.jpg", "/src/assets/pics/10.jpg"]
}]
// Define a route to handle POST requests
app.post('/api', (req, res) => {
  const newData = req.body; // Data sent in the request body

  // Push the new data to the array
  data.push(newData);

  res.status(201).json(newData);
});

// Define a route to get all data
app.get('/api', (req, res) => {
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});