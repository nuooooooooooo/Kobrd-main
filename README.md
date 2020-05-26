# CS 50
## Notes on pointers from CS50
```c
int a = 4;
int * p = &a; // p is a pointer whose value is the address of a (pointers store addresses)
p = &a; //same as above, except p has already been declared so no need for int  *
*p = a; //we dereference p to get the value of a
```

==> a solution i provided for the challenge on pointers in C for hacker rank
```c
void update(int *a,int *b) {
    int tmpa, tmpb; //create temp ints to store a and b
    tmpa = (*a + *b); //tmpa is equal to the value stored at a plus b
    tmpb = abs(*a - *b); //tmpa is equal to the absolute difference of the values stored at b and a
    *a = tmpa; // the value stored at a is updated with the new value from tmpa
    *b = tmpb; // same as above with b
      
}

int main() {
    int a, b;
    int *pa = &a, *pb = &b;
    
    scanf("%d %d", &a, &b);
    update(pa, pb);
    printf("%d\n%d", a, b);

    return 0;
    ```
