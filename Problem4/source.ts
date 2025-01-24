function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// Time Complexity: O(n)
// Space Complexity: O(1)


function sum_to_n_b(n: number): number {
    return n * (n + 1) / 2;
}
// Time Complexity: O(1)
// Space Complexity: O(1)


function sum_to_n_c(n: number): number {
    return sum_to_n_c(n - 1) + n;
}
// Time Complexity: O(n)
// Space Complexity: O(n)

