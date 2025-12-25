/*
   a list refers to the sequence of data items
   
   a linked list is a chain of nodes
      each node contains
         some piece of data that is to be stored in the sequence
         a link to next node in  the list

      
   the first node in the linked list is called head, the last node is called tail.
   each node points to the next node and last node will point to null.


   common linked list operation:
      traversal
      rewriting
      insertion
      deletion
 
*/
#include<iostream>
#include<string>
using namespace std;


struct Node {
   string data;
   Node* next;
};

// singly linked list operations


void traverseList(struct Node *temp) {
   auto* ptr = temp; // if we directly use temp, it won't make any changes to the output, but we want temp to point at the head so, we use extra pointer memory
   if(ptr == nullptr) {
      return;
   }

   // go till the last element and print the values
   while(ptr!=nullptr) {
      cout << ptr->data << ' ';
      ptr = ptr->next;
   }

   return;
}


// insert at the beginning of the list (data, targetList)
Node* insertAtBegin(string data, struct Node* temp) {
   struct Node* ptr = new Node;
   ptr->data = data;
   ptr->next = temp;
   return ptr;
}


// insert at the end of the list (data, targetList)
Node* insertAtEnd(string data, struct Node* temp) {
   struct Node* ptr = new Node;
   ptr->data = data;
   ptr->next = nullptr;

   // if list is empty, new node becomes the head
   if(temp == nullptr) {
      return ptr;
   }

   // traverse to the last node
   struct Node* p = temp;
   while(p->next != nullptr) {
      p = p->next;
   }

   // link new node at the end
   p->next = ptr;
   return temp;
}


// insert at a given position (data, targetList, position)
// position is zero-based: pos == 0 inserts at beginning
Node* insertAtPos(string data, struct Node* temp, int pos) {
   struct Node* ptr = new Node;
   ptr->data = data;
   ptr->next = nullptr;

   // insert at beginning for empty list or non-positive positions
   if(pos <= 0 || temp == nullptr) {
      if(temp == nullptr) {
         return ptr;
      }
      ptr->next = temp;
      return ptr;
   }

   // traverse to node just before the desired position
   struct Node* p = temp;
   int i = 0;
   while(i < pos - 1 && p->next != nullptr) {
      p = p->next;
      i++;
   }

   // insert the new node after p
   ptr->next = p->next;
   p->next = ptr;
   return temp;
}



int main() {
   // create a node and allocate it memory using `new`
   Node* list = new Node;
   list->data  = "node 1";
   list->next = nullptr;

   Node* item1 = new Node;
   Node* item2 = new Node;
   Node* item3 = new Node;

   // set the values for item list
   item1->data = "item1";
   item1->next = item2;

   item2->data = "item2";
   item2->next = item3;

   item3->data = "item3";
   item3->next = nullptr;

   traverseList(item1);
   cout << endl;

   item1 = insertAtBegin("item4", item1);
   traverseList(item1);


   delete list;
   delete item1;
   return 0;

}