public class Main {
    public static void main(String[] args) {
        double principal = 10000; 
        double rate = 0.10;       
        int years = 5;

        System.out.println(" Recursive Forecast (5 years):");
        double futureValue = Forecast.predictFutureValue(principal, rate, years);
        System.out.printf("Future Value after %d years: Rs.%.2f\n", years, futureValue);

        System.out.println("\n Optimized Recursive Forecast:");
        Double[] memo = new Double[years + 1];
        double futureValueOptimized = Forecast.predictWithMemo(principal, rate, years, memo);
        System.out.printf("Memoized Future Value after %d years: Rs.%.2f\n", years, futureValueOptimized);
    }
}