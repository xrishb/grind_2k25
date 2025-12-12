#include<iostream>
#include<vector>

using namespace std; // bad practice

int main() {

   // initialization
   vector<int> a; // empty vector
   vector<int> b(5); // size is 5 , all zeros (Default)
   vector<int> c(5, -1); // size is 5, all -1
   vector<int> d {1,2,3,4,5}; // with values
   vector<int> e = {1,2,3,4,5}; // similar as above
   vector<int> f = e; // copy vector e to f

   // size and capacity
   int size = a.size(); // returns total number of elements in the vector
   int capacity = a.capacity(); // returns allocated space to vector
   a.reserve(10); // reserves space for 10 integers/elements
   a.shrink_to_fit(); // shrinks the vector to total elements size (not guaranteed)

   // adding/removing elements
   int x = 10;
   a.push_back(x); // append 
   a.emplace_back(x-5); // construct in place
   a.pop_back(); // removes last
   // a.insert(size-1, x); requires iterator
   // a.erase(pos); requires iterator
   a.clear(); // removes all elements

   // iterators, algorithmic patterns next 
   return 0;

}

