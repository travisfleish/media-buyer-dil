export interface TimelineSection {
  id: string;
  time: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  highlight?: string;
  geniusMoment?: string;
  marketScale?: string;
}

export const timelineSections: TimelineSection[] = [
  {
    id: "client-direction",
    time: "9:00 AM",
    title: "Client Direction and Media Plan",
    paragraphs: [
      "DoorDash sends updated priorities to the agency: increase incremental orders in New York, Chicago, and Los Angeles, drive app downloads, and reach highly engaged sports fans — especially NFL viewers during live games.",
      "The agency's planning team translates this into a media plan with:",
    ],
    bullets: [
      "Budgets by market",
      "A mix of streaming TV (CTV) and mobile",
      "Target audiences, including NFL fans",
      "Performance targets such as cost per order",
    ],
    highlight:
      "The buyer reviews the plan, confirms the focus on NFL programming, and moves into execution.",
    marketScale: "$1T in global digital ad spend in 2025",
  },
  {
    id: "open-trade-desk",
    time: "9:30 AM",
    title: "Open Media Buying & Planning Dashboard",
    paragraphs: [
      "The buyer logs into The Trade Desk, the platform where DoorDash's digital ads are purchased and managed.",
      "Inside the dashboard, the buyer sees how much money is being spent in each market, which streaming and mobile ads are running, what each is costing per order, and which are meeting performance goals.",
      "In New York, the streaming ads are costing too much per order. In Chicago, the mobile ads are performing better than expected.",
      "Streaming ad space is accessed inside The Trade Desk through codes called Deal IDs. A Deal ID gives the buyer access to a specific group of ad placements — such as ads on a particular streaming service or during live NFL broadcasts.",
    ],
    marketScale: "$33M per day transacted on The Trade Desk",
    highlight:
      "The buyer sees exactly how much budget is assigned to each Deal ID and adjusts spending accordingly.",
  },
  {
    id: "genius-deal-id",
    time: "11:00 AM",
    title: "Add a Genius Sports Curated NFL Deal ID",
    paragraphs: [
      "Inside The Trade Desk's Private Marketplace section, the buyer reviews available streaming options. These are made available through Magnite, a platform that connects streaming services to buying systems like The Trade Desk.",
      "Among the options is a Genius Sports curated NFL Deal ID.",
      "This Deal ID is a bundled package. It includes:",
    ],
    bullets: [
      "Premium NFL streaming ad inventory distributed through Magnite",
      "NFL audience targeting built from deterministic fan data inside the Genius Fan Graph",
    ],
    marketScale: "$1.8B spend per day on SSP/DSP programmatic buys",
    geniusMoment:
      "The ad space and the NFL audience are packaged together inside one Deal ID. Because DoorDash wants to reach NFL fans during live games, the buyer adds the Genius Sports curated NFL Deal ID to the campaign and allocates budget to it, reducing spend on a broader streaming option.",
  },
  {
    id: "launch-market",
    time: "2:00 PM",
    title: "Launch a New Market",
    paragraphs: [
      "DoorDash launches a new campaign in Miami.",
      "Inside The Trade Desk, the buyer:",
    ],
    bullets: [
      "Sets the campaign budget and dates",
      "Selects streaming TV and mobile",
      "Chooses approved Deal IDs from the agency's internal library",
    ],
    marketScale: "$4M per day is spent on digital NFL media buys",
    geniusMoment:
      "The buyer selects the Genius Sports curated NFL Deal ID. Because it already includes both premium NFL inventory and official NFL audience targeting, no additional setup is required. The campaign goes live.",
  },
  {
    id: "performance-allocation",
    time: "4:00 PM",
    title: "Performance Drives Allocation",
    paragraphs: [
      "As performance data updates in real time, the Genius Sports curated NFL Deal ID begins delivering a lower cost per order than broader streaming options.",
      "The buyer monitors the results and adjusts guardrails if needed, but the platform handles most of the real-time allocation.",
    ],
    geniusMoment:
      "Because the campaign is set to optimize toward cost per order, The Trade Desk automatically shifts more budget toward the Genius Sports NFL Deal ID. Over time, it becomes a standard part of DoorDash's sports media plan across markets.",
  },
  {
    id: "what-this-means",
    time: "The Takeaway",
    title: "What This Means",
    paragraphs: [
      "For the media buyer, the Genius Sports curated NFL Deal ID is not a one-time addition. It becomes a pre-approved option inside the agency's deal library, available every time a sports campaign is launched.",
      "When it performs, budget flows toward it automatically.",
    ],
    geniusMoment:
      "Over time, that makes Genius part of the daily operating infrastructure of sports advertising inside The Trade Desk. This process repeats every day, across markets, across campaigns, and across clients.",
  },
];
