// ============================================================
// SHOWS DATA
// The LAST show in this array is "Now Reviewing."
// Older shows appear in the All Shows browse panel.
//
// TO ADD A NEW SHOW:
//   1. Copy the template at the bottom of this file
//   2. Paste it at the END of the array, after the last }
//   3. Add a comma after the previous show's closing }
//   4. Fill in your data and save
//   The page updates automatically.
// ============================================================

const SHOWS = [
  {
    id: "derry-girls-s1",

    // -- Display info --
    title: "Derry Girls",
    season: "Season 1",
    episodeRange: "Episodes 01-03",
    channel: "Channel 4",
    year: "2018",
    genre: ["Comedy", "Drama"],
    status: "current",  // "current" shows the yellow badge in the browse menu

    // Short description under the show title
    desc: "Northern Ireland. 1994. Five teenagers. One Catholic girls' school. One ongoing geopolitical conflict in the background. Absolute chaos from minute one.",

    // One funny line shown on the browse card
    browseOneLiner: "Watched it. Got feelings. Was surprised about the feelings.",

    // Stats shown in the show header -- change labels and values to fit any show
    stats: [
      { label: "Episodes Reviewed", val: "01 - 03" },
      { label: "Dhruv's Avg Rating", val: "4.3 / 5" },
      { label: "Would Recommend?",   val: "Obviously" },
      { label: "Friendship at Risk?", val: "Maybe" },
    ],

    // Pull quote -- shown between the first and second episode
    pullQuote: "I came for a show. I got a whole situation.",
    pullCite:  "Dhruv, 10 minutes into episode one",

    // -- Episodes --
    // Pull quote always appears after episodes[0].
    // Each paragraph in review[] becomes its own <p>.
    episodes: [
      {
        num: "01",
        title: "Episode One",
        aka: "okay what is happening and why do i already love it",
        rating: 4,
        review: [
          "the accent hit me in the first thirty seconds and i had absolutely no fucking clue what was happening. just watching faces and going with vibes. the vibes were chaotic. i was in.",
          "Erin narrates her own life like she's writing a memoir about herself. she is a teenager. the memoir would be very dramatic and mostly wrong.",
        ],
      },
      {
        num: "02",
        title: "Episode Two",
        aka: "claire started apologising before anything even happened",
        rating: 4,
        review: [
          "accent comprehension improving. catching about 60% now. the 40% i'm missing is mostly Michelle, and honestly that's probably a good thing.",
          "Clare apologises before, during, and after doing a thing. you can see the apology loading on her face before she opens her mouth. she knows. she does it anyway. Orla was doing something in the background of a scene and i had to rewind it. still have no idea what the fuck it was.",
        ],
      },
      {
        num: "03",
        title: "Episode Three",
        aka: "this is the one. this is the one that got me.",
        rating: 5,
        review: [
          "three episodes in and i've stopped fighting that fucking fuckall-accent. just going with whatever i think i heard. probably right. probably.",
          "there's a moment near the end of this one where i paused it and just sat there. not going to tell you what it is. Clare apologised so many times in this episode that i started counting and then genuinely lost count, which felt like the correct response.",
        ],
      },
    ],

    // -- CTA section at the bottom of the page --
    ctaBody:    "Episodes 4 through 6 are on the way. More shows. More opinions. Zero qualifications.",
    ctaSignoff: "In order to get more reviews, stay hooked. That's the deal.",
  },

];


// ============================================================
// NEW SHOW TEMPLATE
// Copy everything between the dashes below, paste it into
// the SHOWS array above (after the last show's closing },
// with a comma between them), fill in your data, and save.
// ============================================================

/*
  {
    id: "show-name-s1",             // unique slug, no spaces (e.g. "succession-s1")
    title: "Show Title",
    season: "Season 1",
    episodeRange: "Episodes 01-03",
    channel: "Netflix",
    year: "2024",
    genre: ["Comedy", "Drama"],     // array of genre tags
    status: "current",              // "current" = yellow badge, anything else = grey

    desc: "One or two sentences about the show.",
    browseOneLiner: "One funny sentence about your reaction to it.",

    stats: [
      { label: "Episodes Reviewed", val: "01 - 03" },
      { label: "Dhruv's Avg Rating", val: "4 / 5" },
      { label: "Would Recommend?",   val: "Yes" },
      { label: "Your Custom Stat",   val: "Your Value" },
    ],

    pullQuote: "Something you said while watching.",
    pullCite:  "Dhruv, episode two, probably",

    episodes: [
      {
        num: "01",
        title: "Episode Title",
        aka: "your cheeky lowercase subtitle",
        rating: 4,
        review: [
          "First paragraph.",
          "Second paragraph.",
        ],
      },
      {
        num: "02",
        title: "Episode Title",
        aka: "your cheeky lowercase subtitle",
        rating: 3,
        review: [
          "Review paragraph.",
        ],
      },
    ],

    ctaBody:    "More episodes are on the way.",
    ctaSignoff: "Stay hooked. That's the deal.",
  },
*/
