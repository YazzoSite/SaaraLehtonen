export const translations = {
  fi: {
    // Navigation
    nav: {
      home: 'Etusivu',
      gallery: 'Galleria',
      about: 'Saara',
      media: 'Media',
      cv: 'CV',
      contact: 'Yhteystiedot'
    },
    // Common
    common: {
      loading: 'Ladataan...'
    },
    // Gallery
    gallery: {
      title: 'Galleria',
      downloadButton: 'Lataa korkearesoluutioinen kuva',
      close: 'Sulje'
    },
    // About
    about: {
      title: 'Tietoa'
    },
    // Media
    media: {
      title: 'Media'
    },
    // CV
    cv: {
      title: 'CV'
    },
    // Contact
    contact: {
      title: 'Yhteystiedot',
      contactLabel: 'Yhteydenotot:'
    }
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      gallery: 'Gallery',
      about: 'About',
      media: 'Media',
      cv: 'CV',
      contact: 'Contact'
    },
    // Common
    common: {
      loading: 'Loading...'
    },
    // Gallery
    gallery: {
      title: 'Gallery',
      downloadButton: 'Download high-resolution image',
      close: 'Close'
    },
    // About
    about: {
      title: 'About'
    },
    // Media
    media: {
      title: 'Media'
    },
    // CV
    cv: {
      title: 'CV'
    },
    // Contact
    contact: {
      title: 'Contact',
      contactLabel: 'Contact:'
    }
  }
};

export type Language = 'fi' | 'en';
export type Translations = typeof translations.fi;
