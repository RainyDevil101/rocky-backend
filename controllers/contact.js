
export const getContacts = async (req, res) => {
  res.json({
    message: 'get all'
  });
};

export const getContact = async(req, res) => {
  res.json({
    message: 'get one '
  });
};

export const createContact = async(req, res) => {
  res.json({
    message: 'create '
  });
};

export const updateContact = async(req, res) => {
  res.json({
    message: 'patch '
  });
};

export const deleteContact = async(req, res) => {
  res.json({
    message: 'delete '
  });
};