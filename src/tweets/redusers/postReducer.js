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
      "Лайфхак от дагестанских лесбиянок — выйти замуж за одного мужчину, чтобы беспалевно быть вместе, а он их содержал",
    foto: "https://pbs.twimg.com/media/EjF6wq1XYAUhsKK?format=jpg&name=small",
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
