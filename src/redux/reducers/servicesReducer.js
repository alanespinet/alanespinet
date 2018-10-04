const defaultState = [{
  icon: 'code',
  title: 'Website Creation',
  descriptions: [
    'Static Websites',
    'CMS-based Websites (Wordpress)',
    'Wordpress dedicated Themes',
    'Web Applications'
  ]
}, {
  icon: 'cogs',
  title: 'Ongoing Maintenance',
  descriptions: [
    'Content Edition',
    'Structure Edition',
    'Behavior Changing',
    'Error Solving'
  ]
}, {
  icon: 'mobile',
  title: 'Responsive Design',
  descriptions: [
    'Responsive Integration',
    'Responsive Issues Solving'
  ]
}, {
  icon: 'eye-slash',
  title: 'WCAG 2.0',
  descriptions: [
    'WCAG 2.0 Audit',
    'WCAG 2.0 Integration (levels A, AA and AAA)'
  ]
}];

export default ( state = defaultState, action ) => {
  switch( action.type ){
    default:
      return state;
  }
}
