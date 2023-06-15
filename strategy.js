// Abstract strategy class
class RouteStrategy {
  buildRoute(start, end) {
    throw new Error("buildRoute() method must be implemented.");
  }
}

// Concrete strategy classes
class RoadRouteStrategy extends RouteStrategy {
  buildRoute(start, end) {
    console.log(`Building road route from ${start} to ${end}.`);
    // Logic to build road route
  }
}

class WalkingRouteStrategy extends RouteStrategy {
  buildRoute(start, end) {
    console.log(`Building walking route from ${start} to ${end}.`);
    // Logic to build walking route
  }
}

class PublicTransportRouteStrategy extends RouteStrategy {
  buildRoute(start, end) {
    console.log(`Building public transport route from ${start} to ${end}.`);
    // Logic to build public transport route
  }
}

// Context class
class Navigator {
  constructor() {
    this.routeStrategy = null;
  }

  setRouteStrategy(strategy) {
    this.routeStrategy = strategy;
  }

  buildRoute(start, end) {
    if (!this.routeStrategy) {
      throw new Error("Route strategy is not set.");
    }

    this.routeStrategy.buildRoute(start, end);
  }
}

// Usage example
const navigator = new Navigator();

navigator.setRouteStrategy(new RoadRouteStrategy());
navigator.buildRoute("Start location", "End location"); // Output: "Building road route from Start location to End location."

navigator.setRouteStrategy(new WalkingRouteStrategy());
navigator.buildRoute("Start location", "End location"); // Output: "Building walking route from Start location to End location."

navigator.setRouteStrategy(new PublicTransportRouteStrategy());
navigator.buildRoute("Start location", "End location"); // Output: "Building public transport route from Start location to End location."
