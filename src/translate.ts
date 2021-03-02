import { createIntl, createIntlCache } from 'react-intl';

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
    letter: 'kirje',
    theatre_permit: 'Lupa teatteriharjoituksiin',
    lotta_pin: 'Lotta-merkki',
    code: '🄺 🄾 🄾 🄳 🄸',
    code_assignment: 'Kooditehtävä',
    lotta_foundation: 'Lotta Svärd Säätiö',
    return_linktext: 'Takaisin',
  },
  sv: {
    welcome_linktext: 'Och samma på svenska',
    lottainfo_linktext: 'Hejssan {name}',
    homepage_linktext: 'Börje',
    kindergarten_linktext: 'Jag har {num, plural, one {# bil} other {# bilar}}',
    lower_elementary_linktext: 'Och samma på svenska',
    junior_highschool_linktext: 'Och samma på svenska',
    suitcase: 'Bagage',
    lotta: 'Lotta',
    harmonia: 'Harmonia',
    oodi: 'Oodi',
    introduction: 'Introduktion',
    ski_badge: 'Och samma på svenska',
    bee_badge: 'Och samma på svenska',
    bread_recipe: 'Och samma på svenska',
    military_mail: 'Och samma på svenska',
    letter: 'Och samma på svenska',
    theatre_permit: 'Och samma på svenska',
    lotta_pin: 'Och samma på svenska',
    code: '🄺 🄾 🄳',
    code_assignment: 'Och samma på svenska',
    lotta_foundation: 'Lotta Svärd Stiftelsen',
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

export const changeLanguage = (lang: string) => {
  const newIntl = createIntl(
    {
      locale: lang,
      messages: messages[lang],
    },
    cache,
  );
  intl = newIntl;
};

const translate = (id: string, values?: Record<string, string>) => {
  return intl.formatMessage({ id }, values);
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const translateComponent = (id: string) => require('./' + id + '_' + intl.locale).default;

export default translate;
