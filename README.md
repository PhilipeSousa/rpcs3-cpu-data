# RPCS3 CPU DATA

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-0%25-brightgreen)
![Version](https://img.shields.io/badge/version-Beta-blue)
![License](https://img.shields.io/badge/license-MIT-blue)

## Description

**RPCS3 CPU DATA** is a project designed to visualize CPU performance metrics for the RPCS3 emulator. The project offers a responsive interface that integrates live data from CSV URLs, allowing users to analyze how different CPUs affect emulator performance and make informed decisions for optimal results.

## Technologies Used

- **Next.js 14**: A React framework for server-side rendering and modern web application development.
- **PapaParse**: A JavaScript library for parsing CSV files.
- **Framer Motion**: A library for creating smooth animations and dynamic interactions in the user interface.
- **React Intersection Observer**: A library for monitoring the visibility of elements within the viewport.
- **FontAwesome**:
    - `@fortawesome/free-solid-svg-icons`: Free solid icons from FontAwesome.
    - `@fortawesome/react-fontawesome`: Integration of FontAwesome with React.

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js installed on your machine.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/PhilipeSousa/rpcs3-cpu-data.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd rpcs3-cpu-data
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Create and configure `.env.local` file:**

    To fetch and render data dynamically, you need to create a `.env.local` file in the root directory of your project.

    ```plaintext
    NEXT_PUBLIC_STOCK_URL={YOUR_CSV_URL_FOR_STOCK}
    NEXT_PUBLIC_OVERCLOCK_URL={YOUR_CSV_URL_FOR_OVERCLOCK}
    NEXT_PUBLIC_MOBILE_URL={YOUR_CSV_URL_FOR_MOBILE}
    NEXT_PUBLIC_FAVORITE_URL_STOCK={YOUR_CSV_URL_FOR_FAVORITE_STOCK}
    ```

    Replace `{YOUR_CSV_URL_FOR_*}` with the actual URLs of your CSV files. These URLs can point to any publicly accessible CSV file, including but not limited to Google Sheets CSV exports.

    These URLs are used in the following files:
    
    - `NEXT_PUBLIC_STOCK_URL` is referenced as `StockUrl` in `src/app/page.js`.
    - `NEXT_PUBLIC_OVERCLOCK_URL` is referenced as `OverclockUrl` in `src/app/page.js`.
    - `NEXT_PUBLIC_MOBILE_URL` is referenced as `MobileUrl` in `src/app/page.js`.
    - `NEXT_PUBLIC_FAVORITE_URL_STOCK` is referenced as `favoriteUrl_Stock` in `src/app/page.js`.


5. **Run the development server:**

    ```bash
    npm run dev
    ```

    After starting the server, you can access the project in your browser at [http://localhost:3000](http://localhost:3000).

## Usage

Once the project is running, it will fetch data dynamically from the specified CSV URLs and render it on the interface. Ensure that the URLs in your `.env.local` file point to valid CSV files to see the data visualization in action.

## Contributing

Contributions are welcome! To contribute to this project, please follow these steps:

1. **Fork this repository.**

2. **Create a new branch for your feature:**

    ```bash
    git checkout -b my-feature
    ```

3. **Commit your changes:**

    ```bash
    git commit -m 'Add my feature'
    ```

4. **Push to your branch:**

    ```bash
    git push origin my-feature
    ```

5. **Open a Pull Request** and provide a detailed description of your changes.

## License

This project is licensed under the MIT License.
