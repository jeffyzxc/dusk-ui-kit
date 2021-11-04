module.exports = [
    {
      type: 'select',
      name: 'type',
      message: "What is the component type?",
      choices: ['atom', 'molecule', 'organism', 'template']
    },
    {
      type: 'input',
      name: 'name',
      message: "What is the component name? (lowercase with underscores for spaces)"
    },
    // {
    //   type: 'input',
    //   name: 'Name',
    //   message: "What is the component file name?"
    // },
  ]