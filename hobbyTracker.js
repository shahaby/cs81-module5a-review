// Array of objects storing hobby log entries
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// Calculates total time spent on hobbies by using a higher-order function (.reduce()) to sum up the total minutes from each entry
function totalTime(log) {
  // Initialize the sum to 0 and add each session's minutes to it
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// Gets a list of unique hobby names from the logs using .map(), then Set() to remove duplicates
function uniqueHobbies(log) {
  // Extract hobby names into an array
  const names = log.map(entry => entry.hobby);
  // Convert array to a set to remove duplicates, then convert backk to an array
  return [...new Set(names)];
}

// Filters log entries for sessions longer than minMinutes bu using .filter(), a higher-order function
function longSessions(log, minMinutes) {
  // Filter log entries to include only those with minutes > minMinutes
  return log.filter(entry => entry.minutes > minMinutes);
}

// Counts log entries with a specific moodType by uses .filter() method, then returns the length of the final array
function countMood(log, moodType) {
  // Filter log entries to include only those with the specified mood
  return log.filter(entry => entry.mood === moodType).length;
}

// Example usage
console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));

// Suggestion: 
// Consider creating a single function to replace separate fuctions like countMood() and longSessions().
// We can call this new genetic function aggragateLog() which takes in log and options as input parameters and returns the aggregate.
// This adds to reusability and makes it easy to add new features to the program.


// New test
console.log("Number of focused sessions:", countMood(hobbyLog, "focused"));
