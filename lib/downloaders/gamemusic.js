const https = require('https');
const fs = require('fs');

module.exports = function gameMusic(write = null){
  let files = [
    {
      name: 'babyIFeelLove.mp3',
      url: 'https://opengameart.org/sites/default/files/Baby%2C%20I%20Feel%20Love_1.mp3',
      data: null
    },
    {
      name: 'dreamsOfMyLuck.mp3',
      url: 'https://opengameart.org/sites/default/files/Dreams%20of%20my%20luck.mp3',
      data: null
    },
    {
      name: 'happySunset.mp3',
      url: 'https://opengameart.org/sites/default/files/Happy%20Sunset%20Normalized.mp3',
      data: null
    },
    {
      name: 'heatOfTheWorld.mp3',
      url: 'https://opengameart.org/sites/default/files/Heat%20Of%20The%20World%20full%20song.mp3',
      data: null
    },
    {
      name: 'jumpUp.wav',
      url: 'https://opengameart.org/sites/default/files/Jump%20Up%20-%20Otoniel%20Reyes.wav',
      data: null
    },
    {
      name: 'newKindOfHumanity.mp3',
      url: 'https://opengameart.org/sites/default/files/New%20Kind%20Of%20Humanity.mp3',
      data: null
    },
    {
      name: 'strangerOfYou.mp3',
      url: 'https://opengameart.org/sites/default/files/Stranger%20Of%20You.mp3',
      data: null
    },
    {
      name: 'timeForYourLife.mp3',
      url: 'https://opengameart.org/sites/default/files/Time%20For%20Your%20Life.mp3',
      data: null
    }
  ];

  for (let i = 0; i < files.length; i++){
    https.get(files[i].url).on('response', function (response) {
        let body;
        response.on('data', function (chunk) {
            body += chunk;
        });
        response.on('end', function () {
          if (write != null){
            fs.writeFileSync(`${write}/${files[i].name}`, body);
          }else{
            files[i].data = body;
          }
        });
    }).on('error', err => {
      console.log(err);
      return '';
    });
  }

  if (write != null){
    let data = new Array();

    for (let i = 0; i < files.length; i++){
      data.push(files[i].data);
    }

    return data;
  }
}
