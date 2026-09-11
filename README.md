# BMC Movement Studio

Build a very minimal, premium, mobile-first one-page website for Bandra Movement Club (BMC), a private members-only movement studio in Bandra, Mumbai.

IMPORTANT:
This is NOT a conventional gym or fitness website. Do not add marketing sections, testimonials, pricing, services, gallery, team sections, navigation menus, or sales-funnel content.

The entire experience should feel understated, restrained, quiet, slightly enigmatic, editorial, and premium.

Use the uploaded BMC logo exactly as provided. Do not redesign, recreate, modify, or replace the logo.

CORE EXPERIENCE

The website should have only 3 states:

Landing screen

One-question-at-a-time interest form

Thank-you screen

The simplicity is intentional.

1. LANDING SCREEN

When someone first visits the website, show an almost empty full-screen page.

Background:

Warm off-white / raw concrete texture

Very subtle texture, almost imperceptible

No strong pattern

No gradients

No photographic background

Center the BMC logo horizontally and vertically.

Directly underneath the logo, place one simple text button:

"Show interest"

The button should be understated but clearly clickable.

Suggested layout:

[large empty space]

         BMC LOGO

       Show interest


[large empty space]

Do NOT add:

Navbar

Hero headline

About text

Gym imagery

CTA sections

Pricing

Testimonials

Social media section

Footer navigation

Extra content

The logo should be the main visual.

2. SHOW INTEREST INTERACTION

When the user clicks "Show interest", transition into the interest form.

Keep the same background, typography, spacing, and visual language.

The transition should be extremely subtle:

simple fade

slight opacity transition

approximately 200–300ms

no dramatic sliding animation

no bouncing

no parallax

no elaborate animation

The form should feel like a continuation of the landing page, NOT like a separate generic form.

3. ONE QUESTION AT A TIME FORM

The form must display ONE question at a time.

Do NOT show all questions simultaneously.

The experience should feel calm and focused.

At the top of the form show a very subtle progress indicator:

01 / 11
02 / 11
03 / 11
etc.

Also include a subtle Back control where appropriate.

Use large, comfortable typography and tap targets because most visitors will use mobile phones.

Example:

01 / 11

Your name

[ Enter your name ]

                     Next →


Keep plenty of empty space around the question.

Buttons should be minimal black typography / black fill where appropriate.

FORM QUESTIONS

There are 11 total fields/questions in the supplied content. Do not incorrectly label the form as 9 questions.

Question 1

Your name

Input:
Short answer

Required.

Question 2

Phone number

Input:
Short answer / telephone input

Required.

Question 3

Where did you hear about us?

Single selection:

Instagram

A friend

Someone who trains here

Other

Question 4

How familiar are you with what we do?

Single selection:

I've heard quite a bit about it

I know a little

Not really — I'm just curious

Question 5

Six months in, what would feel like a real win?

Subtitle:

Pick your top 2.

Allow the user to select EXACTLY two options.

Options:

I can do things with my body I couldn't do before

I move better and have more control over my body

I feel noticeably stronger

My lifting numbers have gone up

I look noticeably different

Prevent proceeding until two choices have been selected.

Question 6

How patient would you say you are with the process of getting good at something?

Single selection:

Very — that's part of the fun

Pretty patient if I can see progress

I get bored if things move too slowly

Honestly, not very

Question 7

What does training look like for you right now?

Subtitle:

Pick as many as apply.

Allow MULTIPLE selections.

Options:

Mostly gym / lifting

Calisthenics or bodyweight training

Yoga

Pilates

Classes / group training

Sport

A mix of things

I'm pretty new to training

Question 8

Our members train 3 times a week. Which schedule would work best for you?

Single selection:

Monday / Wednesday / Friday

Tuesday / Thursday / Saturday

Either works

Neither works consistently for me

Question 9

When do you usually prefer to train?

Single selection:

Early morning

Late morning

Evening

I'm flexible

Question 10

Memberships run quarterly, 3 sessions a week, with a 2 week extra buffer to make up any that you miss. Does that work for you?

Single selection:

Yes

Most likely

I travel often, so I may need more flexibility

Probably not

Question 11

Anything we should know before we reach out?

Use this supporting text:

"Injuries, travel, schedule quirks, or anything else that might affect how you train."

Input:
Optional short answer / textarea.

Clearly indicate that this question is optional.

FORM UI

For text inputs:

Minimal border

Off-white background

Black text

No rounded modern SaaS-style input boxes

No bright focus colours

For selections:
Use very simple circles or understated selection controls for single choice.
Use simple square checkboxes for multi-select.

Selected state should be obvious but restrained.

Avoid:

colourful selected states

large cards

shadows

gradients

glassmorphism

excessive rounded corners

generic SaaS form styling

The design should feel closer to a high-end editorial/private members club than a web application.

NAVIGATION BETWEEN QUESTIONS

Each question should have:

Back
Next →

On the first question, Back can be hidden.

The Next button should only proceed when required information has been entered.

Preserve previously entered answers when navigating backward.

Do not reload the page between questions.

Keep the transition subtle and fast.

MOBILE-FIRST DESIGN

Mobile is the PRIMARY experience.

Design for approximately 375–430px wide screens first.

The form must feel excellent on a phone.

Requirements:

No horizontal scrolling

Comfortable touch targets

Large readable question text

Large selection areas

Comfortable spacing

Buttons easy to reach

Inputs must work correctly with the mobile keyboard

Long questions should wrap naturally

Long options should remain readable

No cramped layouts

Then adapt the same design elegantly for desktop.

Do not create a completely different desktop design.

DESKTOP DESIGN

On desktop, preserve the same minimal aesthetic.

Keep the form relatively narrow and centered rather than stretching it across the entire screen.

There should be substantial negative space.

The website should feel intentionally sparse.

3. THANK-YOU SCREEN

After the final form submission, replace the form with a minimal thank-you screen.

Display exactly:

"Thank you for your interest, if we have a spot for you, someone from our team will reach out!"

Use simple typography and generous whitespace.

No additional CTA.

No "Book a session".

No Instagram button.

No "Back to home".

No sales message.

The experience should simply end there.

VISUAL DIRECTION

Overall aesthetic:

Minimal

Quiet

Premium

Editorial

Restrained

Slightly enigmatic

Raw

Architectural

Private members-club feeling

Background:
Warm off-white / raw concrete.

Typography:
Black / near-black.

Use a refined editorial serif or clean sophisticated sans-serif combination if appropriate, but keep typography restrained.

Avoid typical fitness typography.

No bright colours.

No gradients.

No stock images.

No fitness photography.

No unnecessary illustrations.

No decorative icons.

No excessive shadows.

No excessive rounded cards.

No glassmorphism.

No flashy effects.

No elaborate animation.

No conventional gym website patterns.

RESPONSIVE BEHAVIOUR

The website must work correctly on:

Mobile

Tablet

Desktop

Mobile should remain the priority.

The landing screen should maintain the logo and "Show interest" relationship without unnecessary content.

FUNCTIONAL REQUIREMENTS

Implement the complete working interaction.

Landing screen:
Logo → Show interest → Form

Form:
Question 1 → Question 2 → ... → Question 11 → Submit

Submission:
Submit → Thank-you screen

All answers must be collected as one submission.

Required fields must be validated.

Question 5 must enforce exactly 2 selections.

Question 7 must allow multiple selections.

Question 11 is optional.

Do not lose answers when moving backward.

FORM SUBMISSION

Structure the form data clearly so it can later be connected to the client's preferred submission destination/email.

Use semantic field names.

Do not create fake submission behaviour.

Do not show a fake success message before the form is actually submitted.

The final thank-you screen should appear only after a successful submission.

CODE QUALITY

Build this as a clean, production-ready responsive website.

Keep the code simple and maintainable.

Do not add unnecessary dependencies.

Do not create unnecessary components or features.

Do not add content that wasn't requested.

Do not invent additional brand messaging.

The goal is restraint.

When in doubt, REMOVE something rather than adding it.

FINAL DESIGN TEST

Before considering the website complete, ask:

"Does this look like a conventional gym website?"

If yes, simplify it.

"Does anything feel like a sales funnel?"

If yes, remove it.

"Is there unnecessary content?"

If yes, remove it.

"Does the mobile experience feel effortless?"

If no, fix it.

The final result should feel like a quiet digital front door to a private movement studio — not a marketing website.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/68c8b75e-64cd-4e96-a72c-166e13b450ec).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
