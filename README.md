# Color with Number Example
## Set up
- Run `$ npm run firebase -- login`
- Run `$ npm run firebase -- use --add [YOUR_PROJECT]` (If you already set a project, just run `$ npm run firebase -- use [YOUR_PROJECT]`)
- Run `$ npm run deploy`

## Console of Dialogflow
- Make an intent of `color_with_number`
  - Add training phrases which express color and Number
  - Set entities for color and number
    - @sys.color entity is defined by `color` of parameter name
    - @sys.number entity is defined by `number` of parameter name
  - `color` and `number` parameters are set as `REQUIRED` each other, then you need to add some phrases to `PROMPTS`
  - At Responses > GOOGLE ASSISTANT, Click to check `Set this intent as end of conversation`
  - At Fulfillment, Click to check `Enable webhook call for this intent`
- Write a webhook url(deployed to firebase function) at Fulfillment

## Console of Actions on Google
- At SET UP > Languange, Click to check a languange you need
