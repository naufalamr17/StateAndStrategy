class Navigator {
  buildRoute(start, end, routeType) {
    switch (routeType) {
      case "road":
        console.log(`Building road route from ${start} to ${end}.`);
        // Logic to build road route
        break;
      case "walking":
        console.log(`Building walking route from ${start} to ${end}.`);
        // Logic to build walking route
        break;
      case "publicTransport":
        console.log(`Building public transport route from ${start} to ${end}.`);
        // Logic to build public transport route
        break;
      default:
        throw new Error("Invalid route type.");
    }
  }
}

// Usage example
const navigator = new Navigator();

navigator.buildRoute("Start location", "End location", "road"); // Output: "Building road route from Start location to End location."
navigator.buildRoute("Start location", "End location", "walking"); // Output: "Building walking route from Start location to End location."
navigator.buildRoute("Start location", "End location", "publicTransport"); // Output: "Building public transport route from Start location to End location."
