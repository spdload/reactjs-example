type DocumentListType = {
  name: string;
  slug:
    | 'airworthiness-review-certificate'
    | 'jet-registration-certificate'
    | 'actual-weight-balance-report'
    | 'insurance-certificate'
    | 'latest-maintenance-report'
    | 'airworthiness-certificate'
    | 'noise-certificate';
};

export const requiredDocumentsList: DocumentListType[] = [
  { name: 'Airworthiness Review Certificate', slug: 'airworthiness-review-certificate' },
  { name: 'Certificate of Registration', slug: 'jet-registration-certificate' },
  { name: 'Certificate of Airworthiness', slug: 'airworthiness-certificate' },
  { name: 'Actual Weight Balance Report', slug: 'actual-weight-balance-report' },
  { name: 'Insurance Certificate', slug: 'insurance-certificate' },
  { name: 'Latest Maintenance Report', slug: 'latest-maintenance-report' },
];

export const photosList = [
  {
    name: 'Aircraft front',
    slug: 'front',
  },
  {
    name: 'Aircraft left side',
    slug: 'left-side',
  },
  {
    name: 'Aircraft right side',
    slug: 'right-side',
  },
  {
    name: 'Cabin',
    slug: 'cabin',
  },
  {
    name: 'Cockpit',
    slug: 'cockpit',
  },
];
