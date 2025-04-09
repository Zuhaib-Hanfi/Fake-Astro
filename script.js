const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
];
//For days
const emotionalCompliments = [
    "You have a beautiful soul.",
    "Your presence brings peace.",
    "You make people feel safe and valued.",
    "Your smile is comforting.",
    "You radiate warmth and kindness.",
    "You listen with your heart.",
    "Your words heal more than you know.",
    "You're a light in dark times.",
    "You make the world softer and brighter.",
    "You're incredibly thoughtful.",
    "You give others hope.",
    "Your empathy is powerful.",
    "You have a calming energy.",
    "You’re a breath of fresh air.",
    "You make people feel seen and heard.",
    "You bring out the best in people.",
    "You're stronger than you realize.",
    "You have a heart that shines.",
    "You always know how to lift others up.",
    "You’re an emotional anchor.",
    "You inspire gentle strength.",
    "You have a gift for making others feel understood.",
    "You’re emotionally intelligent and it shows.",
    "Your presence is comforting and steady.",
    "You nurture without expecting anything in return.",
    "You're emotionally resilient and it’s admirable.",
    "You care deeply, and that’s rare.",
    "Your kindness stays with people.",
    "You make others feel less alone.",
    "You’re a quiet force of love.",
    "The world needs more hearts like yours."
];
//For month
const victimCardStyleCompliments = [
    "You always do good to others, but others don’t treat you well.",
    "You care so deeply, yet you're always the one getting hurt.",
    "You give your all, and still, people take you for granted.",
    "You're too pure for this world that doesn’t understand you.",
    "You always forgive, even when they don’t deserve it.",
    "You stay loyal, even when people don’t appreciate your loyalty.",
    "You always put others first, and that’s why they walk over you.",
    "You spread kindness, but receive silence in return.",
    "Your heart is gold, but people treat it like it’s nothing.",
    "You’re the type to check on others while you're breaking inside.",
    "You go out of your way to help, and they barely say thanks.",
    "You suffer in silence just to keep everyone else okay.",
    "You show up for people who wouldn’t even notice if you disappeared.",
    "You love people who only think of themselves.",
    "You always give second chances, even when the first hurt deeply.",
    "You hide your pain so well, no one even knows you’re hurting.",
    "You deserve the world, but keep getting less than the bare minimum.",
    "You care too much in a world that doesn’t care enough.",
    "You’re the one who holds everyone together, yet you feel alone.",
    "You’ve been the strong one for so long, no one asks if you're okay."
];
//Suggestions
const superstitionSuggestions = [
    "To make your day better, feed 2 black street dogs.",
    "Offer water to a peepal tree before 9 AM for peace of mind.",
    "Place a small coin under your pillow tonight to avoid bad dreams.",
    "Light a diya with mustard oil near your entrance for protection.",
    "Feed birds before eating anything yourself for good luck.",
    "Don’t sweep your house after sunset — it drives away prosperity.",
    "Keep a lemon and 7 green chilies hanging outside your door for nazar protection.",
    "Donate something white on Friday for emotional clarity.",
    "Avoid cutting nails or hair after sunset — it invites negativity.",
    "Place a glass of water near your bed to absorb negative energy overnight.",
    "Burn camphor in the evening to cleanse your surroundings.",
    "Start your day by looking at your palms — fortune lies in your hands.",
    "Avoid saying negative words first thing in the morning.",
    "If a crow caws near your home, expect guests or news soon.",
    "Apply a small black dot behind your ear to avoid nazar.",
    "Keep rock salt in corners of your room to absorb bad vibes.",
    "Don’t leave slippers upside down — it brings tension.",
    "Avoid eating non-veg on Tuesdays to reduce anger and aggression.",
    "Offer jaggery and chana to Lord Hanuman on Saturdays for strength.",
    "Sleep with your head facing east for better dreams.",
    "Give water to the sun with a copper vessel for energy.",
    "Avoid lending money on Wednesdays — it doesn’t come back.",
    "Tie a black thread on your left ankle to block negative energy.",
    "Keep a mirror facing your workspace to reflect away negativity.",
    "Chant or think something positive for 11 seconds before leaving the house.",
    "Don’t look back once you’ve stepped out for something important.",
    "Touch something wooden after saying something hopeful.",
    "If your right eye twitches, expect something good to happen.",
    "Offer sweets to children on Thursdays for blessings.",
    "Drop a few rice grains in your wallet to attract abundance."
];
//Predictions
const futurePredictions = [
    "You will become a crorepati sooner than you think.",
    "A big opportunity is coming your way — don’t miss it.",
    "Someone you haven't met yet will change your life.",
    "Your dream job is just around the corner.",
    "You’ll receive unexpected money from an unknown source.",
    "Your talent will finally be recognized by the world.",
    "Love will find you when you least expect it.",
    "You will travel to a place you’ve always wanted to go.",
    "A wish you made silently will come true this month.",
    "Fame will knock on your door — be ready to shine.",
    "You’ll reconnect with someone from your past in a magical way.",
    "Your hard work is about to pay off in ways you can’t imagine.",
    "You will inspire someone to completely change their life.",
    "Your future self is already proud of how far you've come.",
    "You’re destined for greatness — just stay consistent.",
    "A new beginning is coming — embrace the unknown.",
    "Luck will be in your favor very soon.",
    "Your presence will light up rooms and hearts.",
    "You will soon discover a hidden talent within yourself.",
    "Everything you’ve been waiting for is aligning in your favor."
];


const form = document.querySelector('form');


const submitButton = document.getElementById('submit');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    const sign = zodiacSigns[month - 1];
    const forDays = emotionalCompliments[day - 1];
    const forMonth = victimCardStyleCompliments[month - 1];
    const Suggestions = superstitionSuggestions[day - 1];
    const predictions = futurePredictions[year - 2001];

    const res = document.getElementById('result');

    res.innerHTML = `Hey ${name} Your Zodiac Sign is: ${sign} || ${forDays} || ${forMonth}\n || Suggestion for you is: ${Suggestions} || Final prediction is: ${predictions}`;
});
