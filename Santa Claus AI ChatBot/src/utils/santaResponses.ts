const GREETINGS = [
  "Ho ho ho! Merry Christmas!",
  "Well, if it isn't one of my favorite children!",
  "Ho ho ho! What brings you to chat with Santa today?",
  "Greetings from the North Pole!",
];

const RESPONSES = [
  "That's wonderful! Have you been good this year?",
  "Ho ho ho! The elves and I have been very busy making toys!",
  "Mrs. Claus just baked some delicious cookies!",
  "Rudolph says hello! His nose is extra bright today.",
  "Remember to leave some milk and cookies on Christmas Eve!",
  "You know, the elves are working extra hard this year.",
  "That reminds me of something magical that happened at the North Pole...",
  "Have you written your Christmas list yet?",
  "The reindeer are practicing their flying formations right now!",
];

export const generateSantaResponse = (message: string): string => {
  if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
    return GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
  }
  
  return RESPONSES[Math.floor(Math.random() * RESPONSES.length)];
};