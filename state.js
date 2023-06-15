class Document {
  constructor() {
    this.state = new DraftState(this); // Set the initial state to DraftState
  }

  publish() {
    this.state.publish();
  }

  setState(state) {
    this.state = state;
  }
}

// Abstract State class
class DocumentState {
  constructor(document) {
    this.document = document;
  }

  publish() {
    throw new Error("publish() method must be implemented.");
  }
}

// Concrete state classes
class DraftState extends DocumentState {
  publish() {
    console.log(
      "This document needs to be reviewed before it can be published."
    );
    this.document.setState(new ModerationState(this.document));
  }
}

class ModerationState extends DocumentState {
  publish() {
    const currentUserRole = "admin"; // Example: get current user's role

    if (currentUserRole === "admin") {
      console.log(
        "This document is currently being reviewed and can now be published."
      );
      this.document.setState(new PublishedState(this.document));
    } else {
      console.log(
        "This document is currently being reviewed and cannot be published yet."
      );
    }
  }
}

class PublishedState extends DocumentState {
  publish() {
    console.log(
      "This document is already published and cannot be published again."
    );
  }
}

// Usage example
const document = new Document();

document.publish(); // Output: "This document needs to be reviewed before it can be published."

document.publish(); // Output: "This document is currently being reviewed and can now be published."

document.publish(); // Output: "This document is already published and cannot be published again."
