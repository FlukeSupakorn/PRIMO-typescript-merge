export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    // reverse collection_3 to make it in ascending order
    const collection_3_asc = reverse(collection_3);

    return mergeSortedArrays(mergeSortedArrays(collection_1, collection_2), collection_3_asc);
}


function reverse(collection: number[]): number[] {
    // reverse the collection by pushing elements from the end of the collection array to the reversed array.
    const reversed: number[] = [];
    for (let i = collection.length - 1; i >= 0; i--) {
        reversed.push(collection[i]);
    }

    return reversed;
}

function mergeSortedArrays(collection_1: number[], collection_2: number[]): number[] {
    const merged: number[] = [];
    let i = 0, j = 0;

    /* 
      merge the two sorted arrays by comparing their elements.
      if the element in collection_1 is smaller, push it to the merged array and increment the index of collection_1.
      otherwise, push the element from collection_2 and increment the index of collection_2.
    */
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] < collection_2[j]) {
            merged.push(collection_1[i]);
            i++;
        } else {
            merged.push(collection_2[j]);
            j++;
        }
    }

    // push the remaining elements from the first and second arrays to the merged array
    while (i < collection_1.length) {
        merged.push(collection_1[i]);
        i++;
    }

    // push the remaining elements from the second array to the merged array
    while (j < collection_2.length) {
        merged.push(collection_2[j]);
        j++;
    }

    return merged;
}