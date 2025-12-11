#include<iostream>
using namespace std;

int linearSearch(const int* arr, int element, int n) {
   for(int i = 0; i < n; i ++) {
      if(arr[i] == element) {
         return i;
      }
   }
   return -1;
}

int main() {
   int n = 5;
   int arr[n] = {1,2,3,4,5};
   int element = 3;

   int resultPos = linearSearch(arr, element, n);

   if(resultPos == -1) {cout << "element not in the list!" << endl;}
   else {cout << "element found at index: " << resultPos << endl;}

   return 0;
}