import instance from './config';

/* eslint import/prefer-default-export: "off" */
export function getPlayers({ region, keyword }) {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: {
          players: [{
            id: 'godsenal',
          }, {
            id: 'something',
          }, {
            id: 'sogochang',
          }],
        },
      });
    }, 2000);
  });
  // return instance.get(`${region}/players/${keyword}`);
}

