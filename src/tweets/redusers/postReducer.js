const initialState = [
  {
    id:
      "Wed Sep 30 2020 00:00:47 GMT+0300 (за східноєвропейським літнім часом)",
    title: "Іван",
    message:
      "У Вірменії впав штурмовик #Су25, у міністерстві оборони країни стверджують, що він був збитий турецьким винищувачем #F16 з території Азербайджану",
    foto: "https://pbs.twimg.com/card_img/1310954506155425793/f2e1zOzY?format=jpg&name=small"
    },
  {
    id:
      "Wed Sep 30 2020 00:00:56 GMT+0300 (за східноєвропейським літнім часом)",
    title: "Прямий",
    message: "Петро Порошенко отримав позитивний тест на COVID-19.",
    foto: "https://pbs.twimg.com/media/EjGIMjZXsAAf5HQ?format=jpg&name=small",
  },
  {
    id:
      " Wed Sep 30 2020 00:01:04 GMT+0300 (за східноєвропейським літнім часом)",
    title: "Джихад",
    message:
      "Исламское государство выступило посредником в армяно-азербайджанском конфликте. Халиф Абу Ибрахим аль-Хашими аль-Курейши предлагает разрешить ситуацию путем партии в нарды",
    foto: "https://pbs.twimg.com/media/Ei7zJLwXYAIhAbZ?format=jpg&name=small",
  },
];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return state.concat([action.data]);
    default:
      return state;
  }
};
export default postReducer;
