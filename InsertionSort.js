function insertionSort(arr) {
    let n = arr.length;

    // Loop through each element in the array, starting from the second one
    for (let i = 1; i < n; i++) {
        let key = arr[i]; // The element to be compared
        let j = i - 1; // Start comparing with the previous element

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shift the element to the right
            j--; // Move to the next element
        }
        arr[j + 1] = key; // Insert the key at the correct position
    }

    return arr; // Return the sorted array
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = insertionSort(array);
console.log('Sorted Array:', sortedArray);
