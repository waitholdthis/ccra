// Centralized site data — single source of truth
export const site = {
  name: 'Chemical Corps Regimental Association',
  shortName: 'CCRA',
  tagline: 'Elementis Regamus Proelium — Let Us Rule the Battle by Means of the Elements',
  description: 'Chemical Corps Regimental Association — Heritage, Esprit de Corps, Image of the Chemical Corps Regiment.',
  url: 'https://waitholdthis.github.io/ccra',
  phone: '(573) 329-0600',
  email: 'ccramanager@embarqmail.com',
  address: {
    line1: 'Chemical Corps Regimental Association',
    line2: 'Fort Leonard Wood, MO 65473',
  },
  social: {
    facebook: 'https://www.facebook.com/ChemicalCorpsRegimentalAssociation',
  },
  membershipUrl: 'https://www.ccrassn.org/membership/',
  formspreeId: 'xpwdqkba',
} as const;

export const navigation = [
  { label: 'Home', href: '/ccra/' },
  { label: 'About', href: '/ccra/about' },
  { label: 'History', href: '/ccra/history' },
  { label: 'Chapters', href: '/ccra/chapters' },
  { label: 'Programs', href: '/ccra/programs' },
  { label: 'News & Events', href: '/ccra/news' },
  { label: 'Gift Shop', href: '/ccra/giftshop' },
  { label: 'Membership', href: '/ccra/membership' },
  { label: 'Contact', href: '/ccra/contact' },
] as const;

export const chapters = [
  { id: 1, name: 'Aberdeen Chapter', state: 'MD', city: 'Aberdeen', overseas: false, president: 'Mr. Dick Ryon', contact: '' },
  { id: 2, name: 'Aloha Chapter', state: 'HI', city: 'Honolulu', overseas: false, president: 'CPT Brad Carver', contact: '' },
  { id: 3, name: 'Chemical Corps Retiree Chapter', state: 'MO', city: 'Fort Leonard Wood', overseas: false, president: 'TBD', contact: '' },
  { id: 4, name: 'Columbus Chapter', state: 'GA', city: 'Columbus', overseas: false, president: 'TBD', contact: '' },
  { id: 5, name: 'Desert Dragons Chapter', state: 'UT', city: 'Dugway', overseas: false, president: 'TBD', contact: '' },
  { id: 6, name: 'Dragon Chapter (Korea)', state: '', city: 'Korea', overseas: true, president: 'TBD', contact: '' },
  { id: 7, name: 'Fort Leonard Wood Chapter', state: 'MO', city: 'Fort Leonard Wood', overseas: false, president: 'TBD', contact: '' },
  { id: 8, name: 'Fort Liberty Chapter', state: 'NC', city: 'Fort Liberty', overseas: false, president: 'TBD', contact: '' },
  { id: 9, name: 'Gruenberg-Gruenberg Chapter (Europe)', state: '', city: 'Germany', overseas: true, president: 'TBD', contact: '' },
  { id: 10, name: 'Gruenberg-Watson Chapter', state: 'MD', city: 'Edgewood', overseas: false, president: 'TBD', contact: '' },
  { id: 11, name: 'Gulf Coast Chapter', state: 'AL', city: 'Anniston', overseas: false, president: 'Mr. Tom Gruber', contact: '' },
  { id: 12, name: 'Midwest Chapter', state: 'MO', city: 'Kansas City', overseas: false, president: 'TBD', contact: '' },
  { id: 13, name: 'National Capital Region Chapter', state: 'DC', city: 'Washington', overseas: false, president: 'TBD', contact: '' },
  { id: 14, name: 'Palo Alto Chapter', state: 'CA', city: 'Palo Alto', overseas: false, president: 'Mr. Mike Gruber', contact: '' },
  { id: 15, name: 'Rocky Mountain Chapter', state: 'CO', city: 'Colorado Springs', overseas: false, president: 'TBD', contact: '' },
  { id: 16, name: 'Smoke Bomb Hill Chapter', state: 'NC', city: 'Fort Liberty', overseas: false, president: 'TBD', contact: '' },
] as const;

export const boardMembers = [
  { role: 'President', name: 'To Be Announced', initials: 'P' },
  { role: 'Vice President', name: 'To Be Announced', initials: 'VP' },
  { role: 'Secretary', name: 'To Be Announced', initials: 'S' },
  { role: 'Treasurer', name: 'To Be Announced', initials: 'T' },
  { role: 'Executive Director', name: 'To Be Announced', initials: 'ED' },
  { role: 'Historian', name: 'To Be Announced', initials: 'H' },
] as const;
