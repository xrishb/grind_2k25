#include<iostream>
using namespace std;

void selectionSort(int *arr, int size) {
   // create a variable smallest to keep the track of the smallest element in the array
   int smallest;

   // create outer loop
   for(int i = 0; i < size-1; ++i) {
      // set smallest to i, making an assumption that the ith element is the smallest
      smallest = i;

      // inner loop

      /*
         interesting stuff that lets say
         i = 5, size = 6, and j =  i + 1 = 6
         in first loop we check i < size - 1, so 5<6 true, and then in second loop j = 6, j < size is false


         the nested loop(j) is for finding the smallest element in the array
      */
      for(int j = i+1; j < size; ++j) {

         // lets check if i+1 is smaller than the i
         if(arr[j] < arr[smallest]) {
            smallest = j; // if so, then smallest is the j index, not the value, we make index the smallest.
         }
      }

      // now swap outside the second loop, because we need to find the minimum value first, then we swap, if we swap inside the second loop or nested loop, we may find values lower than the swapped value, it becomes ineffienct.
      int temp = arr[smallest];
      arr[smallest] = arr[i];
      arr[i] = temp;
   }
}

int main() {
   int size = 5;
   int arr[size] = {1, 3, -3, 9, 5};

   selectionSort(arr, size);

   for(int i = 0; i < size; ++i) {
      cout << arr[i] << ' ';
   }

   return 0;
}