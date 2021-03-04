import {createIntl, createIntlCache} from 'react-intl';

export const messages: any = {
  fi: {
    welcome_linktext: 'Tervetuloa',
    lottainfo_linktext: 'Lotta Svärd Säätiö',
    homepage_linktext: 'Alkuun',
    kindergarten_linktext: 'Päiväkoti-ikäisille',
    lower_elementary_linktext: 'Ala-asteikäisille',
    junior_highschool_linktext: 'Yläasteikäisille',
    suitcase: 'Matkalaukku',
    lotta: 'Lotta',
    harmonia: 'Harmonia-Hiiri',
    oodi: 'Oodi-Orava',
    introduction: 'Tarinan alku',
    ski_badge: 'Hiihtomerkki',
    bee_badge: 'Talkoomerkki',
    bread_recipe: 'Näkkileipäresepti',
    military_mail: 'Kenttäposti',
    letter: 'Kirje',
    theatre_permit: 'Lupa teatteriharjoituksiin',
    lotta_pin: 'Lotta-merkki',
    code: '🄺 🄾 🄾 🄳 🄸',
    code_assignment: 'Kooditehtävä',
    lotta_foundation: 'Lotta Svärd Säätiö',
    return_linktext: 'Takaisin',
  },
  sv: {
    welcome_linktext: 'Välkommen',
    lottainfo_linktext: 'Stiftelsen Lotta Svärd',
    homepage_linktext: 'Till toppen',
    kindergarten_linktext: 'För dagis',
    lower_elementary_linktext: 'För barn i grundskolan',
    junior_highschool_linktext: 'För gymnasieelever',
    suitcase: 'Resväska',
    lotta: 'Lotta',
    harmonia: 'Harmony-mus',
    oodi: 'Oodi-Orava',
    introduction: 'Början på berättelsen',
    ski_badge: 'Ski tecken',
    bee_badge: 'Talk tecken',
    bread_recipe: 'Knäckebrödrecept',
    military_mail: 'Fältpost',
    letter: 'Brev',
    theatre_permit: 'Tillstånd för teaterövningar',
    lotta_pin: 'Lotta karaktär',
    code: '🄺 🄾 🄳',
    code_assignment: 'Koduppgift',
    lotta_foundation: 'Stiftelsen Lotta Svärd',
    return_linktext: 'Tillbaka',
  },
};

const cache = createIntlCache();

let intl = createIntl(
  {
    locale: 'fi',
    messages: messages['fi'],
  },
  cache,
);

export const changeLanguage = (lang: string): void => {
  intl = createIntl(
    {
      locale: lang,
      messages: messages[lang],
    },
    cache,
  );
};

const translate = (id: string, values?: Record<string, string>): string => {
  return intl.formatMessage({ id }, values);
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const translateComponent = (id: string): any => require('./' + id + '_' + intl.locale).default;

export default translate;
