#include<iostream>
#include<cstdint>
/*
   <cstdint> : consists of integral types with specific width requirements.

   maybe useful for hashing???
*/

using namespace std; // doesn't matter rn

int main() {
   cout << "size of uint8_t: " << sizeof(uint8_t) << "Bytes"  << endl;
   cout << "size of int8_t: " << sizeof(int8_t) << "Bytes" << endl;


   cout << "size of uint64_t: " << sizeof(uint64_t) << "Bytes"  << endl;
   cout << "size of int64_t: " << sizeof(int64_t) << "Bytes"  << endl;

   return 0;
}