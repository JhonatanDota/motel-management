import AccommodationModel from "../models/AccommodationModel";

const accommodationDumy: AccommodationModel[] = [
  {
    id: 1,
    room: {
      id: 1,
      number: 101,
      hour_value: 50,
      type: "Single",
    },
    consumable_items: [
      {
        id: 1,
        name: "Water Bottle",
        price: 5,
        description: "Refreshing water",
        image: null,
      },
      {
        id: 2,
        name: "Snack Pack",
        price: 10,
        description: "Assorted snacks",
        image: null,
      },
    ],
    alias: "Room 101",
    value: 75,
    entry_time: "2023-11-17T12:00:00",
    exit_time: "2023-11-18T10:00:00",
    discount: 10,
    paid: true,
  },
  {
    id: 2,
    room: {
      id: 2,
      number: 201,
      hour_value: 60,
      type: "Double",
    },
    consumable_items: [
      {
        id: 3,
        name: "Coffee Mug",
        price: 7,
        description: "Hot coffee",
        image: null,
      },
      {
        id: 4,
        name: "Movie Night Snacks",
        price: 15,
        description: "Popcorn and candies",
        image: null,
      },
    ],
    alias: "Room 201",
    value: 90,
    entry_time: "2023-11-19T14:00:00",
    exit_time: "2023-11-20T12:00:00",
    discount: 15,
    paid: false,
  },
];

export default accommodationDumy;
