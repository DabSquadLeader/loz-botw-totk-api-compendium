# BotW/TotK Compendium

## Overview

The **BotW/TotK Compendium** is a web application that provides information about items, creatures, and other in-game elements from *The Legend of Zelda: Breath of the Wild* (BotW) and *Tears of the Kingdom* (TotK). Users can select a game, search for specific entities, and retrieve detailed data from an API to enhance their gameplay experience. The compendium features an engaging design with custom fonts and background music for an immersive feel.

## Features

- **Game Selection**: Choose between *Breath of the Wild* and *Tears of the Kingdom* using a dropdown menu.
- **Search Functionality**: Enter the name of an item, creature, or other entity to fetch relevant data from the compendium.
- **Dynamic Data Display**: The fetched information is dynamically displayed on the page, updating with each search.
- **Custom Fonts**: Utilizes three distinct custom fonts, `Hylia`, `TriforceSerif`, and `LegendSerif`, to create a thematic user interface.
- **Background Music Toggle**: Enjoy in-game styled background music while browsing the compendium.
- **Responsive Design**: The layout adapts to various screen sizes, ensuring a smooth experience on both mobile and desktop devices.

## Files

1. **index.html**: Provides the structure for the web page:
   - Links to external resources like fonts, the background image, and the React application.
   - Div container for rendering the app's components.

2. **App.css**: Contains all styling for the compendium:
   - Custom background image and thematic fonts.
   - Flexbox-based layout for responsiveness.
   - Hover effects, transitions, and media queries for different screen sizes.

3. **App.js**: The main component of the web application:
   - Manages the game selection and search functionality.
   - Integrates with the compendium API to fetch and display data.
   - Renders components like `Title`, `Dropdown`, `Entry`, `Info`, and `Music`.

4. **Dropdown.js**: Implements the dropdown menu for game selection:
   - Allows users to choose between *Breath of the Wild* and *Tears of the Kingdom* respectively.
   - Updates the selected game state in `App.js`.

5. **Entry.js**: Handles user input for searching the compendium:
   - Accepts a name and triggers the API call to fetch data.

6. **Info.js**: Displays the information fetched from the compendium:
   - Dynamically updates based on the user’s search input.

7. **Music.js**: Controls background music playback:
   - Adds an interactive button to toggle the background music on and off.

- [Code Sandbox Link](https://codesandbox.io/p/sandbox/api-project-r6jj7y) - Project code.
- [Project Website Link](https://r6jj7y.csb.app/) - Website.
- [GitHub Repo Link](https://github.com/DabSquadLeader/loz-botw-totk-api-compendium) - GitHub Repo.
