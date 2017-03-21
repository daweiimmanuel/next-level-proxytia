var nama = prompt('Siapa namamu?', '');
var peran = prompt('Apa peranmu?', '');
var tahunLahir = prompt('Masukkan tahun lahir');
var umur = 2017 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));

if(nama === ''){
  peran = 'kacung';
  console.log('Selamat datang di Dunia Proxytia, '+ peran);
}
else{
  console.log('Selamat datang di Dunia Proxytia, '+ nama);
}

if(peran === ''){
  console.log('Pilih peranmu untuk memulai game');
}
else if(peran.toUpperCase() === 'Ksatria'.toUpperCase()){
  console.log('Halo Ksatria '+nama+', kamu dapat menyerang dengan senjatamu!');
}
else if(peran.toUpperCase() === 'Tabib'.toUpperCase()){
  console.log('Halo Tabib '+nama+', kamu akan membantu temanmu yang terluka.');
}
else if(peran.toUpperCase() === 'Penyihir'.toUpperCase()){
  console.log('Halo Penyihir '+nama+', ciptakan keajaiban yang membantu kemenanganmu!');
}

for(i=0;i<=tahunLahir;i++){
  if(i%umur === 0){
    console.log(peran + ' ' + nama + ' menyerang monster!');
    monsterHealth = monsterHealth - umur;
  }
  else if(i%kodeMonster === 0){
    console.log('monster menyerang ' + peran + ' ' + nama + '!');
    playerHealth = playerHealth - kodeMonster;
  }
  else if((i%umur === 0) && (i%kodeMonster === 0)){
    console.log('Health keduanya bertambah');
    playerHealth = playerHealth + kodeMonster;
    monsterHealth = monsterHealth + umur;
  }
}

if(playerHealth > monsterHealth){
  console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
}
else{
  console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
}
