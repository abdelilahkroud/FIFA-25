
const btn = document.getElementById("changeFormation");


    btn.addEventListener("click", changeFormation);
    
    function changeFormation() {

    document.getElementById("btnFor").innerHTML = "4-3-3";

    const changePostGK = document.getElementById("GK");
    changePostGK.id = "GK-prime";
        
    const changePostCBL = document.getElementById("CBL");
    changePostCBL.id = "CBL-prime";

    const changePostCBR = document.getElementById("CBR");
    changePostCBR.id = "CBR-prime";

    const changePostLB = document.getElementById("LB");
    changePostLB.id = "LB-prime";

    const changePostRB = document.getElementById("RB");
    changePostRB.id = "RB-prime";

    const changePostDM = document.getElementById("DM");
    changePostDM.id = "DM-prime";

    const changePostCML = document.getElementById("CML");
    changePostCML.id = "CML-prime";

    const changePostCMR = document.getElementById("CMR");
    changePostCMR.id = "CMR-prime";

    const changePostLW = document.getElementById("LW");
    changePostLW.id = "LW-prime";

    const changePostRW = document.getElementById("RW");
    changePostRW.id = "RW-prime";

    const changePostST = document.getElementById("ST");
    changePostST.id = "ST-prime";

}
