const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Satyam",
        email: "satyam@example.com",
      },
      {
        name: "vikalp",
        email: "vikalp@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "SatyamDost",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "vidya",
        email: "vidhya@example.com",
      },
      {
        name: "vikalp",
        email: "vikalp@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Bachlor",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Anthony",
        email: "anthony@example.com",
      },
      {
        name: "vikalp",
        email: "vikalp@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Satyam Friends",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Satyam",
        email: "satyam@example.com",
      },
      {
        name: "vikalp",
        email: "vikalp@example.com",
      },
      {
        name: "vidya",
        email: "vidya@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "vidya",
      email: "vidya@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Satyam",
        email: "jsatyam@example.com",
      },
      {
        name: "vikalp",
        email: "vikalp@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Jane Doe",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Satyam",
        email: "satyam@example.com",
      },
      {
        name: "vikalp",
        email: "vikalp@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];

module.exports={ chats};