const drumMakers = ['tama', 'pearl', 'yamaha'];

const drumSets = [
  ['silverstar', 'starclassic', 'star'],
  ['masters', 'reference', 'forum'],
];

//! typed Arrays provide type when extracting data
const favoriteDrumMaker = drumMakers[0];
const leastFavorite = drumMakers.splice(1, 1)[0];

//! prevent from adding incompatible types to array
drumSets.push(['DW']);
const japaneseDrumSets = drumSets.filter((arr: string[]): boolean => {
  return !arr.includes('DW');
});

console.log(japaneseDrumSets);
