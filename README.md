# movie-list-pe02-cs628

## Input
The program starts with a static list of 20 movies defined in the `MovieList.js` file. Each movie object contains:
- **Title**: The name of the movie.
- **Genre**: The category of the movie (e.g., Action, Drama, Romance, Science Fiction, Crime).
- **Release Year**: The year the movie was released.

Additionally, a dropdown menu allows users to select one of five unique genres to filter the movie list:
- Action
- Drama
- Romance
- Science Fiction
- Crime

---

## Process
The program processes the input data as follows:

1. **React Component Structure**:
   - The `MovieList` component contains the movie data and manages the state for genre selection.
   - JSX is used to dynamically render movie cards based on the selected genre.

2. **Filtering Mechanism**:
   - When a user selects a genre from the dropdown, the program filters the movie list to display only movies that match the selected genre.
   - Selecting "All Genres" displays the full movie list.

3. **Event Handling**:
   - Clicking on any movie card triggers an alert displaying the movie's title, providing interactive feedback.

4. **Styling**:
   - The `movie.css` file styles the movie cards with borders, shadows, and hover effects.
   - The movie list is centered on the page, and each movie is displayed in an individual card.

---

## Output
The output is a responsive web page that displays a list of movies in styled cards. Key features include:
- **Movie Cards**: Each card shows the movie's title, genre, and release year.
- **Genre Filter**: A dropdown menu allows users to filter movies by genre.
- **Interactive Alerts**: Clicking on a movie card pops up an alert with the movie title.
- **Responsive Design**: The layout adjusts to different screen sizes for a better user experience.

### 📸 **Output Screenshots**

1. **Default View (All Genres)**  
<img width="2240" alt="image" src="https://github.com/user-attachments/assets/f2465317-29eb-4bee-9072-e0c72aa0bb15" />

2. **Filtered View (Science Fiction)**  
<img width="2240" alt="image" src="https://github.com/user-attachments/assets/3b07430f-4bbe-4801-9cfb-3ce2183b0cf8" />

3. **Alert on Movie Click**  
<img width="2240" alt="image" src="https://github.com/user-attachments/assets/4a98a3fb-13d1-415d-9a3e-0124c06d437a" />

---

## Steps to Run the Application

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Kina138/movie-list-pe02-cs628.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd movie-list
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   ```bash
   npm start
   ```

5. **Open the Application**:
   - Visit `http://localhost:3000` in your browser.

6. **Troubleshooting**:
   - If errors occur, try:
     ```bash
     npm install
     npm start
     ```

This setup allows you to run and interact with the Movie List Application smoothly.
