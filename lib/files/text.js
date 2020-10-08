module.exports = {
  humans: ()=>{
  return `# humanstxt.org/
# The humans responsible & technology colophon

# TEAM => repear for each one in the team

<Your title>: <Your name>.
Site: <email, link to a contact form, etc.>
Twitter: <your Twitter username>

# THANKS

Name: <name or url>

# TECHNOLOGY COLOPHON

    HTML5, CSS3
    jQuery, Popper.js, Bootstrap

# SITE

Last update: ${new Date()}
Standards: /* Standarts you adopt in the project. Eg: HTML5, CSS3, ECMAScript6 */
Components: /* Frameworks and stuff used to build the site. Eg: jquery, bootstrap */
Software: /* Software used to create the site. Eg: sublime text, google chrome, btgen */`
  },
  robots: ()=>{
    return `# www.robotstxt.org/

# Allow crawling of all content
User-agent: *
Disallow:
	`
  },
  simpleGDD: ()=>{
    return `# One-page design document
*Important:*

- This template was created and shared originally by Game Dev Underground, <a href="https://www.youtube.com/channel/UC_hwKJdF3KRAy4QIaiCSMgQ">youtube channel</a><a href="https://www.gdu.io/">official website</a>.
- The original template <a href="https://docs.google.com/document/d/1npEvqcMZSp0IX2hWw6Qq0WqJVfmVqS_YOGFWnnwfh-A/edit#">here</a>.

### Explanation

This is a gdd (game design document) template, which is a powerfull tool to start creating a game.
------

# Template

## Game Identity / Mantra:

List your single sentence description of the game that you will use to guide design decisions. (Example: Stylized action platformer about a meatball fighting the dinner table.)

## Design Pillars:

List up to 3 words/phrases that convey the feeling or emotion you want the player to experience. (Example: Fast. Action-packed. Mayhem.)

## Genre/Story/Mechanics Summary:

List what the game is from a gameplay and/or story perspective. (Example: This game uses a unique swinging rope mechanic to tell a story about what it means to be a meatball...)

## Features:

List the cool features or unique elements that you want to include in your game.

## Interface:

List the player input method, the controls, and how the player interacts with your game.

## Art Style:

Include references to lots of images and games that have a similar aesthetic to what you're trying to achieve.
Music/Sound:
Include links to music and sound design similar to What you're trying to achieve. You can also list the emotional responses that the sound should invoke in the player.

## Development Roadmap / Launch Criteria:

*Platform:* Steam/Google Play/iOS/Web.
*Audience:* Age/gender/interests.
*Milestone 1:* Mechanics complete - 0/0/00
*Milestone 2:* Boss fights complete - 0/0/00
*Milestone 3:* Levels complete -  0/0/00
*Milestone 4:* Polish complete - 0/0/00
---------------------------
Launch Day: 0/0/00

------
Special thanks to Josehzz. Made with love by http://gdu.io
© 2017 Game Dev Underground. Free to use/modify/distribute under CC 4.0.
`
  },
}