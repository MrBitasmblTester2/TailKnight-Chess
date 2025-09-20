# TailKnight-Chess

## Description
TailKnight Chess is a web-based chess game built with React and styled using Tailwind CSS. It features an interactive 8x8 chessboard, complete game logic, and a responsive design for all screen sizes.

## Tech Stack
- React
- Tailwind CSS

## Requirements
- Render an interactive 8x8 chessboard with React and Tailwind (Hint: Use nested map and unique keys for lists)
- Implement game logic to initialize pieces and move them (Hint: Keep logic in standalone utility files)
- Manage game state and user interactions using React hooks (Hint: Update state immutably with setBoard)
- Ensure responsive design across different screen sizes (Hint: Use Tailwind responsive prefixes (sm:, md:, lg:))

## Installation
1. Clone the repository:
   bash
   git clone https://github.com/your-username/TailKnight-Chess.git
   
2. Navigate into the project directory:
   bash
   cd TailKnight-Chess
   
3. Install dependencies:
   bash
   npm install
   
4. (Optional) Create a `.env` file in the root directory if you need to add environment variables. None are required for this frontend-only project.

## Usage
1. Start the development server:
   bash
   npm start
   
2. Open your browser and go to `http://localhost:3000` to view the chess game.
3. Click on a piece to select it, then click on a destination square to move it according to chess rules.

## Implementation Steps
1. Initialize a new React project (`create-react-app`) and install Tailwind CSS.
2. Configure Tailwind by creating `tailwind.config.js` and updating `postcss.config.js`.
3. Create a `Board` component that renders an 8x8 grid using nested `map` calls, assigning unique `key` props.
4. Build standalone utility files (`gameLogic.js`) to initialize the board state, validate moves, and update positions.
5. Use the React `useState` hook in the `Board` component to manage the board array and the selected piece.
6. Implement click handlers to pick up and place pieces, updating state immutably with `setBoard`.
7. Style the board and pieces with Tailwind classes, applying responsive prefixes (`sm:`, `md:`, `lg:`) to ensure the layout adapts.
8. Test all piece interactions, move validations, and edge cases (check, checkmate, invalid moves).
9. Refine the UI for light/dark squares, piece icons, and overall responsive behavior.