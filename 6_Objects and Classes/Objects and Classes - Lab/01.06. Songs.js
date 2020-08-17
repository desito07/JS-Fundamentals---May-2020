function solve(arr){
    // console.log(arr);
    class Songs{
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let firstStr = arr.shift();
    let lastStr = arr.pop();
    for(let i = 0; i < arr.length; i++){
        let [type, name, time] = arr[i].split('_');
        let song = new Songs(type, name, time)
        songs.push(song);
    }    
// console.log(songs);
    if(lastStr === 'all'){
        songs.forEach((x) => console.log(x.name));    
    } else {
        let filtered = songs.filter((x) => x.type === lastStr);
        filtered.forEach((x) => console.log(x.name));
    }
}
solve([
    '3',
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
  ]
  );
