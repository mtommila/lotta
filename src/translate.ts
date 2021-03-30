import {createIntl, createIntlCache} from 'react-intl';

export const messages: any = {
  fi: {
    welcome_linktext: 'Tervetuloa',
    operatellus_linktext: 'Opera Tellus',
    lottainfo_linktext: 'Lottamuseo',
    homepage_linktext: 'Alkuun',
    kindergarten_linktext: 'Päiväkoti-ikäisille',
    lower_elementary_linktext: 'Vuosiluokat 1-6',
    junior_highschool_linktext: 'Vuosiluokat 7-9',
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
    operatellus_linktext: 'Opera Tellus',
    lottainfo_linktext: 'Lottamuseet',
    homepage_linktext: 'Till början',
    kindergarten_linktext: 'För barn i dagisåldern',
    lower_elementary_linktext: 'För årskurs 1-6',
    junior_highschool_linktext: 'För årskurs 7-9',
    suitcase: 'Kappsäck',
    lotta: 'Lotta',
    harmonia: 'Harmonia Mus',
    oodi: 'Oodi Ekorre',
    introduction: 'Berättelsens början',
    ski_badge: 'Skidmärke',
    bee_badge: 'Talkomärke',
    bread_recipe: 'Knäckebrödsrecept',
    military_mail: 'Fältpost',
    letter: 'Brev',
    theatre_permit: 'Tillstånd för teaterövningar',
    lotta_pin: 'Lottamärket',
    code: '🄺 🄾 🄳',
    code_assignment: 'Koduppgift',
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
