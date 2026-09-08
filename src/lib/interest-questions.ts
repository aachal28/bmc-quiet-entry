export type Question =
  | {
      kind: "text";
      field: string;
      title: string;
      subtitle?: string;
      placeholder: string;
      inputType?: "text" | "tel";
      optional?: boolean;
      multiline?: boolean;
    }
  | {
      kind: "single";
      field: string;
      title: string;
      subtitle?: string;
      options: string[];
    }
  | {
      kind: "multi";
      field: string;
      title: string;
      subtitle?: string;
      options: string[];
      exactly?: number;
    };

export const questions: Question[] = [
  {
    kind: "text",
    field: "name",
    title: "Your name",
    placeholder: "Enter your name",
  },
  {
    kind: "text",
    field: "phone",
    title: "Phone number",
    placeholder: "Enter your phone number",
    inputType: "tel",
  },
  {
    kind: "single",
    field: "heard_about",
    title: "Where did you hear about us?",
    options: ["Instagram", "A friend", "Someone who trains here", "Other"],
  },
  {
    kind: "single",
    field: "familiarity",
    title: "How familiar are you with what we do?",
    options: [
      "I've heard quite a bit about it",
      "I know a little",
      "Not really — I'm just curious",
    ],
  },
  {
    kind: "multi",
    field: "six_month_wins",
    title: "Six months in, what would feel like a real win?",
    subtitle: "Pick your top 2.",
    exactly: 2,
    options: [
      "I can do things with my body I couldn't do before",
      "I move better and have more control over my body",
      "I feel noticeably stronger",
      "My lifting numbers have gone up",
      "I look noticeably different",
    ],
  },
  {
    kind: "single",
    field: "patience",
    title:
      "How patient would you say you are with the process of getting good at something?",
    options: [
      "Very — that's part of the fun",
      "Pretty patient if I can see progress",
      "I get bored if things move too slowly",
      "Honestly, not very",
    ],
  },
  {
    kind: "multi",
    field: "current_training",
    title: "What does training look like for you right now?",
    subtitle: "Pick as many as apply.",
    options: [
      "Mostly gym / lifting",
      "Calisthenics or bodyweight training",
      "Yoga",
      "Pilates",
      "Classes / group training",
      "Sport",
      "A mix of things",
      "I'm pretty new to training",
    ],
  },
  {
    kind: "single",
    field: "preferred_schedule",
    title: "Our members train 3 times a week. Which schedule would work best for you?",
    options: [
      "Monday / Wednesday / Friday",
      "Tuesday / Thursday / Saturday",
      "Either works",
      "Neither works consistently for me",
    ],
  },
  {
    kind: "single",
    field: "preferred_time",
    title: "When do you usually prefer to train?",
    options: ["Early morning", "Late morning", "Evening", "I'm flexible"],
  },
  {
    kind: "single",
    field: "quarterly_commitment",
    title:
      "Memberships run quarterly, 3 sessions a week, with a 2 week extra buffer to make up any that you miss. Does that work for you?",
    options: [
      "Yes",
      "Most likely",
      "I travel often, so I may need more flexibility",
      "Probably not",
    ],
  },
  {
    kind: "text",
    field: "notes",
    title: "Anything we should know before we reach out?",
    subtitle:
      "Injuries, travel, schedule quirks, or anything else that might affect how you train.",
    placeholder: "Optional",
    optional: true,
    multiline: true,
  },
];
