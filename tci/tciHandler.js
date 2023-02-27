import logoChanger from "./logochanger/logoChanger.js";
import setMaxAmounts from "./setMaxAmounts.js";
import activateDepositLP from "./callables/deposit.js";
import activateWithdrawTCI from "./callables/withdraw.js";

function manageTCI() {
    logoChanger();
    setMaxAmounts();
    activateDepositLP();
    activateWithdrawTCI();
}

export default manageTCI;