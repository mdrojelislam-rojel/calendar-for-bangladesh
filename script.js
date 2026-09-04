// Time zone configurations
const timeZones = {
    dhaka: 'Asia/Dhaka',
    newyork: 'America/New_York',
    london: 'Europe/London',
    tokyo: 'Asia/Tokyo',
    sydney: 'Australia/Sydney',
    losangeles: 'America/Los_Angeles'
};

// Function to format time in 12-hour format
function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Function to get current time in specific timezone
function getTimeInTimeZone(timezone) {
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    
    const parts = formatter.formatToParts(new Date());
    const timeObject = {};
    
    parts.forEach(part => {
        if (part.type !== 'literal') {
            timeObject[part.type] = part.value;
        }
    });
    
    return `${timeObject.hour}:${timeObject.minute}:${timeObject.second}`;
}

// Function to update all clocks
function updateClocks() {
    Object.entries(timeZones).forEach(([id, timezone]) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = getTimeInTimeZone(timezone);
        }
    });
}

// Update clocks immediately
updateClocks();

// Update clocks every second
setInterval(updateClocks, 1000);

// Optional: Add date display
document.addEventListener('DOMContentLoaded', function() {
    // You can add additional features here
    console.log('Digital Clock App Loaded');
});
