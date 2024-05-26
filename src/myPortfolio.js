import pictureReadJourney1 from "../src/img/portfolioImg/readJourney/Снимок экрана 2024-05-03 в 15.22.44.png";
import pictureReadJourney2 from "../src/img/portfolioImg/readJourney/Снимок экрана 2024-05-03 в 15.25.42.png";
import pictureReadJourney3 from "../src/img/portfolioImg/readJourney/Снимок экрана 2024-05-03 в 15.25.50.png";
import pictureReadJourney4 from "../src/img/portfolioImg/readJourney/Снимок экрана 2024-05-03 в 15.25.59.png";
import pictureReadJourney5 from "../src/img/portfolioImg/readJourney/Снимок экрана 2024-05-03 в 15.26.06.png";

import pictureVocabBuilder1 from "../src/img/portfolioImg/vocabBuilder/Снимок экрана 2024-05-07 в 20.20.19.png";
import pictureVocabBuilder2 from "../src/img/portfolioImg/vocabBuilder/Снимок экрана 2024-05-07 в 20.20.40.png";
import pictureVocabBuilder3 from "../src/img/portfolioImg/vocabBuilder/Снимок экрана 2024-05-07 в 20.20.48.png";
import pictureVocabBuilder4 from "../src/img/portfolioImg/vocabBuilder/Снимок экрана 2024-05-07 в 20.20.53.png";
import pictureVocabBuilder5 from "../src/img/portfolioImg/vocabBuilder/Снимок экрана 2024-05-07 в 20.20.59.png";

import pictureLearnLingo from "../src/img/portfolioImg/learnLingo/Снимок экрана 2024-05-07 в 21.05.26.png";

import pictureTastyTreats1 from "../src/img/portfolioImg/tastyTreats/Снимок экрана 2024-05-07 в 21.47.01.png";
import pictureTastyTreats2 from "../src/img/portfolioImg/tastyTreats/Снимок экрана 2024-05-07 в 21.47.04.png";
import pictureTastyTreats3 from "../src/img/portfolioImg/tastyTreats/Снимок экрана 2024-05-07 в 21.47.12.png";
import pictureTastyTreats4 from "../src/img/portfolioImg/tastyTreats/Снимок экрана 2024-05-07 в 21.47.25.png";
import pictureTastyTreats5 from "../src/img/portfolioImg/tastyTreats/Снимок экрана 2024-05-07 в 21.47.50.png";

import pictureHealthyHub1 from "../src/img/portfolioImg/healthyHub/Снимок экрана 2024-05-07 в 22.17.34.png";
import pictureHealthyHub2 from "../src/img/portfolioImg/healthyHub/Снимок экрана 2024-05-07 в 22.20.05.png";
import pictureHealthyHub3 from "../src/img/portfolioImg/healthyHub/Снимок экрана 2024-05-07 в 22.20.18.png";
import pictureHealthyHub4 from "../src/img/portfolioImg/healthyHub/Снимок экрана 2024-05-07 в 22.20.26.png";
import pictureHealthyHub5 from "../src/img/portfolioImg/healthyHub/Снимок экрана 2024-05-07 в 22.20.32.png";

const picturesReadJourney = [
  pictureReadJourney1,
  pictureReadJourney2,
  pictureReadJourney3,
  pictureReadJourney4,
  pictureReadJourney5,
];

const picturesVocabBuilder = [
  pictureVocabBuilder1,
  pictureVocabBuilder2,
  pictureVocabBuilder3,
  pictureVocabBuilder4,
  pictureVocabBuilder5,
];

const picturesTastyTreats = [
  pictureTastyTreats1,
  pictureTastyTreats2,
  pictureTastyTreats3,
  pictureTastyTreats4,
  pictureTastyTreats5,
];

const picturesHealthyHub = [
  pictureHealthyHub1,
  pictureHealthyHub2,
  pictureHealthyHub3,
  pictureHealthyHub4,
  pictureHealthyHub5,
];

const Data = [
  {
    project: "Read Journey",
    pictures: picturesReadJourney,
    linkToLivePage: "https://gritchin-artur.github.io/ReadJourney/",
    linktoProjectGit: "https://github.com/gritchin-artur/ReadJourney",
    description:
      "If the user is registered, he is taken to the “Home” page, which contains a list of recommended books as well as a form for sorting by book title and author. The user has the opportunity to add a book from the favorites list to their collection. There is also a “My library” page on which there is also a list of recommended books, a form with which you have the opportunity to add your own book, as well as a list of your books. By clicking on one of your own books, you can go to the page for reading this book, this page has an input for entering the page number, and statistics on reading this book are shown!",
    role: "Own Project",
    technologies: [
      "FORMIC",
      "AXIOS",
      "JAVA SCRIPT",
      "REACT",
      "REDUX",
      "REACT-ROUTER",
    ],
  },
  {
    project: "Vocab Builder",
    pictures: picturesVocabBuilder,
    linkToLivePage: "https://gritchin-artur.github.io/VocabBuilder/",
    linktoProjectGit: "https://github.com/gritchin-artur/VocabBuilder",
    description:
      "This is a three-page site with login and registration options. If the user is registered, he has the ability to add and remove favorites! In the “Dictionary” section there is a list of your words with the ability to filter them, and you can also correct and delete words from your list. In the “Recomend” section there is a list of words that you can add to your list for study; there is also the ability to filter words, which will allow you to find words that are suitable for you. In the “Training” section, you can test yourself on your knowledge of words from your list; you will be shown the percentage of words you have learned.",
    role: "Own Project",
    technologies: [
      "FORMIC",
      "AXIOS",
      "JAVA SCRIPT",
      "REACT",
      "REDUX",
      "REACT-ROUTER",
    ],
  },
  {
    project: "Learn Lingo",
    pictures: [pictureLearnLingo],
    linkToLivePage: "https://gritchin-artur.github.io/LearnLingo/",
    linktoProjectGit: "https://github.com/gritchin-artur/LearnLingo",
    description:
      "This is a three-page site with Login and Registration capabilities. If the user is registered, the user has the ability to add and remove favorites! The Teachers section has the ability to filter teachers, allowing you to find the right teacher for you! Once you select a teacher you like, you can book a lesson.",
    role: "Own Project",
    technologies: [
      "FORMIC",
      "AXIOS",
      "REACT",
      "REDUX",
      "REACT-ROUTER",
      "FireBaseDb",
    ],
  },
  {
    project: "Healthy Hub",
    pictures: picturesHealthyHub,
    linkToLivePage: "https://songlad.github.io/HEALTH_EN/",
    linktoProjectGit: "https://github.com/SonGlad/HEALTH_EN",
    description:
      "The home page shows 5 small blocks where the user can monitor their daily water and calorie targets. There is also a view of a diary with meals and the ability to remove them. Additionally, the app has a function to create customized food suggestions tailored to the user's nutritional requirements. On the Dashboard page, the user can view their results and accomplishments month-by-month in the form of clear and user-friendly charts. The Settings page allows the user to set their main information likes name, age, weight, goals and many others. The user can also change their password. The page also has a function to update the avatar.",
    role: "Developer",
    technologies: [
      "FORMIC",
      "AXIOS",
      "JAVA SCRIPT",
      "REACT",
      "REDUX",
      "REACT-ROUTER",
    ],
  },
  {
    project: "Tasty Treats",
    pictures: picturesTastyTreats,
    linkToLivePage: "https://sheremeta-ivan.github.io/Project-JS-TastyTreats/",
    linktoProjectGit:
      "https://github.com/Sheremeta-Ivan/Project-JS-TastyTreats?tab=readme-ov-file",
    description:
      "This is a one-page application for those who love to cook delicious food. The application will help you find food according to your taste and preference, show you cooking recipes via video and in writing, and you also have the opportunity to sign up for cooking training! The application has light and dark themes.",
    role: "Developer",
    technologies: ["LODASH", "AXIOS", "JAVA SCRIPT", "NOTIFLIX", "CSS", "HTML"],
  },
];

export default Data;
