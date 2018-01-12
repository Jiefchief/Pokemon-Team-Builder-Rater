let test = document.querySelector("html");
/*for (let jo = 0; jo < 2; jo++){
    console.log("test loop" + jo);
}*/
test.onmousewheel = dothing;

function dothing (){
    let txt = test.querySelector("textarea").innerHTML;
    if (!txt.includes("Level")){
        ParsePSData(txt);
    }
    else{
        test.querySelector("textarea").innerHTML = "STOP TRYING TO BREAK MY EXTENSION (ﾉಠдಠ)ﾉ︵┻━┻";
    }
}

function ParsePSData(data){
    let arrayOfLines = data.match(/[^\r\n]+/g);
    //console.log(arrayOfLines[1]);
    DoCalc(arrayOfLines);
}

function DoCalc(data){ //0, 9
    let teamStatVal = 0;
    
    for (let j = 0; j < 6; j++){
        
        let i = j * 8;
        console.log(data[i]);
        teamStatVal += (GetBaseStats(data[i])[0] + GetBaseStats(data[i])[3] + GetBaseStats(data[i])[4] + (GetBaseStats(data[i])[1] / 2) + (GetBaseStats(data[i])[2] / 2)) * 2; //[hp + spec + speed + (atk/2) + (def/2)] * 2
        
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
