#include <iostream>
using namespace std;

int main() {
    // Using const so we can define the array size safely
    const int size = 5;
    int arr[size] = {1, 3, -3, 9, 5};

    cout << "--- START DEBUGGING ---" << endl;

    // Outer loop
    for(int i = 0; i < size - 1; ++i) {
        
        cout << "\n[New Pass] i: " << i << endl;

        // INNER LOOP
        // If we went all the way to size-i, arr[j+1] would go outside memory.
        
        for(int j = 0; j < size - i - 1; ++j) {
            
            // --- DEBUG REQUEST START ---
            cout << "  Step Check:" 
                 << "  size: " << size
                 << "  i: " << i
                 << "  j: " << j 
                 << "  j+1: " << j+1
                 << "  size-1: " << size - 1
                 << "  arr[i]: " << arr[i] 
                 << "  arr[j]: " << arr[j] 
                 << "  arr[j+1]: " << arr[j+1] 
                 << endl;
            // --- DEBUG REQUEST END ---

            if(arr[j] > arr[j+1]) {
                cout << "    -> SWAP! Because " << arr[j] << " > " << arr[j+1] << endl;
                
                // swap j with j+1
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                
                cout << "    -> Array is now: ";
                for(int k=0; k<size; k++) cout << arr[k] << " ";
                cout << endl;
            }
        }
    }

    cout << "\n--- FINAL RESULT ---" << endl;
    for(int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}