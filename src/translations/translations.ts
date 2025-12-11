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
    },
    // SEO
    seo: {
      home: {
        title: 'Saara Lehtonen - näyttelijä, laulaja ja ääninäyttelijä',
        description: 'Saara Lehtonen on suomalainen näyttelijä, laulaja ja ääninäyttelijä. Kokenut ammattilainen teatterista, televisiosta ja äänityöstä.'
      },
      gallery: {
        title: 'Galleria - Saara Lehtonen',
        description: 'Katso Saara Lehtosen ammattimaiset kuvat teatterista, televisiosta ja muista tuotannoista.'
      },
      about: {
        title: 'Saara - Saara Lehtonen',
        description: 'Tutustu Saara Lehtoseen - kokenut suomalainen näyttelijä, laulaja ja ääninäyttelijä.'
      },
      media: {
        title: 'Media - Saara Lehtonen',
        description: 'Katso Saara Lehtosen showreel-videot ja kuuntele ääninäytteet.'
      },
      cv: {
        title: 'CV - Saara Lehtonen',
        description: 'Saara Lehtosen ansioluettelo ja työkokemus teatterista, televisiosta ja äänityöstä.'
      },
      contact: {
        title: 'Yhteystiedot - Saara Lehtonen',
        description: 'Ota yhteyttä Saara Lehtoseen työtarjouksista ja yhteistyöstä.'
      }
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
    },
    // SEO
    seo: {
      home: {
        title: 'Saara Lehtonen - actress, singer and voice actress',
        description: 'Saara Lehtonen is a Finnish actress, singer and voice actress. Experienced professional in theatre, television and voice work.'
      },
      gallery: {
        title: 'Gallery - Saara Lehtonen',
        description: 'View professional photos of Saara Lehtonen from theatre, television and other productions.'
      },
      about: {
        title: 'About - Saara Lehtonen',
        description: 'Get to know Saara Lehtonen - experienced Finnish actress, singer and voice actress.'
      },
      media: {
        title: 'Media - Saara Lehtonen',
        description: 'Watch Saara Lehtonen\'s showreel videos and listen to voice samples.'
      },
      cv: {
        title: 'CV - Saara Lehtonen',
        description: 'Saara Lehtonen\'s resume and work experience in theatre, television and voice work.'
      },
      contact: {
        title: 'Contact - Saara Lehtonen',
        description: 'Contact Saara Lehtonen for work opportunities and collaboration.'
      }
    }
  }
};

export type Language = 'fi' | 'en';
export type Translations = typeof translations.fi;
