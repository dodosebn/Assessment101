import cloth1 from '@/public/assets/cloth/Moretrouser.avif';
import cloth2 from '@/public/assets/cloth/crasyJean.avif';
import cloth3 from '@/public/assets/cloth/cyanShirt.avif';
import cloth4 from '@/public/assets/cloth/femaleSliveLess.avif';
import cloth5 from '@/public/assets/cloth/multiFemale.avif';
import cloth6 from '@/public/assets/cloth/multiSilveF.avif';
import cloth7 from '@/public/assets/cloth/whiteShirt.avif';
import cloth8 from '@/public/assets/cloth/whiteShirtM.avif';
import cloth9 from '@/public/assets/cloth/whiteUnisex.avif';

import product1 from '@/public/assets/Products/prod1.avif';
import product2 from '@/public/assets/Products/prod2.avif';
import product3 from '@/public/assets/Products/prod3.avif';
import product4 from '@/public/assets/Products/prod4.avif';
import product5 from '@/public/assets/Products/prod5.avif';
import product6 from '@/public/assets/Products/prod6.avif';
import product7 from '@/public/assets/Products/prod7.avif';
import product8 from '@/public/assets/Products/prod8.avif';
import product9 from '@/public/assets/Products/prod9.avif';

import food1 from '@/public/assets/foods/food1.avif';
import food2 from '@/public/assets/foods/food2.avif';
import food3 from '@/public/assets/foods/food3.avif';
import food4 from '@/public/assets/foods/food4.avif';
import food5 from '@/public/assets/foods/food5.avif';
import food6 from '@/public/assets/foods/food6.avif';
import food7 from '@/public/assets/foods/food7.avif';
import food8 from '@/public/assets/foods/food8.avif';
import food9 from '@/public/assets/foods/food9.avif';

import travel1 from '@/public/assets/Travel/travel1.avif';
import travel2 from '@/public/assets/Travel/travel 2.avif';
import travel3 from '@/public/assets/Travel/travel3.avif';
import travel4 from '@/public/assets/Travel/travel4.avif';
import travel5 from '@/public/assets/Travel/travel 5.avif';
import travel6 from '@/public/assets/Travel/travel6.avif';
import travel7 from '@/public/assets/Travel/travel 7.avif';
import travel8 from '@/public/assets/Travel/travel8.avif';
import travel9 from '@/public/assets/Travel/travel9.avif';
let clothamount = 150;
let prodamount = 250;
let foodamount  = 80;
let travamount = 500;
export const prodDemoMaps = [
    ...[cloth3, product3, food3, travel3, cloth8, product7, travel3, travel5].map((img, index) => (
        {
            id: index + 1,
            name: img,
            category: 'generate',
            price: `$${foodamount + 1}`,
            describ: `Stylish and comfortable cloths that suits every occasion.`
        }
    ))
]
export const ProductMaps = [
...[cloth1, cloth2, cloth3, cloth4, cloth5, cloth6, cloth7, cloth8, cloth9].map((img, index) => ({
    id: index + 1, 
    name: img,
    category: 'cloth',
    price: `$${clothamount + 1}`,
    describ: 'Stylish and comfortable clothing that suits every occasion.',
  })),

  ...[product1, product2, product3, product4, product5, product6, product7, product8, product9].map((img, index) => ({
    id: index + 10,
    name: img,
    category: 'Product',
    price: `$${prodamount + 1}`,
    describ: 'This awesome piece, belongs to the product category',
  })),

  // Foods
  ...[food1, food2, food3, food4, food5, food6, food7, food8, food9].map((img, index) => ({
    id: index + 19,
    name: img,
    category: 'Food',
    price: `$${foodamount + 1}`,
    describ: 'Delicious and fresh, belongs to the food category',
  })),

  // Travel
  ...[travel1, travel2, travel3, travel4, travel5, travel6, travel7, travel8, travel9].map((img, index) => ({
    id: index + 28,
    name: img,
    category: 'travel',
    price: `$${travamount + 1}`,
    describ: 'Perfect for your next getaway, belongs to the travel category',
  })),
];
