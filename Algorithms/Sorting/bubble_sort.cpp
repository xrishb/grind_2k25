#include<iostream>
using namespace std;

void bubbleSort(int* arr, int n) {
   for(int i = 0; i < n-1; ++i) {
      for(int j = 0; j < n-i-1; ++j) {
         if(arr[j] > arr[j+1]) {
            int temp = arr[i];
            arr[i] = arr[j+1];
            arr[j+1] = temp;
         }
      }
   }
}

int main() {
   int n = 5;
   int arr[n] = {10,5,31,-12, 231};

   bubbleSort(arr, n);

   for(int i = 0; i < n; i++) {
      cout << arr[i] << " " ;
   }
   return 0;
}