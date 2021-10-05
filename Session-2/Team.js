'Use strict';

class Team {
    constructor(teamname) {
        this.teamname = teamname;
        this.trainername = "Dries";
        this.roster = ["Charmander", "Mew"];
    }

    describe() {
        return `Teamname: ${this.teamname} with trainer ${this.trainername}
        Pokemon: ${[...this.roster]}`;
    }
}

export default Team;