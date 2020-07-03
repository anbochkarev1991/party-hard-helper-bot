import Cocktail from './cocktail-class.js';

const whiskeySour = new Cocktail(
  'Виски-сауэр',
  'Вкусно и крепко',
  'Виски',
  '?!60 мл виски (предпочтительнее бурбон);!30 мл лимонного сока;!30 мл сахарного сиропа;!15 мл яичного белка;!лёд',
  'Рокс',
  'Охладите бокал. Налейте все ингредиенты в шейкер и сильно взбейте безо льда для получения устойчивой пенки. Добавьте лед в шейкер, взбейте. Через стрейнер процедите в бокал. Украсить мараскиновой вишней.'
);

const penicillin = new Cocktail(
  'Пенициллин',
  'Вкусно и крепко',
  'Виски',
  '?!шотландский купажированный виски 50 мл;!имбирный сироп 15 мл;!лимон 30 мл;!имбирь 10 г;!яичный белок 1 шт.',
  'Рокс',
  'С лимона предварительно снять виток цедры для украшения. В шейкер влить виски, сироп, выжать сок целого лимона, добавить два кусочка имбиря и белок от одного яйца (предварительно отделить от желтка). Сильно взболтать все в течение пяти секунд. Открыть, добавить в шейкер кубики льда и взбить еще раз. В бокал для подачи положить несколько кубиков льда, через стрейнер процедить коктейль. Украсить цедрой лимона.'
);

const manhattan = new Cocktail(
  'Манхэттен',
  'Вкусно и крепко',
  'Виски',
  '?!несколько кубиков льда;!50 мл ржаного виски;!20 мл красного сладкого вермута;!2–3 капли ангостуры;!1 коктейльная вишня',
  'Шале',
  'Выложите в стакан лёд. Влейте виски, вермут и ангостуру и тщательно перемешайте. Перелейте напиток в охлаждённый коктейльный бокал и украсьте вишней. Лёд при подаче не нужен.'
);

const bulvardie = new Cocktail(
  'Бульвардье',
  'Вкусно и крепко',
  'Виски',
  '?!несколько кубиков льда;!30 мл кампари;!30 мл красного сладкого вермута;!40 мл бурбона или ржаного виски;!1 полоска апельсиновой цедры',
  'Рокс',
  'Наполните стакан льдом. Влейте кампари, вермут и бурбон или виски. Перемешайте и украсьте коктейль полоской цедры.',
);

const oldFashioned = new Cocktail(
  'Олд-Фэшнд',
  'Вкусно и крепко',
  'Виски',
  '?!1 сахарный кубик;!2 капли ангостуры;!несколько капель содовой;!несколько кубиков льда;!45 мл ржаного виски или бурбона;!1 долька апельсина;!1 коктейльная вишня',
  'Рокс',
  'Положите на дно стакана кубик сахара, добавьте ангостуру и содовую и подавите мадлером. Выложите лёд, влейте виски или бурбон и аккуратно перемешайте. Украсьте коктейль апельсином и вишней.'
)

const whiskeyCocktails = [
  whiskeySour,
  penicillin,
  manhattan,
  bulvardie,
  oldFashioned
]

export default whiskeyCocktails;
