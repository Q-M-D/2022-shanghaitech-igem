#include<iostream>
using namespace std;

/**
 * @brief 
 * 
 * @param a a elemtent
 * @param b b element
 * @return int 
 */
int add(int a, int b)
{
    return a + b;
}
/**
 * @brief 
 * 
 * @return int 
 */
int main(){
    int a,b;
    std::cin>>a>>b;
    cout<<add(a,b);
}