import { CategoryMessage } from "../types/category-message";

export const scolarshipCategoryMessages: CategoryMessage[] = [
  //1
  {
    message: "Як отримати академічну стипендію?",
    response:
      'Для отримання академічної стипендії потрібно мати високий середній бал успішності та активно участь у науковій та громадській діяльності університету. Детальніша інформація доступна на сайті університету в розділі стипендії.  <a href="https://goo.su/UjQi/">Детальніше</a>',
    keywords: ["академічна", "стипендія", "отримати", "успішність"],
    category: "scholarship",
  },
  //2
  {
    message: "Чи існують стипендії для іноземних студентів?",
    response:
      ' Так, іноземні студенти можуть претендувати на стипендії за певними програмами обміну або міжнародними угодами. Рекомендуємо ознайомитися з умовами на сайті університету.  <a href="https://goo.su/d42abU/">Детальніше</a>',
    keywords: ["іноземні", "студенти", "стипендії", "іноземець", "іноземцю"],
    category: "scholarship",
  },

  //3
  {
    message: "Як мені отримати соціальну стипендію?",
    response:
      ' Соціальну стипендію можуть отримувати студенти, які мають певні соціальні пільги, наприклад, сироти, особи з інвалідністю, студенти, які мають дітей. Повний перелік умов та необхідні документи можна знайти на сайті університету.  <a href="https://goo.su/vjzWhzl/">Детальніше</a> ',
    keywords: ["соціальна", "соціальну", "стипендія", "умови", "пільги"],
    category: "scholarship",
  },
  //4
  {
    message: "Коли виплачують стипендії?",
    response:
      'Виплата стипендій зазвичай проводиться щомісяця, до 15 числа. Для отримання актуальної інформації перевірте офіційний сайт або зверніться до бухгалтерії університету.    <a href="https://goo.su/iJXhJV/">Детальніше</a>',
    keywords: ["виплата", "стипендії", "коли", "отримаю", "стипендію"],
    category: "scholarship",
  },
  //5
  {
    message: "Як впливає академічна заборгованість на стипендію?",
    response:
      ' Наявність академічної заборгованості може призвести до призупинення виплати стипендії до моменту її ліквідації. Детальні умови зазначені в правилах університету.   <a href="https://goo.su/iJXhJV/">Детальніше</a> ',
    keywords: ["академічна", "заборгованість", "стипендія"],
    category: "scholarship",
  },
  //6
  {
    message: "Чи можна отримати стипендію за спортивні досягнення?",
    response:
      "Так, студенти, які мають значні спортивні досягнення, можуть претендувати на спеціальну стипендію за внесок у спортивне життя університету. Деталі можна уточнити в спортивному відділі.",
    keywords: [
      "спортивні досягнення",
      "спеціальна стипендія",
      "спортивне життя",
    ],
    category: "scholarship",
  },
  //7
  {
    message: "Чи впливає успішність на розмір стипендії?",
    response:
      'Так, розмір академічної стипендії може залежати від середнього балу успішності студента. Вищий бал може збільшити шанси на отримання стипендії підвищеного розміру. <a href="https://goo.su/iJXhJV/">Детальніше</a> ',
    keywords: ["успішність", " розмір стипендії", "середній бал"],
    category: "scholarship",
  },

  //8
  {
    message: "Де можна подивитися список стипендіатів?",
    response:
      'Список стипендіатів зазвичай публікується на офіційному сайті університету або на інформаційних стендах в адміністративних будівлях. Також інформацію можна отримати в деканаті свого факультету.   <a href="https://goo.su/LaSzz3a/">Детальніше</a>',
    keywords: ["список стипендіатів"],
    category: "scholarship",
  },
  //9
  {
    message: "Які документи необхідно подати для отримання стипендії?",
    response:
      'Для претендування на стипендію необхідно подати заяву, копію студентського квитка, а також інші документи залежно від типу стипендії.   <a href="https://goo.su/UjQi/">Детальніше</a>',
    keywords: ["документи", "отримання стипендії"],
    category: "scholarship",
  },
  //10
  {
    message: "Як часто переглядається рішення про призначення стипендії?",
    response:
      ' Рішення про призначення стипендії переглядається кожен семестр на основі академічних досягнень студента та інших відповідних критеріїв.  <a href="https://goo.su/LaSzz3a/">Детальніше</a>',
    keywords: ["перегляд", "семестр", " призначення стипендії"],
    category: "scholarship",
  },
  //11
  {
    message: "Чи можуть студенти заочної форми навчання отримувати стипендію?",
    response:
      "Умови отримання стипендії для заочників можуть відрізнятися від умов для студентів денної форми навчання. Зазвичай, стипендія доступна лише для тих, хто відвідує повний курс навчання, але деталі необхідно уточнювати в університеті.",
    keywords: ["заочна форма", " умови стипендії"],
    category: "scholarship",
  },
  //12
  {
    message:
      "Які існують типи стипендій у Херсонському Державному університеті?",
    response:
      " У ХДУ існують різні типи стипендій, включаючи академічну стипендію, соціальну стипендію, стипендії за спортивні досягнення, а також спеціальні стипендіальні програми для видатних досягнень у науковій роботі.",
    keywords: [
      "типи стипендій",
      "академічна",
      "соціальна",
      "спортивні досягнення",
    ],
    category: "scholarship",
  },
  //13
  {
    message: "Як подати апеляцію, якщо мені відмовлено у стипендії?",
    response:
      " Якщо вам відмовлено у стипендії, ви маєте право подати апеляцію до стипендіальної комісії університету. Необхідно підготувати відповідні документи та докази, що підтверджують вашу правомірність на отримання стипендії, та подати їх разом з апеляційною заявою.",
    keywords: ["апеляція", "відмова у стипендії", "стипендіальна комісія"],
    category: "scholarship",
  },
  //14
  {
    message: "Чи можна отримати стипендію, навчаючись на контрактній основі?",
    response:
      "Студенти, які навчаються на контрактній основі, зазвичай не мають права на академічну стипендію від держави, але можуть претендувати на інші види стипендій, зокрема, за особливі досягнення або участь у наукових проектах.",
    keywords: [" контрактна основа", "контракт", "стипендія"],
    category: "scholarship",
  },
  //15
  {
    message: "Які стипендії доступні для студентів-магістрів?",
    response:
      "Студенти-магістри можуть претендувати на академічну стипендію за високі успіхи у навчанні, а також на стипендії за участь у наукових дослідженнях і проектах. Специфіка стипендій може варіюватися залежно від факультету та спеціальності.",
    keywords: ["магістри", "стипендія"],
    category: "scholarship",
  },
  //16
  {
    message: " Де я можу знайти інфорацію про стипендію?",
    response:
      'Ви можете знайти детальну інформацію про стипендію на головному сайті ХДУ. <a href="https://goo.su/cRJpy/">Детальніше</a>',
    keywords: ["інформація", "стипендія"],
    category: "scholarship",
  },
];
