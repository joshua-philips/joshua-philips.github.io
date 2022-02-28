import readLogThumbnail from '../resources/readlog/readlog_thumbnail.png';
import yaresaThumbnail from '../resources/yaresa/yaresa_mockup.png';
// import chiniThumbnail from '../resources/chini/chini_illustration.png';
import cediThumbnail from '../resources/cedi/launch_screen.png';
import yaresaMck from '../resources/yaresa/yarisa-mck.png';
import readlogMck from '../resources/readlog/readlog-mck.png';
const projects = [
  {
    id: 'yarisa',
    title: 'Yarisa Healthcare UI/UX',
    thumbnail: yaresaThumbnail,
    preview:
      'Design for a mobile healthcare application to connect doctors and patients',
    links: {
      github: '',
      behance: 'https://www.behance.net/gallery/125514203/Healthcare-App',
      live: '',
    },
    image: yaresaMck,
    paragraphs: [
      {
        title: 'Overview',
        text: 'I was approached to create design a user interface for the Yaresa Healthcare app, an app to connect doctors, clinics and patients.',
      },
      {
        title: 'Design',
        text: 'A logo was already provided. I was responsible for designing the screens of the app. The goal for the design was to keep in line with current iOS and Android trends while considering the target audience. Ultimately another design was used for the app, but I learnt a lot of new things during my research for the app.',
      },
    ],
  },
  {
    id: 'readLog',
    title: 'Read Log Mobile App',
    thumbnail: readLogThumbnail,
    preview:
      "An Android app developed using Flutter to track a user's books and reading list.",
    links: {
      github: 'https://github.com/joshua-philips/read_log_updated',
      behance: 'https://www.behance.net/gallery/125791007/Read-Log-App',
      live: 'https://appdistribution.firebase.google.com/pub/i/6ee28fc21494a263',
    },
    image: readlogMck,
    paragraphs: [
      {
        title: 'Overview',
        text: 'Read Log is a mobile app that allows a user to keep track of their books.',
      },
      {
        title: 'Design',
        text: 'The design of the app is meant to be simple, allowing a larger focus on its functionality more than anything. Users can sign in, track their reading lists, books read and manage their profile.',
      },
      {
        title: 'Development',
        text: 'The app was developed using Flutter with a Firebase Firestore database. Book data is retreived from the OpenLibrary api.',
      },
    ],
  },

  {
    id: 'cediBudget',
    title: 'Cedi Budget Mobile App',
    thumbnail: cediThumbnail,
    preview: 'Flutter mobile app for planning a budget based on set dates',
    links: {
      github: 'https://github.com/joshua-philips/cedi_budget_update',
      behance: '',
      live: '',
    },
    image: '',
    paragraphs: [
      {
        title: 'Overview',
        text: 'Cedi Budget is a mobile app for planning a budget within a timeframe.',
      },
      {
        title: 'Design',
        text: 'A simple user interface with charts for keeping track of budget and expenditure.',
      },
      {
        title: 'Development',
        text: 'Developed with Flutter with a Firebase backend (Cloud Firestore, Firebase Messaging).',
      },
    ],
  },
  /* {
    id: 'chini',
    title: 'Cover Image Illustration',
    thumbnail: chiniThumbnail,
    preview: "Illustration for musician's cover image.",
    links: { github: '', behance: '', live: '' },
    image: chiniThumbnail,
    paragraphs: [
      {
        title: 'Overview',
        text: 'Simple illustration using Adobe Photoshop',
      },
    ],
  },*/
];

export default projects;
