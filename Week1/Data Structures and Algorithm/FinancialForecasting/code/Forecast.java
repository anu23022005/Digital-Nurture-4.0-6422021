public class Forecast {

    public static double predictFutureValue(double principal, double rate, int years) {
        if (years == 0) {
            return principal;
        }
        return predictFutureValue(principal, rate, years - 1) * (1 + rate);
    }

    public static double predictWithMemo(double principal, double rate, int years, Double[] memo) {
        if (years == 0) return principal;
        if (memo[years] != null) return memo[years];
        memo[years] = predictWithMemo(principal, rate, years - 1, memo) * (1 + rate);
        return memo[years];
    }
}
