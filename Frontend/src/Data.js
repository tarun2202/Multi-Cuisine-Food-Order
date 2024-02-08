const list = [
    {
      id: 1,
      title: "Black pepper chicken and Rice",
      price: 2500,
      img: "img/chinese 1.jpeg",
      amount: 1,
      kind: "Chinese",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
    {
      id: 2,
      title: "Burger",
      price: 1200,
      img: "./Images/Mexican.jpg",
      amount: 1,
      kind: "American",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
    {
      id: 3,
      title: "Jollof Rice and Fried Plantain",
      price: 1500,
      img: "img/african 1.png",
      amount: 1,
      kind: "African",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
      
    },
    {
      id: 4,
      title: "Noodle",
      price: 2000,
      img: "img/chinese 2.jpeg",
      amount: 1,
      kind: "Chinese",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
    {
      id: 5,
      title: "Hot dog",
      price: 1000,
      img: "img/american 2.jpeg",
      amount: 1,
      kind: "American",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
    {
      id: 6,
      title: "White Rice and Vegetable Sauce with Plantain",
      price: 1700,
      img: "img/african 2.jpeg",
      amount: 1,
      kind: "African",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
    {
      id: 7,
      title: "Fufu and Egusi Soup",
      price: 2000,
      img: "img/african 3.jpg",
      amount: 1,
      kind: "African",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
    {
      id: 8,
      title: "Hainanese chicken rice",
      price: 1800,
      img: "img/chinese 3.jpg",
      amount: 1,
      kind: "Chinese",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
    {
      id: 9,
      title: "Cobb salad",
      price: 1200,
      img: "img/american 3.jpeg",
      amount: 1,
      kind: "American",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
    {
      id: 10,
      title: "Baked Apple Pie",
      price: 1500,
      img: "img/american 4.jpg",
      amount: 1,
      kind: "American",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
    {
      id: 11,
      title: "Amala and Ewedu Soup",
      price: 1500,
      img: "img/african 4.jpeg",
      amount: 1,
      kind: "African",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
    {
      id: 12,
      title: "Chinese Noodles",
      price: 2300,
      img: "img/chinese 4.jpeg",
      amount: 1,
      kind: "Chinese",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
    {
      id: 13,
      title: "Vetkoek (Fried Donuts Stuffed with Minced Meat)",
      price: 2200,
      img: "img/african 5.jpg",
      amount: 1,
      kind: "African",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
    {
      id: 14,
      title: "Seswaa",
      price: 1600,
      img: "img/african 6.jpg",
      amount: 1,
      kind: "African",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
    {
      id: 15,
      title: "Bacon, Eggs and Pancakes",
      price: 1400,
      img: "img/american 5.jpg",
      amount: 1,
      kind: "American",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
    {
      id: 16,
      title: "Rice, Beans and Stew",
      price: 1800,
      img: "img/african 7.jpeg",
      amount: 1,
      kind: "African",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
    {
      id: 17,
      title: "African Salad Abacha",
      price: 1400,
      img: "img/african 8.jpeg",
      amount: 1,
      kind: "African",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
    {
      id: 18,
      title: "Kung Pao chicken",
      price: 2000,
      img: "img/chinese 5.jpeg",
      amount: 1,
      kind: "Chinese",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
    {
      id: 19,
      title: "Pancakes",
      price: 1300,
      img: "img/american 6.jpeg",
      amount: 1,
      kind: "American",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
    {
      id: 20,
      title: "Gatsby Sandwich",
      price: 1700,
      img: "img/african 10.jpg",
      amount: 1,
      kind: "African",
      desc: "Description :A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world."
    },
  ];

export default list;
  