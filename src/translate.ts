import { createIntl, createIntlCache } from 'react-intl';

export const messages: any = {
  fi: {
    welcome_linktext: 'Tervetuloa ja jotakin',
    lottainfo_linktext: 'Lisää infoa Lotta-säätiöstä',
    homepage_linktext: 'Alkuun',
    kindergarten_linktext: 'Päiväkoti-ikäisille',
    lower_elementary_linktext: 'Ala-asteikäisille',
    junior_highschool_linktext: 'Yläasteikäisille',
    suitcase: 'Matkalaukku',
    introduction: 'Johdanto',
    code: '🄺🄾🄾🄳🄸',
    return_linktext: 'Palaa',
  },
  sv: {
    welcome_linktext: 'Och samma på svenska',
    lottainfo_linktext: 'Hejssan {name}',
    homepage_linktext: 'Börje',
    kindergarten_linktext: 'Jag har {num, plural, one {# bil} other {# bilar}}',
    lower_elementary_linktext: 'Och samma på svenska',
    junior_highschool_linktext: 'Och samma på svenska',
    suitcase: 'Bagage',
    introduction: 'Introduktion',
    code: '🄺🄾🄳',
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
