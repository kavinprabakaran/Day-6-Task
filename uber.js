class UberPriceCalculator {
    constructor(distance, duration) {
        this.distance = distance;
        this.duration = duration;
    }

    static BASE_FARE = 2.5;
    static COST_PER_MILE = 1.5;
    static COST_PER_MINUTE = 0.2;

    calculatePrice() {
        const totalPrice = UberPriceCalculator.BASE_FARE +
                           (this.distance * UberPriceCalculator.COST_PER_MILE) +
                           (this.duration * UberPriceCalculator.COST_PER_MINUTE);
        return totalPrice;
    }
}

// Example usage:

// Create an Uber ride
const uberRide = new UberPriceCalculator(5, 15);

// Calculate the price
const ridePrice = uberRide.calculatePrice();

// Display the result
console.log(`Uber ride cost: $${ridePrice.toFixed(2)}`);
