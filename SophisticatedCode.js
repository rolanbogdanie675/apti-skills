/*
   Filename: SophisticatedCode.js
   Content: A complex JavaScript code showcasing various advanced concepts and techniques.
*/

// Importing external libraries
const moment = require('moment');
const axios = require('axios');
const fs = require('fs');

// Constants
const API_KEY = 'your_api_key';
const BASE_URL = 'https://api.example.com';

// Custom classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Async function using Arrow function syntax
const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
};

// File handling
const saveDataToFile = (filename, data) => {
  fs.writeFileSync(filename, JSON.stringify(data));
  console.log(`Data saved to ${filename}`);
};

const readDataFromFile = (filename) => {
  const data = fs.readFileSync(filename);
  return JSON.parse(data);
};

// Main function
const executeProgram = async () => {
  const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  console.log(`Current time is ${currentTime}\n`);

  console.log('Fetching data from API...');
  const apiData = await fetchData(`${BASE_URL}/data?apiKey=${API_KEY}`);
  console.log(`Fetched data: ${JSON.stringify(apiData)}\n`);

  console.log('Processing data...');
  const processedData = apiData.map((item) => {
    return {
      id: item.id,
      name: item.name,
      description: item.description.toUpperCase(),
    };
  });
  console.log(`Processed data: ${JSON.stringify(processedData)}\n`);

  console.log('Saving processed data to file...');
  saveDataToFile('processedData.json', processedData);

  console.log('Reading data from file...');
  const loadedData = readDataFromFile('processedData.json');
  console.log(`Loaded data from file: ${JSON.stringify(loadedData)}\n`);

  console.log('Creating person objects...');
  const person1 = new Person('John Doe', 25);
  const person2 = new Person('Jane Smith', 30);
  person1.describe();
  person2.describe();

  console.log('\nProgram execution complete!');
};

// Calling main function
executeProgram().catch((error) => {
  console.error('An error occurred:', error);
});