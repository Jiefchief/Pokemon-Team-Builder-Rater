let test = document.querySelector("html");
console.log("LOADED TEAM RATER");

test.addEventListener('keydown', function(event){
    console.log("SHIFT EVENT ACTIVATED");
    if (event.keyCode == 16){
        dothing();
    }
})

function dothing (){
    let txt = test.querySelector("textarea").innerHTML;
    if (!txt.includes("Level") && txt.includes("EV")){
        ParsePSData(txt);
    }
    else{
        test.querySelector("textarea").innerHTML = "STOP TRYING TO BREAK MY EXTENSION (ﾉಠдಠ)ﾉ︵┻━┻";
    }
}

function ParsePSData(data){
    let arrayOfLines = data.match(/[^\r\n]+/g);
    
    DoCalc(arrayOfLines);
}

function DoCalc(data){ //0, 9
    let teamStatVal = 0;
    
    for (let j = 0; j < 6; j++){
        
        let i = j * 8;
        console.log(data[i]);
        //GetStatValue(data[i]); //testing method
        //teamStatVal += (GetBaseStats(data[i])[0] + GetBaseStats(data[i])[3] + GetBaseStats(data[i])[4] + (GetBaseStats(data[i])[1] / 2) + (GetBaseStats(data[i])[2] / 2)) * 2; //[hp + spec + speed + (atk/2) + (def/2)] * 2
        teamStatVal += Number(GetStatValue(data[i]));
    }
    
    let maxTSVal = GetMaxTeamStatVal("g1ag"); //let user select format at some point
    let teamMovePower;
    let maxTMP;
    let teamTypeVal;
    let teamLvlVal;
    let teamAccVal;

    console.log(teamStatVal);

    let ratingInsert = document.createElement('li');
    ratingInsert.innerHTML = '<a class="roomtab button cur closable tRating" href="/teambuilder"><span>Rating</span><span>' + teamStatVal +'</span></a><button class="closebutton" name="closeRoom" value="teambuilder" aria-label="Close"><i class="fa fa-times-circle"></i></button>';
    let tabSection = document.querySelector(".inner");

    tabSection.querySelector("ul").appendChild(ratingInsert);
    /*
    <li><a class="roomtab button cur closable" href="/teambuilder"><i class="fa fa-pencil-square-o"></i> <span>Teambuilder</span></a><button class="closebutton" name="closeRoom" value="teambuilder" aria-label="Close"><i class="fa fa-times-circle"></i></button></li>*/
}

function GetBaseStats(pokemon){
    let stats = [0.0, 0.0, 0.0, 0.0, 0.0];
    if (pokemon.includes("Mewtwo")){
        stats[0] = 415;
        stats[1] = 318;
        stats[2] = 278;
        stats[3] = 406;
        stats[4] = 358;
    }

    return stats;
}

function GetStatValue(pokemon){
    let raw = GetPokemonData(pokemon);
    //Mewtwo,106,110,90,154,130,590,415,318,278,406,358,2954,
    let pokeArr = raw.split(',');
    console.log(pokeArr[12]);
    return pokeArr[12];
    
}

function GetMaxTeamStatVal(format){
    if (format == "g1ag"){
        return 17724;
    }

    if (format == "g1ubers"){
        return 15944;
    }

    return -1;
}

function GetMovePower(move){
    if (move.includes("Amnesia")){
        return 0;
    }
}



















































//dont look down here

var rawData = new Array();
//add typing to the end of the string, formet: water.ice where x.y is type1/type2
rawData.push("Mewtwo,106,110,90,154,130,590,415,318,278,406,358,2954,");
rawData.push("Chansey,250,5,5,105,50,415,703,108,108,308,198,2634,");
rawData.push("Zapdos,90,90,85,125,100,490,383,278,268,348,298,2604,");
rawData.push("Mew,100,100,100,100,100,500,403,298,298,298,298,2594,");
rawData.push("Moltres,90,100,90,125,90,495,383,298,278,348,278,2594,");
rawData.push("Articuno,90,85,100,125,85,485,383,268,298,348,268,2564,");
rawData.push("Dragonite,91,134,95,100,80,500,385,366,288,298,258,2536,");
rawData.push("Gyarados,95,125,79,100,81,480,393,348,256,298,260,2506,");
rawData.push("Vaporeon,130,65,60,110,65,430,463,228,218,318,228,2464,");
rawData.push("Tentacruel,80,70,65,120,100,435,363,238,228,338,298,2464,");
rawData.push("Lapras,130,85,80,95,60,450,463,268,258,288,218,2464,");
rawData.push("Jolteon,65,65,60,110,130,430,333,228,218,318,358,2464,");
rawData.push("Exeggutor,95,95,85,125,55,455,393,288,268,348,208,2454,");
rawData.push("Gengar,60,65,60,130,110,425,323,228,218,358,318,2444,");
rawData.push("Arcanine,90,110,80,80,95,455,383,318,258,258,288,2434,");
rawData.push("Alakazam,55,50,45,135,120,405,313,198,188,368,338,2424,");
rawData.push("Starmie,60,75,85,100,115,435,323,248,268,298,328,2414,");
rawData.push("Aerodactyl,80,105,65,60,130,440,363,308,228,218,358,2414,");
rawData.push("Tauros,75,100,95,70,110,450,353,298,288,238,318,2404,");
rawData.push("Ninetales,73,76,75,100,100,424,349,250,248,298,298,2388,");
rawData.push("Charizard,78,84,78,85,100,425,359,266,254,268,298,2370,");
rawData.push("Snorlax,160,110,65,65,30,430,523,318,228,228,158,2364,");
rawData.push("Venusaur,80,82,83,100,80,425,363,262,264,298,258,2364,");
rawData.push("Cloyster,50,95,180,85,70,480,303,288,458,268,238,2364,");
rawData.push("Electrode,60,50,70,80,140,400,323,198,238,258,378,2354,");
rawData.push("Hypno,85,73,70,115,67,410,373,244,238,328,232,2348,");
rawData.push("Flareon,65,130,60,110,65,430,333,358,218,318,228,2334,");
rawData.push("Victreebel,80,105,65,100,70,420,363,308,228,298,238,2334,");
rawData.push("Rapidash,65,100,70,80,105,420,333,298,238,258,308,2334,");
rawData.push("Blastoise,79,83,100,85,78,425,361,264,298,268,254,2328,");
rawData.push("Omastar,70,60,125,115,55,425,343,218,348,328,208,2324,");
rawData.push("Dewgong,90,70,80,95,70,405,383,238,258,288,238,2314,");
rawData.push("Nidoqueen,90,82,87,75,76,410,383,262,272,248,250,2296,");
rawData.push("Nidoking,81,92,77,75,85,410,365,282,252,248,268,2296,");
rawData.push("Golduck,80,82,78,80,85,405,363,262,254,258,268,2294,");
rawData.push("Electabuzz,65,83,57,85,105,395,333,264,212,268,308,2294,");
rawData.push("Scyther,70,110,80,55,105,420,343,318,258,208,308,2294,");
rawData.push("Raichu,60,90,55,90,100,395,323,278,208,278,298,2284,");
rawData.push("Kangaskhan,105,95,80,40,90,410,413,288,258,178,278,2284,");
rawData.push("Pidgeot,83,80,75,70,91,399,369,258,248,238,280,2280,");
rawData.push("Poliwrath,90,85,95,70,70,410,383,268,288,238,238,2274,");
rawData.push("Kabutops,60,115,105,70,80,430,323,328,308,238,258,2274,");
rawData.push("Magmar,65,95,57,85,93,395,333,288,212,268,284,2270,");
rawData.push("Magneton,50,60,95,120,70,395,303,218,288,338,238,2264,");
rawData.push("Pinsir,65,125,100,55,85,430,333,348,298,208,268,2264,");
rawData.push("Machamp,90,130,80,65,55,420,383,358,258,228,208,2254,");
rawData.push("Seadra,55,65,95,95,85,395,313,228,288,288,268,2254,");
rawData.push("Weezing,65,90,120,85,60,420,333,278,338,268,218,2254,");
rawData.push("Golbat,75,80,70,75,90,390,353,258,238,248,278,2254,");
rawData.push("Rhydon,105,130,120,45,40,440,413,358,338,188,178,2254,");
rawData.push("Venomoth,70,65,60,90,90,375,343,228,218,278,278,2244,");
rawData.push("Clefable,95,70,73,85,60,383,393,238,244,268,218,2240,");
rawData.push("Muk,105,105,75,65,50,400,413,308,248,228,198,2234,");
rawData.push("Tangela,65,55,115,100,60,395,333,208,328,298,218,2234,");
rawData.push("Dodrio,60,110,70,60,100,400,323,318,238,218,298,2234,");
rawData.push("Persian,65,70,60,65,115,375,333,238,218,228,328,2234,");
rawData.push("Vileplume,75,80,85,100,50,390,353,258,268,298,198,2224,");
rawData.push("Seaking,80,92,65,80,68,385,363,282,228,258,234,2220,");
rawData.push("Fearow,65,90,65,61,100,381,333,278,228,220,298,2208,");
rawData.push("Haunter,45,50,45,115,95,350,293,198,188,328,288,2204,");
rawData.push("Primeape,65,105,60,60,95,385,333,308,218,218,288,2204,");
rawData.push("Kingler,55,130,115,50,75,425,313,358,328,198,248,2204,");
rawData.push("Golem,80,110,130,55,45,420,363,318,358,208,188,2194,");
rawData.push("Sandslash,75,100,110,55,65,405,353,298,318,208,228,2194,");
rawData.push("Slowbro,95,75,110,80,30,390,393,248,318,258,158,2184,");
rawData.push("Jynx,65,50,35,95,95,340,333,198,168,288,288,2184,");
rawData.push("Kadabra,40,35,30,120,105,330,283,168,158,338,308,2184,");
rawData.push("Wigglytuff,140,70,45,50,45,350,483,238,188,198,188,2164,");
rawData.push("Mr. Mime,40,45,65,100,90,340,283,188,228,298,278,2134,");
rawData.push("Arbok,60,85,69,65,80,359,323,268,236,228,258,2122,");
rawData.push("Dragonair,61,84,65,70,70,350,325,266,228,238,238,2096,");
rawData.push("Weepinbell,65,90,50,85,55,345,333,278,198,268,208,2094,");
rawData.push("Ponyta,50,85,55,65,90,345,303,268,208,228,278,2094,");
rawData.push("Raticate,55,81,60,50,97,343,313,260,218,198,292,2084,");
rawData.push("Dugtrio,35,80,70,60,100,345,273,258,238,218,298,2074,");
rawData.push("Poliwhirl,65,65,65,50,90,335,333,228,228,198,278,2074,");
rawData.push("Charmeleon,58,64,58,65,80,325,319,226,214,228,258,2050,");
rawData.push("Ivysaur,60,62,63,80,60,325,323,222,224,258,218,2044,");
rawData.push("Machoke,80,100,70,50,45,345,363,298,238,198,188,2034,");
rawData.push("Hitmonlee,50,120,53,35,87,345,303,338,204,168,272,2028,");
rawData.push("Parasect,60,95,80,80,30,345,323,288,258,258,158,2024,");
rawData.push("Butterfree,60,45,50,80,70,305,323,188,198,258,238,2024,");
rawData.push("Wartortle,59,63,80,65,58,325,321,224,258,228,214,2008,");
rawData.push("Hitmonchan,50,105,79,35,76,345,303,308,256,168,250,2006,");
rawData.push("Gloom,60,65,70,85,40,320,323,228,238,268,178,2004,");
rawData.push("Marowak,60,80,110,50,45,345,323,258,318,198,188,1994,");
rawData.push("Tentacool,40,40,35,100,70,285,283,178,168,298,238,1984,");
rawData.push("Pidgeotto,63,60,65,50,71,309,329,218,228,198,240,1980,");
rawData.push("Nidorino,61,72,57,55,65,310,325,242,212,208,228,1976,");
rawData.push("Nidorina,70,62,67,55,56,310,343,222,232,208,210,1976,");
rawData.push("Porygon,65,60,70,75,40,310,333,218,238,248,178,1974,");
rawData.push("Lickitung,90,55,75,60,30,310,383,208,248,218,158,1974,");
rawData.push("Beedrill,65,80,40,45,75,305,333,258,178,188,248,1974,");
rawData.push("Gastly,30,35,30,100,80,275,263,168,158,298,258,1964,");
rawData.push("Graveler,55,95,115,45,35,345,313,288,328,188,168,1954,");
rawData.push("Drowzee,60,48,45,90,42,285,323,194,188,278,182,1948,");
rawData.push("Abra,25,20,15,105,90,255,253,138,128,308,278,1944,");
rawData.push("Onix,35,45,160,30,70,340,273,188,418,158,238,1944,");
rawData.push("Voltorb,40,30,50,55,100,275,283,158,198,208,298,1934,");
rawData.push("Staryu,30,45,55,70,85,285,263,188,208,238,268,1934,");
rawData.push("Farfetch'd,52,65,55,58,60,290,307,228,208,214,218,1914,");
rawData.push("Omanyte,35,40,100,90,35,300,273,178,298,278,168,1914,");
rawData.push("Seel,65,45,55,70,45,280,333,188,208,238,188,1914,");
rawData.push("Eevee,55,55,50,65,55,280,313,208,198,228,208,1904,");
rawData.push("Rhyhorn,80,85,95,30,25,315,363,268,288,158,148,1894,");
rawData.push("Growlithe,55,70,45,50,60,280,313,238,188,198,218,1884,");
rawData.push("Goldeen,45,67,60,50,63,285,293,232,218,198,224,1880,");
rawData.push("Exeggcute,60,40,80,60,40,280,323,178,258,218,178,1874,");
rawData.push("Magnemite,25,35,70,95,45,270,253,168,238,288,188,1864,");
rawData.push("Pikachu,35,55,30,50,90,260,273,208,158,198,278,1864,");
rawData.push("Koffing,40,65,95,60,35,295,283,228,288,218,168,1854,");
rawData.push("Bellsprout,50,75,35,70,40,270,303,248,168,238,178,1854,");
rawData.push("Horsea,30,40,70,70,60,270,263,178,238,238,218,1854,");
rawData.push("Kabuto,30,80,90,45,55,300,263,258,278,188,208,1854,");
rawData.push("Poliwag,40,50,40,40,90,260,283,198,178,178,278,1854,");
rawData.push("Clefairy,70,45,48,60,35,258,343,188,194,218,168,1840,");
rawData.push("Slowpoke,90,65,65,40,15,275,383,228,228,178,128,1834,");
rawData.push("Grimer,80,80,50,40,25,275,363,258,198,178,148,1834,");
rawData.push("Doduo,35,85,45,35,75,275,273,268,188,168,248,1834,");
rawData.push("Meowth,40,45,35,40,90,250,283,188,168,178,278,1834,");
rawData.push("Vulpix,38,41,40,65,65,249,279,180,178,228,228,1828,");
rawData.push("Machop,70,80,50,35,35,270,343,258,198,168,168,1814,");
rawData.push("Bulbasaur,45,49,49,65,45,253,293,196,196,228,188,1810,");
rawData.push("Oddish,45,50,55,75,30,255,293,198,208,248,158,1804,");
rawData.push("Krabby,30,105,90,25,50,300,263,308,278,148,198,1804,");
rawData.push("Mankey,40,80,35,35,70,260,283,258,168,168,238,1804,");
rawData.push("Charmander,39,52,43,50,65,249,281,202,184,198,228,1800,");
rawData.push("Sandshrew,50,75,85,30,40,280,303,248,268,158,178,1794,");
rawData.push("Cubone,50,50,95,40,35,270,303,198,288,178,168,1784,");
rawData.push("Venonat,60,55,50,40,45,250,323,208,198,178,188,1784,");
rawData.push("Shellder,30,65,100,45,40,280,263,228,298,188,178,1784,");
rawData.push("Dratini,41,64,45,50,50,250,285,226,188,198,198,1776,");
rawData.push("Psyduck,50,52,48,50,45,245,303,202,194,198,188,1774,");
rawData.push("Squirtle,44,48,65,50,43,250,291,194,228,198,184,1768,");
rawData.push("Jigglypuff,115,45,20,25,20,225,433,188,138,148,138,1764,");
rawData.push("Ditto,48,48,48,48,48,240,299,194,194,194,194,1762,");
rawData.push("Diglett,10,55,25,45,95,230,223,208,148,188,288,1754,");
rawData.push("Spearow,40,60,30,31,70,231,283,218,158,160,238,1738,");
rawData.push("Nidoran-F,55,47,52,40,41,235,313,192,202,178,180,1736,");
rawData.push("Nidoran-M,46,57,40,40,50,233,295,212,178,178,198,1732,");
rawData.push("Ekans,35,60,44,40,55,234,273,218,186,178,208,1722,");
rawData.push("Geodude,40,80,100,30,20,270,283,258,298,158,138,1714,");
rawData.push("Paras,35,70,55,55,25,240,273,238,208,208,148,1704,");
rawData.push("Zubat,40,45,35,40,55,215,283,188,168,178,208,1694,");
rawData.push("Pidgey,40,45,40,35,56,216,283,188,178,168,210,1688,");
rawData.push("Rattata,30,56,35,25,72,218,263,210,168,148,242,1684,");
rawData.push("Magikarp,20,10,55,20,80,185,243,118,208,138,258,1604,");
rawData.push("Kakuna,45,25,50,25,35,180,293,148,198,148,168,1564,");
rawData.push("Weedle,40,35,30,20,50,175,283,168,158,138,198,1564,");
rawData.push("Metapod,50,20,55,25,30,180,303,138,208,148,158,1564,");
rawData.push("Caterpie,45,30,35,20,45,175,293,158,168,138,188,1564,");

function GetPokemonData(pokemon){
    let data = "NaP";
    pokemon = pokemon.trim();

    for (let i = 0; i < 151; i++){
        if (rawData[i].includes(pokemon)){
            data = rawData[i];
            break;
        }
    }
    return data;
}