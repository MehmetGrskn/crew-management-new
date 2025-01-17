import { identity } from "rxjs";

export const CREW_DATA = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      nationality: 'American',
      title: 'Captain',
      daysOnBoard: 120,
      dailyRate: 200,
      currency: 'USD',
      certificates: [
        { type: 'Safety Training', issueDate: '2023-01-01', expiryDate: '2025-01-01' },
      ],
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      nationality: 'British',
      title: 'Engineer',
      daysOnBoard: 90,
      dailyRate: 180,
      currency: 'EUR',
      certificates: [
        { type: 'First Aid', issueDate: '2022-05-01', expiryDate: '2024-05-01' },
      ],
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Johnson',
      nationality: 'Canadian',
      title: 'Cooker',
      daysOnBoard: 80,
      dailyRate: 150,
      currency: 'USD',
      certificates: [
        { type: 'Food Safety', issueDate: '2022-10-01', expiryDate: '2024-10-01' },
      ],
    },
    {
      id: 4,
      firstName: 'Alice',
      lastName: 'Williams',
      nationality: 'Australian',
      title: 'Mechanic',
      daysOnBoard: 110,
      dailyRate: 190,
      currency: 'EUR',
      certificates: [
        { type: 'Engine Repair', issueDate: '2021-06-15', expiryDate: '2023-06-15' },
      ],
    },
    {
      id: 5,
      firstName: 'Robert',
      lastName: 'Brown',
      nationality: 'American',
      title: 'Engineer',
      daysOnBoard: 150,
      dailyRate: 220,
      currency: 'USD',
      certificates: [
        { type: 'Electrical Safety', issueDate: '2022-07-20', expiryDate: '2024-07-20' },
      ],
    },
    {
      id: 6,
      firstName: 'Olivia',
      lastName: 'Taylor',
      nationality: 'Canadian',
      title: 'Cooker',
      daysOnBoard: 70,
      dailyRate: 160,
      currency: 'CAD',
      certificates: [
        { type: 'Food Safety', issueDate: '2021-03-12', expiryDate: '2023-03-12' },
      ],
    },
    {
      id: 7,
      firstName: 'Liam',
      lastName: 'Miller',
      nationality: 'Irish',
      title: 'Captain',
      daysOnBoard: 180,
      dailyRate: 250,
      currency: 'EUR',
      certificates: [
        { type: 'Navigation', issueDate: '2021-01-10', expiryDate: '2023-01-10' },
      ],
    },
    {
      id: 8,
      firstName: 'Sophia',
      lastName: 'Davis',
      nationality: 'British',
      title: 'Engineer',
      daysOnBoard: 95,
      dailyRate: 210,
      currency: 'GBP',
      certificates: [
        { type: 'Marine Engineering', issueDate: '2022-11-18', expiryDate: '2024-11-18' },
      ],
    },
    {
      id: 9,
      firstName: 'James',
      lastName: 'Miller',
      nationality: 'Australian',
      title: 'Cooker',
      daysOnBoard: 60,
      dailyRate: 140,
      currency: 'AUD',
      certificates: [
        { type: 'Food Hygiene', issueDate: '2022-08-05', expiryDate: '2024-08-05' },
      ],
    },
    {
      id: 10,
      firstName: 'Ethan',
      lastName: 'Wilson',
      nationality: 'Canadian',
      title: 'Mechanic',
      daysOnBoard: 130,
      dailyRate: 210,
      currency: 'USD',
      certificates: [
        { type: 'Mechanical Safety', issueDate: '2021-12-01', expiryDate: '2023-12-01' },
      ],
    },
    {
      id: 11,
      firstName: 'Mia',
      lastName: 'Moore',
      nationality: 'American',
      title: 'Cooker',
      daysOnBoard: 85,
      dailyRate: 155,
      currency: 'EUR',
      certificates: [
        { type: 'Nutrition', issueDate: '2023-02-20', expiryDate: '2025-02-20' },
      ],
    },
    {
      id: 12,
      firstName: 'Jacob',
      lastName: 'Anderson',
      nationality: 'British',
      title: 'Engineer',
      daysOnBoard: 100,
      dailyRate: 200,
      currency: 'GBP',
      certificates: [
        { type: 'Welding', issueDate: '2022-04-15', expiryDate: '2024-04-15' },
      ],
    },
    {
      id: 13,
      firstName: 'Amelia',
      lastName: 'Thomas',
      nationality: 'Canadian',
      title: 'Captain',
      daysOnBoard: 140,
      dailyRate: 230,
      currency: 'USD',
      certificates: [
        { type: 'Captain License', issueDate: '2020-09-05', expiryDate: '2024-09-05' },
      ],
    },
    {
      id: 14,
      firstName: 'David',
      lastName: 'Jackson',
      nationality: 'Irish',
      title: 'Engineer',
      daysOnBoard: 120,
      dailyRate: 175,
      currency: 'EUR',
      certificates: [
        { type: 'Shipbuilding', issueDate: '2022-02-18', expiryDate: '2024-02-18' },
      ],
    },
  ];
  