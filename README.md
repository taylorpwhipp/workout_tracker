---
title: Workout Tracker App
---

# Workout Tracker App

The Workout Tracker App simplifies workout planning by providing a user-friendly interface to create, save, and view workouts in an archive format. Built with Next.js and Radix UI, the app leverages the power of hooks for seamless interaction.

## Features

- **Create Workouts:** Easily compose your workout routines with a variety of exercises.
- **Save and Archive:** Store your workouts for future reference and historical tracking.
- **Server-Side Rendering (SSR):** Utilizes Next.js for efficient SSR, ensuring optimal performance.
- **Integration with Django Backend:** Connects to a Django backend to fetch and display workouts.

## Long-Term Goals

The project has ambitious long-term goals, including:

- **User Authentication:** Implement user accounts to personalize workout experiences.
- **Exercise Filtering:** Enable users to filter exercises based on categories or muscle groups.
- **Progress Tracking:** Implement features to track and visualize workout progress over time.

## Technology Stack

- **Next.js:** A React framework for building efficient and scalable web applications.
- **Radix UI:** A set of low-level UI primitives for building design systems.
- **Hooks:** Leveraging React hooks for state management and functional components.

## Testing

The app is in the process of integrating Jest for comprehensive testing. Troubleshooting is ongoing to address any Babel-related errors.

## Docker Integration

A Dockerfile has been initiated for the application. Currently, efforts are being made to stub out backend data to allow SSR requests to complete successfully within the Docker network, addressing potential networking issues between the Docker network and the locally running Django app.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/workout-tracker-app.git
