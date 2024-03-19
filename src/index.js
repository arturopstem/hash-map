import HashMap from './hash-map';

const odinities = new HashMap();

odinities.set('Carlos', 'CORE');
odinities.set('James', 'CORE');
odinities.set('Bender', 'MAINTAINER');
odinities.set('josh', 'MAINTAINER');
odinities.set('mdfr4nk', 'MAINTAINER');
odinities.set('Zach', 'MAINTAINER');
odinities.set('Fred', 'MODERATOR');
odinities.set('Mclilzee', 'MODERATOR');
odinities.set('ByranF', 'MODERATOR');

console.log('entries:', odinities.entries());
console.log('length:', odinities.length());

console.log("Carlos' role:", odinities.get('Carlos'));

console.log('Is Arturop registered?', odinities.has('Arturop'));
if (odinities.has('Arturop') === false) {
  odinities.set('Arturop', 'CLUB-40');
  console.log('Added Arturop');
}
console.log('length:', odinities.length());

console.log('odinities:', odinities.keys());

odinities.clear();
console.log('length:', odinities.length());
