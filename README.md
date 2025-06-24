# My First React App

This is a simple React application created with Vite. It's perfect for beginners who are learning React! This project demonstrates both traditional CSS and Tailwind CSS approaches to styling.

## What's in this project?

- `src/App.jsx`: The main component of our application
- `src/App.css`: Traditional CSS styles
- `src/TailwindExample.jsx`: A component demonstrating Tailwind CSS styling
- `src/main.jsx`: The entry point of our application
- `index.html`: The HTML file where our React app will be mounted
- `tailwind.config.cjs`: Configuration file for Tailwind CSS


1. Open your terminal
2. Run `npm install` to install all the dependencies
3. Run `npm run dev` to start the development server
4. Open your browser and go to `http://localhost:5173`

## What you'll learn

- How React components work
- How to write JSX (HTML in JavaScript)
- How to style your components with CSS
- How to use Tailwind CSS utility classes
- How to organize your code in a React project
- How to add simple routing with React Wouter

## Project Structure

```
my-react-app/
├── src/              # This is where your React code lives
│   ├── App.jsx      # The main component
│   ├── App.css      # Traditional CSS styles
│   ├── TailwindExample.jsx  # Tailwind CSS example component
│   └── main.jsx     # Where we start our React app
├── public/          # Static files like images
├── index.html       # The main HTML file
├── tailwind.config.cjs  # Tailwind CSS configuration
└── package.json     # Project configuration and dependencies
```

## Styling Approaches

This project demonstrates two different ways to style your React components:

### 1. Traditional CSS
- Uses separate CSS files (like `App.css`)
- Styles are defined using class names
- Good for learning CSS fundamentals
- Example: The cards in `App.jsx`

### 2. Tailwind CSS
- Uses utility classes directly in your JSX
- No need for separate CSS files
- Rapid development with pre-built classes
- Example: The `TailwindExample.jsx` component

## Next Steps

1. Try modifying the text in `App.jsx`
2. Add your own CSS styles
3. Create new components in the `src` folder
4. Experiment with Tailwind CSS utility classes
5. Try combining both styling approaches in your components

## Page 1: Components Recap

### Prerequisites
0. Read this README and run the development server to see how the app looks in localhost.

### Tasks

1. Create Button Components
   - Create a new folder called `components` inside the `src` directory
   - Define two React components:
     - `MyCSSButton`
     - `MyTailwindButton`
   - The text of one button should be 'Tailwind Button' and the other button should say 'CSS button'

2. Use the Buttons
   - Import both button components in `App.jsx`
   - Add them to the render section of `App.jsx`

3. Modify the Header
   - Find the `<h1>` component in `App.jsx`
   - Change its text to something new

4. Quiz
   - Wait for the teacher's quiz
   - Answer the questions about components

### Expected Project Structure After Tasks
```
my-react-app/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── TailwindExample.jsx
│   └── main.jsx
└── ... (other files)
```

## Page 2: Styling Components

### Prerequisites
0. Research how to use Tailwind CSS and plain CSS in React
   - Read the [Tailwind CSS documentation](https://tailwindcss.com/docs)
   - Review CSS basics and React styling approaches
   - Understand the difference between utility-first CSS and traditional CSS

### Part 1: Style a Button – Research & Apply

#### Task
Style your two buttons (`MyCSSButton` and `MyTailwindButton`) using different approaches:
- `MyCSSButton`: Style using plain CSS in a .css file
- `MyTailwindButton`: Style using Tailwind utility classes

#### Styling Requirements

Both buttons should have the following styles:

1. Basic Styling
   - Background color: Black
   - Text color: White
   - Padding: 12px top/bottom, 24px left/right
   - Border radius: Rounded corners (8px)
   - Font weight: Bold

2. Interactive Effects
   - Hover effect: Background color changes to a lighter grey (#333 or gray-700)
   - Transition effect: Smooth transition on hover (0.3s ease-in-out)
   - Box shadow: A subtle shadow to elevate the button

3. Responsive Design
   - Text size:
     - Small on mobile (text-sm)
     - Larger on desktop (text-lg)
   - Customize Tailwind breakpoints:
     - Open `tailwind.config.cjs`
     - Modify the default breakpoints:
       - `sm`: 645px (was 640px)
       - `md`: 773px (was 768px)
       - `lg`: 1029px (was 1024px)
     - Test your responsive design with the new breakpoints
   - Additional Responsive Tasks:
     - Make the button width:
       - Full width on mobile (`w-full`)
       - Auto width on desktop (`md:w-auto`)
     - Adjust padding:
       - Smaller padding on mobile (`px-4 py-2`)
       - Larger padding on desktop (`md:px-6 md:py-3`)
     - Change button layout:
       - Stack buttons vertically on mobile
       - Place buttons side by side on desktop
     - Modify shadow:
       - Lighter shadow on mobile
       - Stronger shadow on desktop
     - Test all responsive changes using browser dev tools

4. Disabled State
   When disabled, the button should:
   - Have a grey background
   - Use cursor-not-allowed
   - Appear slightly faded (50% opacity)

#### Learning Objectives
This exercise will help you understand:
- Color utilities
- Spacing and padding
- Typography
- Responsive design
- Pseudo-states (hover, disabled)
- Transitions and animations
- Conditional styling

### Quiz
- Wait for the teacher's quiz about styling
- Answer the questions about CSS and Tailwind CSS

### Tips
- For the CSS button, create a new CSS file (e.g., `MyButton.css`)
- For the Tailwind button, use utility classes directly in the component
- Test both buttons in different screen sizes
- Try to achieve the same visual result with both approaches
- Compare the code length and maintainability of both approaches


## Page 3: Routing with Wouter

### Prerequisites
0. Research client-side routing in React
   - Read the [Wouter documentation](https://github.com/molefrog/wouter)
   - Understand the concept of single-page applications (SPAs)
   - Learn about route parameters and navigation

### Part 1: Set Up Basic Routing

#### Task
Set up client-side routing using Wouter in your React application.

#### Implementation Steps

1. Install Wouter
```bash
npm install wouter
```

2. Create Two Pages as React Components
Create a new folder called `pages/` and inside it, two files:
```bash
mkdir src/pages
touch src/pages/Home.jsx
touch src/pages/About.jsx
```

Add simple components:

`src/pages/Home.jsx`:
```jsx
export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-gray-600">This is our main page with Tailwind styling.</p>
    </div>
  );
}
```

`src/pages/About.jsx`:
```jsx
export default function About() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="text-gray-600">Learn more about our project.</p>
    </div>
  );
}
```

3. Set Up Routing in App.jsx

 3.1 remove  the h1 and p in the header component and Add a navigation for <nav> with Home and About With the Link component from react-wouter. 


 3.2 Update `src/App.jsx` to include Routing for About and Home with the Route component from wouter


```jsx
import { Route, Link } from 'wouter'; --> this is what you should read about 
import Home from './pages/Home';
import About from './pages/About';
import './App.css'
import TailwindExample from './TailwindExample'
import { MyCSSButton, MyTailwindButton } from './components/MyButton'

function App() {

    return (
    <div className="app">
      <header className="app-header">
        NAVIGATION GOES HERE
      </header>
      
      <main className="app-main">
            ROUTING GOES HERE
            
            .... rest of the app that you wrote
      </main>
    </div>)

}
export default App;
```


4. Create a Components Page
   - Create `src/pages/Components.jsx`
   - Add a route for `/components`
   - Style it with Tailwind CSS
   - Add a link in the navigation
   - Move the buttons you created  to this page so that they don't appear in the other pages (also called routes)



5. Add Dynamic Routes
   - Create a route with parameters: `/hello/:name`
   - Display a personalized greeting
   - Style the page with Tailwind CSS

6. Add a 404 Page
   - Create a catch-all route for unmatched paths
   - Style it with Tailwind CSS
   - Add a link back to home

#### Learning Objectives
This exercise will help you understand:
- Client-side routing concepts
- Route components and navigation
- URL parameters
- Page organization
- Navigation between pages
- 404 handling


LASTLY: <span style="color: red">Create a Pull Request</span>

This task is important to practice Git and GitHub workflow. Follow these steps:

0. FORK THE REPO 


Sure! Here's a clean and student-friendly Markdown block you can paste directly into a `README.md`:

---

## 🛠️ How to Push to Your Fork (if You Cloned the Original Repo by Accident)

If you cloned the original repo and already created a branch with your solution — no worries! You can still push your branch to your own fork and make a pull request.

### ✅ Steps

1. **Fork this repo** on GitHub
   Click the **"Fork"** button in the top-right corner of the repository page.

2. **In your terminal, point your local repo to your fork**
   Run this in the folder where you already cloned the repo:

   ```bash
   git remote set-url origin https://github.com/YOUR-USERNAME/YOUR-FORK-NAME.git
   ```

   Replace `YOUR-USERNAME` and `YOUR-FORK-NAME` with your GitHub username and the name of your forked repo.

3. **Check that it worked**:

   ```bash
   git remote -v
   ```

   It should show:

   ```
   origin  https://github.com/YOUR-USERNAME/YOUR-FORK-NAME.git (fetch)
   origin  https://github.com/YOUR-USERNAME/YOUR-FORK-NAME.git (push)
   ```

4. **Push your branch to your fork**:

   ```bash
   git push origin your-branch-name
   ```

5. **Open a Pull Request**
   Go to your fork on GitHub, and GitHub will show a **"Compare & pull request"** button. Click it and submit your PR! 🎉

---

Let me know if you want a version with screenshots or a `.md` file download!



1. Stage your changes:
   ```bash
   git add .
   ```

2. Commit your changes with a descriptive message:
   ```bash
   git commit -m "Add routing and styling features"
   ```

3. Push your changes to GitHub:
   ```bash
   git push origin main
   ```

4. Create a Pull Request:
   - Go to your GitHub repository
   - Click on "Pull requests"
   - Click "New pull request"
   - Write a title like "Add routing and styling features"
   - Add a description of your changes
   - Click "Create pull request"

This will help you practice:
- Basic Git commands
- GitHub workflow
- Code review process
- Project collaboration

### Fun Optional Challenges

#### Styling Challenges

1. Create a Simple Navigation Menu
   - Style the navigation links with hover effects
   - Add a subtle underline animation
   - Make the active link stand out
   - Make it responsive for mobile screens
   - Add a simple transition when switching pages

2. Build a Simple Card Component
   - Create a reusable card component
   - Add hover effects (slight lift and shadow)
   - Make it responsive
   - Add different color variants
   - Include an image with proper aspect ratio

3. Add Some Fun Animations
   - Add a loading spinner
   - Create a simple fade-in effect for pages
   - Add a button click animation
   - Make the header text animate on page load
   - Add a simple hover effect to images

#### Wouter Challenges

1. Create a Simple User Profile Page
   - Add a `/profile` route
   - Create a simple profile page with user info
   - Add a link to it in the navigation
   - Style it with Tailwind CSS
   - Add a simple form to update the profile

2. Build a Simple Blog System
   - Create a `/blog` route
   - Add a list of blog posts
   - Create individual post pages
   - Add navigation between posts
   - Style everything with Tailwind CSS

3. More tasks: Add Some Fun Features like
   - Create a simple search page
   - Add a contact form page
   - Create a simple photo gallery
   - Add a "back to top" button
   - Create a simple footer with links

### Quiz
- Wait for the teacher's quiz about routing
- Answer questions about Wouter and client-side routing

### Tips
- Keep your routes organized in the `pages` directory
- Use consistent styling across all pages
- Test navigation between pages
- Check that the back/forward browser buttons work
- Verify that direct URL access works




