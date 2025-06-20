public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Book", "Stationery"),
            new Product(104, "Camera", "Electronics"),
            new Product(105, "Pen", "Stationery")
        };

        System.out.println("Linear Search for 'Book':");
        Product result1 = SearchService.linearSearch(products, "Book");
        System.out.println(result1 != null ? result1 : "Product not found");

        System.out.println("Binary Search for 'Camera':");
        Product result2 = SearchService.binarySearch(products, "Camera");
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}
