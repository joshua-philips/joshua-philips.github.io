import readLogThumbnail from '../resources/readlog/readlog_thumbnail.png';
import yaresaThumbnail from '../resources/yaresa/yaresa_mockup.png';
import chiniThumbnail from '../resources/chini/chini_illustration.png';
import cediThumbnail from '../resources/cedi/launch_screen.jpg';
const projects = {
  readLog: {
    id: 'readLog',
    title: 'Book Tracking Mobile App',
    thumbnail: readLogThumbnail,
    preview:
      "An IOS and Android app developed using Flutter to track a user's books and reading list.",
    links: {
      github: 'https://github.com/joshua-philips/read_log',
      behance: 'https://www.behance.net/gallery/125791007/Book-Logging-App',
      live: '',
    },
    images: {},
    paragraphs: [
      {
        title: '',
        text: '',
      },
    ],
  },
  yaresa: {
    id: 'yaresa',
    title: 'Yaresa Healthcare UI/UX',
    thumbnail: yaresaThumbnail,
    preview:
      'Design for a mobile healthcare application to connect doctors and patients',
    links: {
      github: '',
      behance: 'https://www.behance.net/gallery/125514203/Healthcare-App',
      live: '',
    },
    images: {},
    paragraphs: [
      {
        title: '',
        text: '',
      },
    ],
  },
  chini: {
    id: 'chini',
    title: 'Cover Image Illustration',
    thumbnail: chiniThumbnail,
    preview: "Illustration for musician's cover image.",
    links: { github: '', behance: '', live: '' },
    images: {},
    paragraphs: [
      {
        title: '',
        text: '',
      },
    ],
  },
  cediBudget: {
    id: 'cediBudget',
    title: 'Cedi Budget Mobile App',
    thumbnail: cediThumbnail,
    preview: '',
    links: { github: '', behance: '', live: '' },
    images: {},
    paragraphs: [
      {
        title: '',
        text: '',
      },
    ],
  },
};

export default projects;
