#include<iostream>
using namespace std;

void bubbleSort(int *arr, int size) {
   // first loop for outerbounds
   for(int i = 0;i < size; ++i) {

      // if the values are already sorted we need a boolean to keep the track of things
      bool swapped = false;

      for(int j = 0; j < size-i-1; ++j) {
         if(arr[j] > arr[j+1]) {

            // swap j with j+1
            int temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;

            swapped = true;
         }
      }

      // simple logic, if there are no swaps it means the array is sorted lets see an example
         /*
            arr[size] = {1,1,-2,-1}
            see that 1 > -2 which will still be a swap, this will mean array is not sorted

            and if
            arr[size] = {1,2,3,4,4,5} 
            in first pass the condition j>j+1, j=0, j+1=2, and j>j+1 is false, 1>2 is false, which means there will be no swaps.
         */
      if(swapped==false) {
         break;
      }
   }
   return;
}


int main() {
   int size = 5;
   int arr[size] = {1, 3, -3, 9, 5};

   bubbleSort(arr, size);

   for(int i = 0; i < size; ++i) {
      cout << arr[i] << ' ';
   }


   return 0;
}