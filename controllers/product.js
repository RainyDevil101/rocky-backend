
export const getProducts = async (req, res) => {
  console.log('pepe');

  res.json({
    message: 'get all'
  });
};

export const getProduct = async(req, res) => {
  res.json({
    message: 'get one '
  });
};

export const createProduct = async(req, res) => {
  res.json({
    message: 'create '
  });
};

export const updateProduct = async(req, res) => {
  res.json({
    message: 'patch '
  });
};

export const deleteProduct = async(req, res) => {
  res.json({
    message: 'delete '
  });
};