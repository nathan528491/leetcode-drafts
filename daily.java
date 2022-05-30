/**
 * @name 29. Divide Two Integers
 * @status Wrong Answer
 */
class Solution {
    public int divide(int dividend, int divisor) {
        boolean negative = false;
        if (dividend > 0 ^ divisor > 0) {
            negative = true;
        }
        int res = 0;
        dividend = Math.abs(dividend);
        divisor = Math.abs(divisor);
        System.out.println(dividend);
        while (dividend >= divisor) {
            dividend -= divisor;
            res++;
        }
        return negative ? -res : res;
    }
}