export default {
  label: {
    enter: 'Enter',
    choose: 'Choose',
    status: 'Status'
  },
  validation: {
    rules: {
      required: '{0} is required.',
      max: '{0} cannot be larger than {1} characters.',
      integer: '{0} must be numeric.',
      same: 'Fields {0} and {other} must match.',
      min: '{0} cannot be less than {1} characters.',
      unique: '{0} already exists.',
      email: '{0} must be a valid email.',
      date: '{0} is not a valid date.',
      after: '{0} must be less than the start date.',
      url: '{0} must be a valid url.',
      regex: '{0} format is invalid.'
    }
  }
}
