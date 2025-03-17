# SkillSphere-Intelligent-Quiz-Assessment-Platform-Frontend

## Overview
This is the frontend of the **SkillSphere-Intelligent-Quiz-Assessment-Platform**, developed using **Angular**. The application provides a well-structured UI for both users and administrators, enabling seamless interaction with quizzes and courses.

## Features
### Admin Dashboard:
- View all registered users.
- Edit user details or delete users.
- View all quizzes.
- Edit quizzes, including updating and deleting questions.
- Delete entire quizzes if needed.

### User Dashboard:
- View available courses.
- View detailed course roadmaps.
- Take quizzes on various subjects.
- Submit quizzes and receive instant marks.
- User-friendly and organized UI with multiple Angular components.

## Tech Stack
- **Angular** (Frontend Framework)
- **TypeScript** (Primary language for Angular development)
- **Bootstrap/Material UI** (For UI components and styling)
- **Angular Router** (Navigation between components)
- **RxJS** (For reactive programming)
- **REST API Integration** (Communicating with the backend via HTTP services)

## Project Structure
```
SkillSphere-Frontend/
│── src/
│   ├── app/
│   │   ├── components/      # Reusable components (buttons, cards, etc.)
│   │   ├── pages/           # Page components (Dashboard, Quiz, Courses, etc.)
│   │   ├── services/        # API services for backend interaction
│   │   ├── models/          # TypeScript models for data handling
│   │   ├── app.module.ts    # Main Angular module
│   ├── assets/              # Images and static assets
│   ├── styles.css           # Global styling
│── angular.json             # Angular configuration
│── package.json             # Dependencies and scripts
```

## Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/SkillSphere-Frontend.git
   cd SkillSphere-Frontend
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Run the Application:**
   ```sh
   ng serve --open
   ```
   The application will open at `http://localhost:4200/`.

## API Integration
The frontend communicates with the backend using REST APIs. Ensure the backend is running before testing API calls.

### Key API Endpoints Used:
| Method | Endpoint                        | Description |
|--------|---------------------------------|-------------|
| GET    | `/user/get`                     | Fetch all users (Admin) |
| PUT    | `/user/update`                  | Update user details (Admin) |
| DELETE | `/user/delete/{username}`       | Delete a user (Admin) |
| GET    | `/course/getCourse`             | Fetch all courses (User) |
| GET    | `/course/getRoadmap/{courseId}` | Fetch course roadmap (User) |
| GET    | `/quiz/get-quiz`                | Fetch all quizzes (User) |
| POST   | `/question/check-marks`         | Submit quiz answers and get marks (User) |

## UI Highlights
- **Admin Panel:** A structured dashboard with tables and modals for managing users and quizzes.
- **User Dashboard:** Well-designed UI for viewing courses, roadmaps, and taking quizzes.
- **Interactive Components:** Used Angular Material and Bootstrap for UI enhancements.
- **Routing & Navigation:** Smooth navigation between dashboards, courses, and quizzes.

## Contribution
Feel free to fork the repository, submit issues, or contribute with pull requests.

## License
This project is licensed under the MIT License.
