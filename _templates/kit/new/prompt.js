module.exports = [
    {
      type: 'select',
      name: 'type',
      message: "What is the component type?",
      choices: ['atoms', 'molecules', 'organisms']
    },
    {
      type: 'input',
      name: 'name',
      message: "What is the component name?"
    },
    {
      type: 'input',
      name: 'Name',
      message: "What is the component file name?"
    },
  ]