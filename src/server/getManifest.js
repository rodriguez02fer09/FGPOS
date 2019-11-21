import fs from 'fs';

require('dotenv').config();

const getManifest = () => {
  try {
    if (process.env.NODE_ENV !== 'development') {
      return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`, 'utf8'));
    }
    return null;

  } catch (err) {
    console.log(err);
    return null;
  }
};

export default getManifest;
