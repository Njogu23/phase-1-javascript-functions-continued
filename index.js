function saturdayFun(event = 'roller-skate'){
    return `This Saturday, I want to ${event}!`;
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(string){
    return function(adjective = 'special'){
        return `You are ${string}${adjective}${string}!`
    }
}