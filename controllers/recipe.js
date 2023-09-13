
export const getRecipes = async (req, res) => {
  res.json({
    message: 'get all'
  });
};

export const getRecipe = async(req, res) => {
  res.json({
    message: 'get one '
  });
};

export const createRecipe = async(req, res) => {
  res.json({
    message: 'create '
  });
};

export const updateRecipe = async(req, res) => {
  res.json({
    message: 'patch '
  });
};

export const deleteRecipe = async(req, res) => {
  res.json({
    message: 'delete '
  });
};