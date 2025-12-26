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


// delete at the beginning of the list (targetList)
Node* deleteAtBegin(struct Node* temp) {
   // if list is empty, nothing to delete
   if(temp == nullptr) {
      return nullptr;
   }

   // keep reference to head, move head forward, free old head
   struct Node* toDelete = temp;
   temp = temp->next;
   delete toDelete;
   return temp;
}


// delete at the end of the list (targetList)
Node* deleteAtEnd(struct Node* temp) {
   // empty list
   if(temp == nullptr) {
      return nullptr;
   }

   // single element list
   if(temp->next == nullptr) {
      delete temp;
      return nullptr;
   }

   // traverse to the penultimate node
   struct Node* p = temp;
   while(p->next->next != nullptr) {
      p = p->next;
   }

   // p->next is the last node
   struct Node* toDelete = p->next;
   p->next = nullptr;
   delete toDelete;
   return temp;
}


// delete at a given position (targetList, position)
// position is zero-based: pos == 0 deletes the head
Node* deleteAtPos(struct Node* temp, int pos) {
   // empty list or invalid position
   if(temp == nullptr) {
      return nullptr;
   }

   if(pos <= 0) {
      // delete the first element
      struct Node* toDelete = temp;
      temp = temp->next;
      delete toDelete;
      return temp;
   }

   // traverse to node just before the one to delete
   struct Node* p = temp;
   int i = 0;
   while(i < pos - 1 && p->next != nullptr) {
      p = p->next;
      i++;
   }

   // if there's no node at position pos, do nothing
   if(p->next == nullptr) {
      return temp;
   }

   // remove p->next
   struct Node* toDelete = p->next;
   p->next = toDelete->next;
   delete toDelete;
   return temp;
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


// reverse a singly linked list iteratively and return new head
Node* reverseList(struct Node* head) {
   Node* prev = nullptr;
   Node* curr = head;
   Node* next = nullptr;

   while(curr != nullptr) {
      next = curr->next;
      curr->next = prev;
      prev = curr;
      curr = next;
   }

   return prev;
}


// detect cycle in a singly linked list using Floyd's algorithm
bool hasCycle(struct Node* head) {
   if(head == nullptr) return false;
   Node* slow = head;
   Node* fast = head;

   while(fast != nullptr && fast->next != nullptr) {
      slow = slow->next;
      fast = fast->next->next;
      if(slow == fast) return true;
   }

   return false;
}


// simple bubble-sort for singly linked list (swaps node data)
Node* sortList(struct Node* head) {
   if(head == nullptr || head->next == nullptr) return head;
   bool swapped;
   do {
      swapped = false;
      Node* p = head;
      while(p->next != nullptr) {
         if(p->data > p->next->data) {
            swap(p->data, p->next->data);
            swapped = true;
         }
         p = p->next;
      }
   } while(swapped);
   return head;
}


// selection sort for singly linked list (swaps node data)
Node* selectionSort(struct Node* head) {
   if(head == nullptr || head->next == nullptr) return head;
   for(Node* i = head; i != nullptr; i = i->next) {
      Node* minNode = i;
      for(Node* j = i->next; j != nullptr; j = j->next) {
         if(j->data < minNode->data) minNode = j;
      }
      if(minNode != i) swap(i->data, minNode->data);
   }
   return head;
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

   cout << endl;
      // selection sort demo: sort the list and print
      item1 = selectionSort(item1);
   traverseList(item1);

   cout << endl;
   // reverse the list and print
   item1 = reverseList(item1);
   traverseList(item1);

   cout << endl;
   Node* tail = item1;
   while(tail->next != nullptr) tail = tail->next;
   tail->next = item1; // create cycle

   cout << "Has cycle: " << (hasCycle(item1) ? "Yes" : "No") << endl;

   // break cycle so program can cleanup
   tail->next = nullptr;

   cout << endl;

   delete list;
   delete item1;
   return 0;

}