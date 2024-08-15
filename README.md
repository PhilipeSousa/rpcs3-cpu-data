# RPCS3 CPU DATA

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-0%25-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-blue)

## Description

**RPCS3 CPU DATA**  is a project for visualizing CPU performance metrics for the RPCS3 emulator. It provides a clear, responsive interface that integrates live data from CSV URLs, helping users analyze how different CPUs affect emulator performance and make informed decisions for optimal results.

## Technologies Used

- **Next.js 14**: A React framework for server-side rendering and modern web application development.
- **Papaparse**: A JavaScript library for parsing CSV files.
- **Frame Motion**: A library for creating smooth animations and dynamic interactions in the user interface.
- **React Intersection Observer**: A library for monitoring the visibility of elements within the viewport.
- **FontAwesome**:
    - @fortawesome/free-solid-svg-icons: Free solid icons from FontAwesome.
    - @fortawesome/react-fontawesome: Integration of FontAwesome with React.

## Getting Started

#### - Clone the repository
```bash
$ git clone https://github.com/your-username/rpcs3-cpu-data.git
```

#### -  Navigate to the project directory
```bash
$ cd rpcs3-cpu-data
```

#### - Install dependencies
```bash
$ npm install
```

#### - Run the development server:

```bash
$ npm run dev
```

## Usage
After starting the development server, you can access the project in your browser at [http://localhost:3000](http://localhost:3000)

## Contributing

Contributions are welcome! If you want to contribute to this project, follow these steps:

- Fork this repository.
- Create a new branch with your feature (```git checkout -b my-feature```).
- Commit your changes (```git commit -m 'Add myfeature```).
- Push to the branch (```git push origin my-feature```).
- Open a Pull Request.



## Color Palette

### Accent Colors

| Name              | Variable           | Hex / RGBA                               | Example                              |
|-------------------|--------------------|------------------------------------------|--------------------------------------|
| **Accent Color**  | `--color-accent`   | `#3DC2EC`                                | ![#3DC2EC](https://placehold.co/40x40/3DC2EC/3DC2EC) |
| **Secondary Color** | `--color-secondary` | `#7c8a5f`                           | ![#7c8a5f](https://placehold.co/40x40/7c8a5f/7c8a5f) |

### Gradients

| Name                        | Variable              | Hex / RGBA                               | Example                              |
|-----------------------------|-----------------------|------------------------------------------|--------------------------------------|
| **Primary Gradient Start**   | `--primary-gradient-start` | `rgba(58, 45, 111, 0.7)` | ![rgba(58, 45, 111, 0.7)](https://placehold.co/40x40/3a2d6f/3a2d6f) |
| **Primary Gradient End**     | `--primary-gradient-end`   | `rgba(79, 58, 143, 0.7)` | ![rgba(79, 58, 143, 0.7)](https://placehold.co/40x40/4f3a8f/4f3a8f) |
| **Secondary Gradient Start** | `--secondary-gradient-start` | `rgba(79, 58, 143, 1.0)` | ![rgba(79, 58, 143, 1.0)](https://placehold.co/40x40/4f3a8f/4f3a8f) |
| **Secondary Gradient End**   | `--secondary-gradient-end`   | `rgba(108, 91, 154, 1.0)` | ![rgba(108, 91, 154, 1.0)](https://placehold.co/40x40/6c5b9a/6c5b9a) |
| **Gradient Start Color**     | `--color-gradient-start` | `rgba(58, 45, 111, 0.7)` | ![rgba(58, 45, 111, 0.7)](https://placehold.co/40x40/3a2d6f/3a2d6f) |
| **Gradient End Color**       | `--color-gradient-end`   | `rgba(108, 91, 154, 0.7)` | ![rgba(108, 91, 154, 0.7)](https://placehold.co/40x40/6c5b9a/6c5b9a) |
