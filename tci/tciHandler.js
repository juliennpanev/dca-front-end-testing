import logoChanger from "./logochanger/logoChanger.js";
import setMaxAmounts from "./setMaxAmounts.js";
import activateDepositLP from "./callables/deposit.js";
import activateWithdrawTCI from "./callables/withdraw.js";
import getLockedInBoosting from "./getBoositng.js";

const tciProgramLink = document.getElementById('TCI');

function manageTCI() {
    tciProgramLink.addEventListener('click', () => {
        getLockedInBoosting();
        logoChanger();
        setMaxAmounts();
        activateWithdrawTCI();
        activateDepositLP();
    }
    )
}
    

export default manageTCI;