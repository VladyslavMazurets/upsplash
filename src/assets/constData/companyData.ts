interface ICompany {
  id: number;
  title: string;
}

type ICompanyData = ICompany[];

export const companyData: ICompanyData = [
  {
    id: 1,
    title: 'About',
  },
  {
    id: 2,
    title: 'History',
  },
  {
    id: 3,
    title: 'Join the team',
  },
  {
    id: 4,
    title: 'Press',
  },
  {
    id: 5,
    title: 'Contact us',
  },
  {
    id: 6,
    title: 'Help Center',
  },
];
