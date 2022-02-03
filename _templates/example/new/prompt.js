module.exports = [
    {
      type: 'select',
      name: 'type',
      message: "What type of component is in the example?",
      choices: ['atoms', 'molecules', 'organisms']
    },
    {
      type: 'input',
      name: 'name',
      message: "What component is the example demonstrating? e.g. Button"
    },
    {
      type: 'input',
      name: 'Name',
      message: "What should the example file name be? e.g. Button"
    },
  ]