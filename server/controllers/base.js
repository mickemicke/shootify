class BaseController {
  constructor(model) {
    this.model = model;
  }

  // console.log('model', model);
  list = (filter = {}, projection, options) => {
    const listResult = this.model.find(filter, projection, options);
    console.log('listresult', listResult);
    return listResult;
  };
}

export default BaseController;
