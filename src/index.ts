import { merge } from './merge';

const collection_1 = [1, 3, 5];
const collection_2 = [2, 4, 6];
const collection_3 = [9, 8, 7];

const result = merge(collection_1, collection_2, collection_3);

console.log('Merged result: ', result);