import { merge } from '../src/merge';

describe('merge function', () => {
    test('Check arrays are merged correctly', () => {
        const collection_1 = [1, 3, 5, 7];
        const collection_2 = [2, 4, 6, 8];
        const collection_3 = [10, 9, 8, 7];

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 10]);
    });

    test('Check arrays with negative numbers are merged correctly', () => {
        const collection_1 = [-7, -5, -3, -1];
        const collection_2 = [-8, -6, -4, -2];
        const collection_3 = [-7, -8, -9, -10];

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([-10, -9, -8, -8, -7, -7, -6, -5, -4, -3, -2, -1]);
    });

    test('Check arrays with mixed numbers are merged correctly', () => {
        const collection_1 = [-5, -1, 3, 7];
        const collection_2 = [-8, -4, 2, 6];
        const collection_3 = [10, -7, -8, -9];

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([-9, -8, -8, -7, -5, -4, -1, 2, 3, 6, 7, 10]);
    });

    test('Check arrays with empty arrays are merged correctly', () => {
        const collection_1: number[] = [];
        const collection_2 = [2, 4, 6, 8];
        const collection_3 = [10, 9, 8, 7];

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([2, 4, 6, 7, 8, 8, 9, 10]);
    });

    test('Check arrays with all empty arrays are merged correctly', () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [];

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([]);
    });

    test('Check arrays with one element are merged correctly', () => {
        const collection_1 = [1];
        const collection_2 = [2];
        const collection_3 = [3];

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([1, 2, 3]);
    });
});