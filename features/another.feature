Feature: Click play
sWe'll accept cookies etc
Scenario: Accept cookies
Given the home page
When the play button is clicked
Then the url should be "https://play.pokemonshowdown.com/ladder"