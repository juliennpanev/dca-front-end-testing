function checkInput() {
    $("#deposit-price").on("input", function() {
        if (/^0/.test(this.value)) {
          this.value = this.value.replace(/^0/, "")
        }
      })
      
}

export default checkInput;