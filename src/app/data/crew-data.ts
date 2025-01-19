import { identity } from "rxjs";
import { Crew } from "../models/crew-model";

export const CREW_DATA: Crew[] = [
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "nationality": "Brazil",
    "title": "Captain",
    "daysOnBoard": 78,
    "dailyRate": 156,
    "discount": 100,
    "currency": "USD",
    "certificateRelations": [
      {
        "certificateId": 1,
        "issueDate": "2020-01-18",
        "expiryDate": "2025-01-21"
      },
    ]
  },
  {
    "id": 2,
    "firstName": "Amit",
    "lastName": "Sharma",
    "nationality": "India",
    "title": "Engineer",
    "daysOnBoard": 131,
    "dailyRate": 413,
    "discount": 150,
    "currency": "EUR",
    "certificateRelations": [
      {
        "certificateId": 5,
        "issueDate": "2020-01-18",
        "expiryDate": "2025-01-21"
      },
      {
        "certificateId": 3,
        "issueDate": "2021-04-17",
        "expiryDate": "2025-07-05"
      },
      {
        "certificateId": 4,
        "issueDate": "2023-04-02",
        "expiryDate": "2024-12-02"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "John",
    "lastName": "Wick",
    "nationality": "USA",
    "title": "Manager",
    "daysOnBoard": 245,
    "dailyRate": 500,
    "discount": 100,
    "currency": "USD",
    "certificateRelations": [
      {
        "certificateId": 5,
        "issueDate": "2020-01-18",
        "expiryDate": "2025-01-21"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Emma",
    "lastName": "Smith",
    "nationality": "UK",
    "title": "Technician",
    "daysOnBoard": 340,
    "dailyRate": 430,
    "discount": 200,
    "currency": "GBP",
    "certificateRelations": [
      {
        "certificateId": 3,
        "issueDate": "2021-04-17",
        "expiryDate": "2025-07-05"
      },
      {
        "certificateId": 5,
        "issueDate": "2020-01-18",
        "expiryDate": "2025-01-21"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Sophia",
    "lastName": "Johnson",
    "nationality": "Canada",
    "title": "Developer",
    "daysOnBoard": 120,
    "dailyRate": 350,
    "discount": 120,
    "currency": "CAD",
    "certificateRelations": [
      {
        "certificateId": 4,
        "issueDate": "2023-04-02",
        "expiryDate": "2024-12-02"
      }
    ]
  },
  {
    "id": 6,
    "firstName": "Liam",
    "lastName": "Williams",
    "nationality": "Australia",
    "title": "Engineer",
    "daysOnBoard": 400,
    "dailyRate": 450,
    "discount": 180,
    "currency": "AUD",
    "certificateRelations": [
      {
        "certificateId": 3,
        "issueDate": "2021-04-17",
        "expiryDate": "2025-07-05"
      },
      {
        "certificateId": 5,
        "issueDate": "2020-01-18",
        "expiryDate": "2025-01-21"
      }
    ]
  },
  {
    "id": 7,
    "firstName": "Isabella",
    "lastName": "Miller",
    "nationality": "Italy",
    "title": "Manager",
    "daysOnBoard": 260,
    "dailyRate": 520,
    "discount": 250,
    "currency": "EUR",
    "certificateRelations": [
      {
        "certificateId": 5,
        "issueDate": "2020-01-18",
        "expiryDate": "2025-01-21"
      },
      {
        "certificateId": 4,
        "issueDate": "2023-04-02",
        "expiryDate": "2024-12-02"
      }
    ]
  },
  {
    "id": 8,
    "firstName": "Mason",
    "lastName": "Davis",
    "nationality": "USA",
    "title": "Technician",
    "daysOnBoard": 100,
    "dailyRate": 370,
    "discount": 80,
    "currency": "USD",
    "certificateRelations": [
      {
        "certificateId": 5,
        "issueDate": "2020-01-18",
        "expiryDate": "2025-01-21"
      }
    ]
  },
  {
    "id": 9,
    "firstName": "Ava",
    "lastName": "Garcia",
    "nationality": "Mexico",
    "title": "Engineer",
    "daysOnBoard": 180,
    "dailyRate": 410,
    "discount": 160,
    "currency": "MXN",
    "certificateRelations": [
      {
        "certificateId": 5,
        "issueDate": "2020-01-18",
        "expiryDate": "2025-01-21"
      },
      {
        "certificateId": 4,
        "issueDate": "2023-04-02",
        "expiryDate": "2024-12-02"
      }
    ]
  },
  {
    "id": 10,
    "firstName": "Ethan",
    "lastName": "Martinez",
    "nationality": "Brazil",
    "title": "Developer",
    "daysOnBoard": 220,
    "dailyRate": 490,
    "discount": 170,
    "currency": "BRL",
    "certificateRelations": [
      {
        "certificateId": 3,
        "issueDate": "2021-04-17",
        "expiryDate": "2025-07-05"
      }
    ]
  },
  {
    "id": 11,
    "firstName": "Mia",
    "lastName": "Rodriguez",
    "nationality": "Spain",
    "title": "Manager",
    "daysOnBoard": 350,
    "dailyRate": 550,
    "discount": 300,
    "currency": "EUR",
    "certificateRelations": [
      {
        "certificateId": 5,
        "issueDate": "2020-01-18",
        "expiryDate": "2025-01-21"
      },
      {
        "certificateId": 3,
        "issueDate": "2021-04-17",
        "expiryDate": "2025-07-05"
      }
    ]
  },
  {
    "id": 12,
    "firstName": "Oliver",
    "lastName": "Hernandez",
    "nationality": "Chile",
    "title": "Technician",
    "daysOnBoard": 280,
    "dailyRate": 420,
    "discount": 190,
    "currency": "CLP",
    "certificateRelations": [
      {
        "certificateId": 4,
        "issueDate": "2023-04-02",
        "expiryDate": "2024-12-02"
      }
    ]
  },
  {
    "id": 13,
    "firstName": "Charlotte",
    "lastName": "Lopez",
    "nationality": "France",
    "title": "Developer",
    "daysOnBoard": 310,
    "dailyRate": 480,
    "discount": 110,
    "currency": "EUR",
    "certificateRelations": [
      {
        "certificateId": 5,
        "issueDate": "2020-01-18",
        "expiryDate": "2025-01-21"
      }
    ]
  },
  {
    "id": 14,
    "firstName": "James",
    "lastName": "Wilson",
    "nationality": "Canada",
    "title": "Engineer",
    "daysOnBoard": 270,
    "dailyRate": 460,
    "discount": 130,
    "currency": "CAD",
    "certificateRelations": [
      {
        "certificateId": 5,
        "issueDate": "2020-01-18",
        "expiryDate": "2025-01-21"
      },
      {
        "certificateId": 4,
        "issueDate": "2023-04-02",
        "expiryDate": "2024-12-02"
      }
    ]
  }
];
