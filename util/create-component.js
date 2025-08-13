require("colors");
const fs = require("fs");
const templates = require("./templates");

const componentName = process.argv[2];
let componentType = process.argv[3] ?? 'components';

// Double check that the second parameter is in lower case
componentType = componentType.toLowerCase();

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

// List obvious corrections (all in lower case)
corrections = { 
  slice: 'slices',
  component: 'components',
  page: 'pages',
  structures: 'structure',
  context: 'contexts'
}

// Make obvious correction if appropriate 
componentType = corrections[componentType] ?? componentType;

// Define a 'Convert to Proper Case' function
const convertToProperCase = (word) => (word[0].toUpperCase() + word.substring(1,word.length).toLowerCase());

// Convert 'Component Type' to proper case
const componentTypeInProperCase = convertToProperCase(componentType);


// Construct Parent Directory Path
const componentParentDirectory = `./src/library/${componentType}`;

// Check that the Parent Directory path exists...
if (!fs.existsSync(componentParentDirectory)) {
  console.error(`Cannot create: '${componentName}' Templates - parent directory ${componentParentDirectory} does NOT already exist.\n`.red);
  process.exit(1);
}

// Construct Directory Path
const componentDirectory = `${componentParentDirectory}/${componentName}`;

// Write progress to log
console.log(`Creating '${componentName}' Templates inside a new directory: ${componentDirectory}\n`.green);

// Check that the Directory path does NOT already exist...
if (fs.existsSync(componentDirectory)) {
  console.error(`Cannot create: '${componentName}' Templates - a directory named ${componentDirectory} already exists.\n`.red);
  process.exit(1);
}

// Create Directory
fs.mkdirSync(componentDirectory);

// Create specialised files based on Template:
const generatedTemplates = templates.map((template) => template(componentName, componentTypeInProperCase));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/${componentName}${template.extension}`,
    template.content
  );
});

console.log(`Successfully created '${componentName}' Templates under: ${componentDirectory}\n`.green);