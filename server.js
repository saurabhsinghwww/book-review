const express = require('express');
const bodyParser = require('body-parser');
const booksData = "[ { \"title\": \"The Linux Command Line\", \"subtitle\": \"A Complete Introduction\", \"authors\": [ \"William E. Shotts\" ], \"publisher\": \"No Starch Press\", \"publishedDate\": \"2012\", \"review\": \"\", \"industryIdentifiers\": [ { \"type\": \"ISBN_13\", \"identifier\": \"9781593273897\" }, { \"type\": \"ISBN_10\", \"identifier\": \"1593273894\" } ], \"readingModes\": { \"text\": true, \"image\": false }, \"pageCount\": 480, \"printType\": \"BOOK\", \"categories\": [ \"COMPUTERS\" ], \"averageRating\": 4, \"ratingsCount\": 2, \"maturityRating\": \"NOT_MATURE\", \"allowAnonLogging\": true, \"contentVersion\": \"1.2.2.0.preview.2\", \"panelizationSummary\": { \"containsEpubBubbles\": false, \"containsImageBubbles\": false }, \"imageLinks\": { \"smallThumbnail\": \"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api\", \"thumbnail\": \"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api\" }, \"language\": \"en\", \"previewLink\": \"http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api\", \"infoLink\": \"https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api\", \"canonicalVolumeLink\": \"https://market.android.com/details?id=book-nggnmAEACAAJ\", \"isin\": \"nggnmAEACAAJ\", \"shelf\": \"notAdded\" }, { \"title\": \"Learning Web Development with React and Bootstrap\", \"authors\": [ \"Harmeet Singh\" ], \"publishedDate\": \"2016-12-30\", \"review\": \"\", \"industryIdentifiers\": [ { \"type\": \"ISBN_10\", \"identifier\": \"1786462494\" }, { \"type\": \"ISBN_13\", \"identifier\": \"9781786462497\" } ], \"readingModes\": { \"text\": false, \"image\": false }, \"pageCount\": 278, \"printType\": \"BOOK\", \"maturityRating\": \"NOT_MATURE\", \"allowAnonLogging\": false, \"contentVersion\": \"preview-1.0.0\", \"panelizationSummary\": { \"containsEpubBubbles\": false, \"containsImageBubbles\": false }, \"imageLinks\": { \"smallThumbnail\": \"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api\", \"thumbnail\": \"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api\" }, \"language\": \"en\", \"previewLink\": \"http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&cd=6&source=gbs_api\", \"infoLink\": \"http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&source=gbs_api\", \"canonicalVolumeLink\": \"https://books.google.com/books/about/Learning_Web_Development_with_React_and.html?hl=&id=sJf1vQAACAAJ\", \"isin\": \"sJf1vQAACAAJ\", \"shelf\": \"notAdded\" }, { \"title\": \"The Cuckoo's Calling\", \"authors\": [ \"Robert Galbraith\" ], \"publisher\": \"Mulholland Books\", \"publishedDate\": \"2013-04-30\", \"review\": \"\", \"industryIdentifiers\": [ { \"type\": \"ISBN_13\", \"identifier\": \"9780316206860\" }, { \"type\": \"ISBN_10\", \"identifier\": \"0316206865\" } ], \"readingModes\": { \"text\": true, \"image\": false }, \"pageCount\": 464, \"printType\": \"BOOK\", \"categories\": [ \"Fiction\" ], \"averageRating\": 3.5, \"ratingsCount\": 3037, \"maturityRating\": \"NOT_MATURE\", \"allowAnonLogging\": true, \"contentVersion\": \"1.21.20.0.preview.2\", \"panelizationSummary\": { \"containsEpubBubbles\": false, \"containsImageBubbles\": false }, \"imageLinks\": { \"smallThumbnail\": \"http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api\", \"thumbnail\": \"http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\" }, \"language\": \"en\", \"previewLink\": \"http://books.google.com/books?id=evuwdDLfAyYC&printsec=frontcover&dq=rowling&hl=&cd=4&source=gbs_api\", \"infoLink\": \"https://play.google.com/store/books/details?id=evuwdDLfAyYC&source=gbs_api\", \"canonicalVolumeLink\": \"https://market.android.com/details?id=book-evuwdDLfAyYC\", \"isin\": \"evuwdDLfAyYC\", \"shelf\": \"notAdded\" }, { \"title\": \"Lords of Finance\", \"subtitle\": \"The Bankers Who Broke the World\", \"authors\": [ \"Liaquat Ahamed\" ], \"publisher\": \"Penguin\", \"publishedDate\": \"2009-01\", \"review\": \"\", \"industryIdentifiers\": [ { \"type\": \"ISBN_10\", \"identifier\": \"159420182X\" }, { \"type\": \"ISBN_13\", \"identifier\": \"9781594201820\" } ], \"readingModes\": { \"text\": false, \"image\": false }, \"pageCount\": 564, \"printType\": \"BOOK\", \"categories\": [ \"Business & Economics\" ], \"averageRating\": 4.5, \"ratingsCount\": 14, \"maturityRating\": \"NOT_MATURE\", \"allowAnonLogging\": false, \"contentVersion\": \"1.0.0.0.preview.0\", \"imageLinks\": { \"smallThumbnail\": \"http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api\", \"thumbnail\": \"http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\" }, \"language\": \"en\", \"previewLink\": \"http://books.google.com/books?id=74XNzF_al3MC&printsec=frontcover&dq=finance&hl=&cd=1&source=gbs_api\", \"infoLink\": \"http://books.google.com/books?id=74XNzF_al3MC&dq=finance&hl=&source=gbs_api\", \"canonicalVolumeLink\": \"https://books.google.com/books/about/Lords_of_Finance.html?hl=&id=74XNzF_al3MC\", \"isin\": \"74XNzF_al3MC\", \"shelf\": \"notAdded\" }, { \"title\": \"Needful Things\", \"authors\": [ \"Stephen King\" ], \"publisher\": \"Simon and Schuster\", \"publishedDate\": \"2016-05-03\", \"review\": \"\", \"industryIdentifiers\": [ { \"type\": \"ISBN_13\", \"identifier\": \"9781501143786\" }, { \"type\": \"ISBN_10\", \"identifier\": \"1501143786\" } ], \"readingModes\": { \"text\": false, \"image\": false }, \"pageCount\": 960, \"printType\": \"BOOK\", \"categories\": [ \"Fiction\" ], \"averageRating\": 3.5, \"ratingsCount\": 28, \"maturityRating\": \"NOT_MATURE\", \"allowAnonLogging\": false, \"contentVersion\": \"1.3.1.0.preview.0\", \"imageLinks\": { \"smallThumbnail\": \"http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api\", \"thumbnail\": \"http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\" }, \"language\": \"en\", \"previewLink\": \"http://books.google.com/books?id=jAUODAAAQBAJ&printsec=frontcover&dq=king&hl=&cd=8&source=gbs_api\", \"infoLink\": \"http://books.google.com/books?id=jAUODAAAQBAJ&dq=king&hl=&source=gbs_api\", \"canonicalVolumeLink\": \"https://books.google.com/books/about/Needful_Things.html?hl=&id=jAUODAAAQBAJ\", \"isin\": \"jAUODAAAQBAJ\", \"shelf\": \"notAdded\" }, { \"title\": \"React\", \"subtitle\": \"Die praktische Einfhrung in React, React Router und Redux\", \"authors\": [ \"Nils Hartmann\"], \"publisher\": \"dpunkt.verlag\", \"publishedDate\": \"2016-07-07\", \"review\": \"\", \"industryIdentifiers\": [ { \"type\": \"ISBN_13\", \"identifier\": \"9783864919640\" }, { \"type\": \"ISBN_10\", \"identifier\": \"3864919649\" } ], \"readingModes\": { \"text\": true, \"image\": false }, \"pageCount\": 342, \"printType\": \"BOOK\", \"categories\": [ \"Computers\" ], \"maturityRating\": \"NOT_MATURE\", \"allowAnonLogging\": true, \"contentVersion\": \"1.4.3.0.preview.2\", \"panelizationSummary\": { \"containsEpubBubbles\": false, \"containsImageBubbles\": false }, \"imageLinks\": { \"smallThumbnail\": \"http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api\", \"thumbnail\": \"http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api\" }, \"language\": \"de\", \"previewLink\": \"http://books.google.com/books?id=IOejDAAAQBAJ&dq=redux+react&hl=&cd=15&source=gbs_api\", \"infoLink\": \"http://books.google.com/books?id=IOejDAAAQBAJ&dq=redux+react&hl=&source=gbs_api\", \"canonicalVolumeLink\": \"https://books.google.com/books/about/React.html?hl=&id=IOejDAAAQBAJ\", \"isin\": \"IOejDAAAQBAJ\", \"shelf\": \"notAdded\" }, { \"title\": \"Satire TV\", \"subtitle\": \"Politics and Comedy in the Post-Network Era\", \"authors\": [ \"Jonathan Gray\"], \"publisher\": \"NYU Press\", \"publishedDate\": \"2009-04-01\", \"review\": \"\", \"industryIdentifiers\": [ { \"type\": \"ISBN_10\", \"identifier\": \"081473216X\" }, { \"type\": \"ISBN_13\", \"identifier\": \"9780814732168\" } ], \"readingModes\": { \"text\": true, \"image\": false }, \"pageCount\": 288, \"printType\": \"BOOK\", \"categories\": [ \"Performing Arts\" ], \"maturityRating\": \"NOT_MATURE\", \"allowAnonLogging\": true, \"contentVersion\": \"0.6.4.0.preview.2\", \"panelizationSummary\": { \"containsEpubBubbles\": false, \"containsImageBubbles\": false }, \"imageLinks\": { \"smallThumbnail\": \"http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api\", \"thumbnail\": \"http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\" }, \"language\": \"en\", \"previewLink\": \"http://books.google.com/books?id=1wy49i-gQjIC&printsec=frontcover&dq=satire&hl=&cd=3&source=gbs_api\", \"infoLink\": \"https://play.google.com/store/books/details?id=1wy49i-gQjIC&source=gbs_api\", \"canonicalVolumeLink\": \"https://market.android.com/details?id=book-1wy49i-gQjIC\", \"isin\": \"1wy49i-gQjIC\", \"shelf\": \"notAdded\" } ]";
const app = express();
const port = process.env.PORT || 5000;

let userBooksData = {};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/books-data', (req, res) => {

  let userName = req.query.userName;
  
  if (!userBooksData[userName]) {
     
    userBooksData[userName] = JSON.parse(booksData);

  } 
  res.send(userBooksData[userName]);
});

app.put('/api/books/update-shelf/:isin', (req, res) => {
  
    let userName = req.query.userName;
    let isin = req.param('isin');

    console.log(userBooksData);
  
    userBooksData[userName] = userBooksData[userName].map((book) => {

      if (book.isin == isin) {
        book.shelf=req.body.shelf;
      }
      return book;
    });

    res.send(userBooksData[userName]);
});

app.put('/api/books/update-review/:isin', (req, res) => {
  
    let userName = req.query.userName;
    let isin = req.param('isin');
  
    userBooksData[userName] = userBooksData[userName].map((book) => {
      if (book.isin == isin) {
        book.review=req.body.review;
      }
      return book;
    });

    res.send(userBooksData[userName]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
