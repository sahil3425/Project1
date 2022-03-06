#include <iostream>
#include<math.h>
using namespace std;
int main(){
 int n;
 cin>>n;
 int f=1;
 for(int i=2;i<sqrt(n);i++){
     if(n%i==0){
         cout<<"not prime";
         f=0;
         break;
     }
 }
 if(f==1){
     cout<<"Prime";
 }
    return 0;
}