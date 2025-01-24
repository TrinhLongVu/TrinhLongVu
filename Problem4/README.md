# Problem 4: Sum to N

## Problem Description
Write a function that calculates the sum of all integers from 1 to n (inclusive).

For example, if n = 5, the function should return 1 + 2 + 3 + 4 + 5 = 15.

## Solutions

### Solution A: Iterative Approach

```typescript
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
```

- **Time Complexity**: O(n) - We need to iterate through all numbers from 1 to n
- **Space Complexity**: O(1) - We only use a single variable to store the sum

### Solution B: Mathematical Formula

```typescript
function sum_to_n_b(n: number): number {
    return n * (n + 1) / 2;
}
```

- **Time Complexity**: O(1) - Direct calculation using the arithmetic sequence formula
- **Space Complexity**: O(1) - No additional space needed
- **Note**: This is the most efficient solution using the arithmetic sequence formula: Sn = n(n+1)/2

### Solution C: Recursive Approach
```typescript
function sum_to_n_c(n: number): number {
    if (n === 1) return 1;  // Base case
    return sum_to_n_c(n - 1) + n;
}
```
- **Time Complexity**: O(n) - We make n recursive calls
- **Space Complexity**: O(n) - The recursion stack will grow to size n

## Example Usage
```typescript
console.log(sum_to_n_a(5)); // Output: 15
console.log(sum_to_n_b(5)); // Output: 15
console.log(sum_to_n_c(5)); // Output: 15
```

## Comparison of Approaches
1. **Solution A** (Iterative):
   - Pros: Simple to understand and implement
   - Cons: Linear time complexity

2. **Solution B** (Mathematical):
   - Pros: Most efficient, constant time complexity
   - Cons: Requires knowledge of the mathematical formula

3. **Solution C** (Recursive):
   - Pros: Elegant and demonstrates recursive thinking
   - Cons: Uses more memory due to recursion stack, risk of stack overflow for large n

## Best Practice
For this particular problem, Solution B (Mathematical Formula) is the most efficient approach as it has O(1) time complexity and doesn't require iteration or recursion.