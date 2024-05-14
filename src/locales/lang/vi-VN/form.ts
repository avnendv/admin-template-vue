export default {
  label: {
    enter: 'Nhập',
    choose: 'Chọn',
    status: 'Trạng thái'
  },
  validation: {
    rules: {
      required: '{0} là bắt buộc.',
      max: '{0} không được lớn hơn {1} ký tự.',
      integer: '{0} phải là số.',
      same: '{0} và {1} phải khớp nhau.',
      min: '{0} không được nhỏ hơn {1} ký tự.',
      unique: '{0} đã tồn tại.',
      email: '{0} phải là một email hợp lệ.',
      date: '{0} không phải là một ngày hợp lệ.',
      after: '{0} phải nhỏ hơn ngày bắt đầu.',
      url: '{0} phải là một url hợp lệ.',
      regex: '{0} không đúng định dạng.'
    }
  }
}
