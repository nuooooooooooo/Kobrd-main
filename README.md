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
==>
int * n = malloc(sizeof(int)); //this works because malloc returns the address of the chunk of memory that was asked for, so it has to be stored into a pointer.
*Best practice with malloc* :
if (arr == NULL){
return 1;
} // this prevents the program from crashing if the computer ran out of memory because of malloc

==> realloc :
int * list = malloc(3* sizeof(int));
int * tmp = realloc(list, 4 * sizeof(int));

## Linked lists
typedef struct node
{
    int number;
    struct node * next;
} node;

`node * n = malloc(sizeof(node));` //setting memory for each node

`(*n).number = 2;` // giving a value to a node, the parentheses are there for order of operations so the compiler knows it must first go to the address of n and then access the number field and set it to 2, the line above can also be written as `n -> number = 2;`

`n->next = NULL;` //
