# Personal Portfolio

This is a personal portfolio website built with React and Tailwind CSS.

## How to Run This Project Locally

Follow these steps to run the project on your local machine:

1.  **Install Node.js:**

    Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

2.  **Clone the Repository:**

    Clone this repository to your local machine using Git:

    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

3.  **Install Dependencies:**

    Install the required npm packages by running:

    ```bash
    npm install
    ```

4.  **Run the Development Server:**

    Start the development server using:

    ```bash
    npm run dev
    ```

    This will start the Vite development server.

5.  **View the Portfolio:**

    Open your browser and navigate to the address provided by the development server (usually `http://localhost:5173`).

## Technologies Used

*   React
*   Tailwind CSS
*   Vite
*   react-router-dom
*   react-router-hash-link

## Project Structure

*   `index.html`: Main HTML file.
*   `src/`: Source code directory.
    *   `App.jsx`: Main application component.
    *   `components/`: React components.
        *   `Home.jsx`: Home section.
        *   `About.jsx`: About section.
        *   `Skills.jsx`: Skills section.
        *   `Projects.jsx`: Projects section.
        *   `Achievements.jsx`: Achievements section.
        *   `Contact.jsx`: Contact section.
        *   `DarkModeToggle.jsx`: Dark mode toggle component.
    *   `index.css`: CSS styles.
*   `tailwind.config.js`: Tailwind CSS configuration file.
*   `package.json`: npm package file.

## Dark Mode

The website supports dark mode. You can toggle between dark and light modes using the dark mode toggle button in the navigation bar.

## Navigation

The website uses a single-page layout with smooth scrolling navigation. You can navigate to different sections using the links in the navigation bar.

## Customization

You can customize the website by modifying the React components and Tailwind CSS styles.
