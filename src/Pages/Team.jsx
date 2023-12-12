import React from "react";
import TeamHeader from "../Components/TeamsComponents/TeamHeader/TeamHeader";
import Mission from "../Components/TeamsComponents/Mission/Mission";
import EdBio from "../Components/TeamsComponents/EdBio/EDBio";
import TeamMembers from "../Components/TeamsComponents/TeamMember/TeamMembers";
import PfLeaders from "../Components/TeamsComponents/PfLeaders/PfLeaders";
const Team =()=>{
    return(
        <>
<TeamHeader/>
<Mission/>
<EdBio/>
<TeamMembers/>
<PfLeaders/>
        </>
    )
}
export default Team;