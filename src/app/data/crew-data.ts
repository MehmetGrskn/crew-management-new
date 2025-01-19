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
    "discount": 0.0606,
    "currency": "USD",
    "certificateRelations": [
      {
        "certificateId": 2,
        "issueDate": "2022-10-17",
        "expiryDate": "2025-02-05"
      },
      {
        "certificateId": 2,
        "issueDate": "2021-08-15",
        "expiryDate": "2025-04-10"
      },
      {
        "certificateId": 1,
        "issueDate": "2021-10-25",
        "expiryDate": "2024-12-07"
      }
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
    "discount": 0.000015,
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
    "firstName": "Emily",
    "lastName": "Johnson",
    "nationality": "USA",
    "title": "Captain",
    "daysOnBoard": 119,
    "dailyRate": 365,
    "discount": 0.1421,
    "currency": "EUR",
    "certificateRelations": [
      {
        "certificateId": 3,
        "issueDate": "2022-11-08",
        "expiryDate": "2024-08-08"
      },
      {
        "certificateId": 1,
        "issueDate": "2022-01-13",
        "expiryDate": "2025-12-19"
      }
    ]
  }
];
