import logoChanger from "./logoChanger.js";
import setMaxAmounts from "./setMaxAmounts.js";
import activateDepositLP from "./callables/deposit.js";
import activateWithdraw from "./callables/withdraw.js";
import getLockedInBoosting from "./getBoositng.js";
import getInvestedAmount from "./getInvestedAmounts.js";
import setTciInfo from "./getTciInfo.js";

const tciProgramLink = document.getElementById('TCI');

function manageTCI() {
    tciProgramLink.addEventListener('click', () => {
        getLockedInBoosting();
        logoChanger();
        setMaxAmounts();
        activateWithdraw();
        activateDepositLP();
        getInvestedAmount();
        setTciInfo();
    }
    )
}
    

export default manageTCI;