import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const generateJWT = (uid = '') => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(payload, process.env.SECREPRIVATEKEY, {
      expiresIn: '1h'
    }, (err, token) => {
      if (err) {
        console.log(err);
        reject('Token cannot be generated.')
      } else {
        resolve(token);
      }
    });
  });
};