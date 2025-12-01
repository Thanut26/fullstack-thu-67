function createLogEntry(message) {
    const now = Date();
    const timestamp = now.toLocaleTimeString('th-TH');

    const eventId = Math.random().toString(16).substring(2, 10).toUpperCase();

    const logMessage = message.toUpperCase();

    return `[${timestamp}] [${eventId}] - ${logMessage}`;
}

const log = createLogEntry("User login successful");
console.log(log);