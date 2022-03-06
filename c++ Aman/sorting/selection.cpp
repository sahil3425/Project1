#include<iostream>
using namespace std;
int selection(int a[],int n){
    for(int i=0;i<n-1;i++){
        for(int j=i+1;j<n;j++){
            if(a[i]>a[j]){
                int temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    for(int i=0;i<n;i++){
        cout<<a[i];
    }
}
int bubbleSort(int a[],int n){
    for(int i=0;i<n-1;i++){
        for(int j=0;j<n-i-1;j++){
            if(a[j]>a[j+1]){
               int temp=a[j];
               a[j]=a[j+1];
               a[j+1]=temp;
            }
        }
    }

}
int insertionSort(int a[],int n){
    for(int i=1;i<n;i++){
        int j=i-1;
        int counter=a[i];
        while(counter<a[j]&&j>=0){
            a[j]=a[j+1];
            j--;
        }
        a[j+1]=counter;

    }
}
int main(){
    int a[25],n;
    cin>>n;
    for(int i=0;i<n;i++)
    cin>>a[i];
    
    insertionSort(a,n);

    return 0;
}