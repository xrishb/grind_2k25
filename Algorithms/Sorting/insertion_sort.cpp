#include<iostream>
using namespace std;

/* 
   insertion sort divides the array into two parts: sorted and unsorted, it works by iteratively inserting the unsorted element to sorted part by checking conditions.

   -in this we assume that the first element is sorted by default, so we start the loop from 1
   -we keep the track of value for swapping process later, to assign the values if we satisfy the while loop conditions.

*/
void insertionSort(int *arr, int size) {

   // start the loop from index 1 instead of 0, since we assume the first element is sorted
   for(int i = 1; i < size; ++i) {
      // keep the track of the value for assigning values later to the updated index
      int value = arr[i];

      // hole is created to insert values into the index if we find a value in array[hole-1] that is greater than the value variable, that is equal to the ith element of the array.
      int insertPos = i;

      // now check the condition , hole > 0, we can't go negative here, and arr[hole-1] > value, if this condition is met
      while(insertPos > 0 && arr[insertPos-1] > value) {

         // then we update the value, its simlilar to swap 
         arr[insertPos] = arr[insertPos-1];
         insertPos--; // update indices
      }

      // value remains the same if while loop condition is not met, and updated if condition is met so we have assign new values
      arr[insertPos] = value;
   }
}

int main() {
   int size = 5;
   int arr[size] = {1, 3, -3, 9, 5};

   insertionSort(arr, size);

   for(int i = 0; i < size; ++i) {
      cout << arr[i] << ' ';
   }


   return 0;
}