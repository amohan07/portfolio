# How to Customize Your Portfolio

## Adding Your Profile Picture

1.  **Locate the Image Folder:** Navigate to the `public` directory in your project.
2.  **Replace the Placeholder:** Replace the `profile.jpeg` file with your own profile picture. Ensure the new image has the same name (`profile.jpeg`) or update the image path in `src/components/Home.jsx`.
3.  **Update the Image Path (if needed):** If you named your image differently, open `src/components/Home.jsx` and modify the `src` attribute of the `img` tag:

    ```jsx
    <img
      src="/your-image-name.jpg"
      alt="Your Name"
      className="rounded-full w-48 h-48 object-cover shadow-lg"
    />
    ```

## Modifying Achievements & Certifications

1.  **Open the Achievements Component:** Navigate to `src/components/Achievements.jsx`.
2.  **Edit the Data:** Modify the `achievementsData` array to reflect your own achievements and certifications. Each object in the array has a `title` and a `description`.

    ```jsx
    const achievementsData = [
      { title: 'Achievement 1', description: 'Description of achievement 1.' },
      { title: 'Certification 1', description: 'Description of certification 1.' },
      // Add more achievements as needed
    ];
    ```
3.  **Add or Remove Items:** You can add more achievements by adding new objects to the `achievementsData` array or remove existing ones by deleting the corresponding objects.
4.  **Save the File:** Save the `Achievements.jsx` file to see the changes reflected in your portfolio.
