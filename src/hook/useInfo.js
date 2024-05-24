import data from '/src/assets/Data.json';

export  function getInfo(lang){
    const dataJson = JSON.parse(JSON.stringify(data.data));
    if(lang == "rus") {return (dataJson.ru)}
    if(lang == "eng") {return (dataJson.eng)}
}
