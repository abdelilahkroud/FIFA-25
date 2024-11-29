
const btn = document.getElementById("changeFormation");

    var bool = true;

    btn.addEventListener("click", () => {
        if(bool) {
            console.log(bool);
            
            changeFormation();
            bool = false;
        }
        else{            
            defaultFormation();
            bool=true
        }
    });


  
    
    function changeFormation() {

    document.getElementById("btnFor").innerHTML = "3-4-3";
    

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

    localStorage.setItem("name", "KROUD");


}

    function defaultFormation(){

        document.getElementById("btnFor").innerHTML = "4-3-3";
        const changePostGK = document.getElementById("GK-prime");
    changePostGK.id = "GK";
        
    const changePostCBL = document.getElementById("CBL-prime");
    changePostCBL.id = "CBL";

    const changePostCBR = document.getElementById("CBR-prime");
    changePostCBR.id = "CBR";

    const changePostLB = document.getElementById("LB-prime");
    changePostLB.id = "LB";

    const changePostRB = document.getElementById("RB-prime");
    changePostRB.id = "RB";

    const changePostDM = document.getElementById("DM-prime");
    changePostDM.id = "DM";

    const changePostCML = document.getElementById("CML-prime");
    changePostCML.id = "CML";

    const changePostCMR = document.getElementById("CMR-prime");
    changePostCMR.id = "CMR";

    const changePostLW = document.getElementById("LW-prime");
    changePostLW.id = "LW";

    const changePostRW = document.getElementById("RW-prime");
    changePostRW.id = "RW";

    const changePostST = document.getElementById("ST-prime");
    changePostST.id = "ST";

    }