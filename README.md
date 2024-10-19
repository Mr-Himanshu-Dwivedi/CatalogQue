This project demonstrates how to read data from a JSON file, decode values from different numerical bases, and calculate a constant term (c) using Node.js.

Prerequisites
You need to have Node.js installed on your machine.
If you don’t have Node.js installed, you can download and install it from here.
Files in the Project
index.js: The main JavaScript file that reads data from the testcase.json file, processes it, and calculates the constant term.
testcase.json: JSON file that contains the encoded values and base information needed for calculations.
Project Structure

bash
project-root/
│
├── index.js              # Main JavaScript file
├── testcase.json         # JSON input file
└── README.md             # This README file
Steps to Run the Project
Clone the repository (or download the project files):

bash
git clone <repository-url>
Install Node.js (if not already installed):

Go to Node.js official site.
Download and install the LTS version of Node.js for your operating system.
You can verify the installation by running:

bash
node -v
npm -v
Place the JSON file (testcase.json) in the same directory as index.js.

Run the code:

Open a terminal and navigate to the project root directory where index.js is located.
Run the following command:
bash
node index.js
Check the output:

The program will read the testcase.json file, process the values, and output the constant term (c) in the console.

Common Errors
ERR1: This error occurs if there is an issue while reading the JSON file (e.g., the file is missing or the path is incorrect).
ERR2: This error occurs if there is any issue while processing the data (e.g., malformed JSON).
