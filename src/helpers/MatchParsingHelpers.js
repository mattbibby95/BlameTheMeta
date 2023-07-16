export function getPlayersByTeam(team, match) {
    function filterFunction(player){
        if(team === 'radiant' && player.isRadiant){
            return true;
        }
        if(team !== 'radiant' && !player.isRadiant){
            return true;
        }
        return false;
    }
    const teamToReturn = match.players.filter(filterFunction)
    return teamToReturn
}

export function determineWinrateForHero(heroId, allHeroData){
    const heroData = allHeroData.find((hero) => hero.id === heroId)
    // CBA to filter through this with regex or something and select num_pick and num_win
    const timesPicked = heroData['1_pick'] + heroData['2_pick'] + heroData['3_pick'] + heroData['4_pick'] + heroData['5_pick'] + heroData['6_pick'] + heroData['7_pick'] + heroData['8_pick'];
    const timesWon =  heroData['1_win'] + heroData['2_win'] + heroData['3_win'] + heroData['4_win'] + heroData['5_win'] + heroData['6_win'] + heroData['7_win'] + heroData['8_win'];
    const winRate = timesWon / timesPicked * 100;
    return winRate;
}