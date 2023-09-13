
export const getLocations = async (req, res) => {
  res.json({
    message: 'get all'
  });
};

export const getLocation = async(req, res) => {
  res.json({
    message: 'get one '
  });
};

export const createLocation = async(req, res) => {
  res.json({
    message: 'create '
  });
};

export const updateLocation = async(req, res) => {
  res.json({
    message: 'patch '
  });
};

export const deleteLocation = async(req, res) => {
  res.json({
    message: 'delete '
  });
};