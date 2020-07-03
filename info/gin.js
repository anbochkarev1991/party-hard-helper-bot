import Cocktail from './cocktail-class.js';

const gimlet = new Cocktail(
  'Гимлет (Буравчик)',
  'Вкусно и крепко',
  'Джин',
  '?!джин (сухой лондонский) – 60 мл;!сок лайма – 20 мл;!сахар – 1 чайная ложка;!лед – 200 грамм',
  'Шале',
  'Наполнить шейкер льдом. Добавить джин, свежевыжатый сок и сахар. Взболтать, процедить через стрейнер (сито) в бокал для подачи. Украсить долькой или цедрой лайма.',
  'https://alcofan.com/kak-sdelat-koktejl-gimlet.html',
  'https://alcofan.com/wp-content/uploads/2017/04/alkogolnyj-koktejl-gimlet-buravchik-150x150.jpg'
);

const alexander = new Cocktail(
  'Александр',
  'Вкусно и не крепко',
  'Джин',
  '?!кофейный ликер – 30 мл;!джин – 30 мл;!сливки 33% жирности – 30 мл;!лед в кубиках – 200 грамм;!молотый мускатный орех – 2 грамма',
  'Шале',
  'Смешать все ингредиенты в шейкере, затем перелить готовый коктейль в бокал',
  'https://alcofan.com/prostye-koktejli-s-dzhinom-%E2%80%93-10-luchshix-receptov.html',
  'https://alcofan.com/wp-content/uploads/2012/12/aleksandr.png'
);

const ginTonic = new Cocktail(
  'Джин-тоник',
  'Умеренно крепко',
  'Джин',
  '?!джин – 100 мл;!тоник – 200 мл;!кружок лимона – 1 штука;!лед – треть бокала',
  'Рокс или Хайбол',
  'В бокал со льдом налить джин, затем тоник и положить кружок лимона',
  'https://alcofan.com/prostye-koktejli-s-dzhinom-%E2%80%93-10-luchshix-receptov.html',
  'https://alcofan.com/wp-content/uploads/2013/01/koktejl-dzhin-tonik.jpg'
);

const bronx = new Cocktail(
  'Бронкс',
  'Вкусно и не крепко',
  'Джин',
  '?!джин – 20 мл;!вермут rosso – 10 мл;!сухой вермут – 10 мл;!апельсиновый сок – 20 мл',
  'Шале',
  'Положить в шейкер кубики льда и все остальные ингредиенты, несколько раз встряхнуть, затем перелить в бокал для коктейлей',
  'https://alcofan.com/prostye-koktejli-s-dzhinom-%E2%80%93-10-luchshix-receptov.html',
  'https://alcofan.com/wp-content/uploads/2012/12/bronks.png'
);

const ladyChatterley = new Cocktail(
  'Леди Чаттерлей',
  'Вкусно и не крепко',
  'Джин',
  '?!джин – 30 мл;!ликер Кюрасо – 10 мл;!сухой вермут – 10 мл;!апельсиновый сок – 10 мл',
  'Флюте',
  'После смешивания в шейкере со льдом всё содержимое вылить в бокал на высокой ножке',
  'https://alcofan.com/prostye-koktejli-s-dzhinom-%E2%80%93-10-luchshix-receptov.html',
  'https://alcofan.com/wp-content/uploads/2012/12/ledi-chatterlej.jpg'
);

const chertanovskyZakat = new Cocktail(
  'Чертановский закат',
  'Вкусно и не крепко',
  'Джин',
  '?!50 мл джина;!20 мл абрикосового бренди;!25 мл грейпфрутового сиропа;!150 мл свежевыжатого грейпфрутового сока',
  'Шале',
  'Взболтать все ингредиенты в шейкере со льдом, перелить в охлажденный бокал. Для дополнительной ароматики можно добавить сверху пару чайных ложек грейпфрутового ликера.',
  'Авторский',
  'https://winestyle.ru/images_raw/pages/rose11553196611.jpg'
);


const ginCocktails = [
  gimlet,
  ginTonic,
  alexander,
  bronx,
  ladyChatterley,
  chertanovskyZakat
]

export default ginCocktails;
