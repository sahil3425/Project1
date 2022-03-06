#include<iostream>
using namespace std;

int main(){
    int n;
    cin>>n;
    int reverse=0;
    while(n>0){
        int lastdi=n%10;
        n/=10;
        reverse=reverse*10+lastdi;
    }
cout<<reverse;
    return 0;
}