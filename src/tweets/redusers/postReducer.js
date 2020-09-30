const initialState = [
 
    {
      id:
        "Wed Sep 30 2020 00:00:48 GMT+0300 (за східноєвропейським літнім часом)",
      title: "Right.News",
      message:
        "Ярош предложил Зеленскому свою кандидатуру В ТКГ вместо Фокина",
      foto: "https://pbs.twimg.com/card_img/1311317413758210050/nWctWc8R?format=jpg&name=small"
      },
      {
        id:
          "Wed Sep 30 2020 20:00:48 GMT+0300 (за східноєвропейським літнім часом)",
        title: "СБУ",
        message:
          "СБУ блокувала ще одну проросійську «ботоферму», яка поширювала фейки перед виборами",
        foto: "https://pbs.twimg.com/media/EjLF0ZLXYAEVtPT?format=jpg&name=medium"
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