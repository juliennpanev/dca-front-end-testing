function switchPage() {
    $(document).ready(function () {
        activeControl();
        $("#deposit").trigger('click');
    });
    function activeControl() {
        $(".link-item").click(function () {
            $(".link-item.active").removeClass("active");
            $(this).addClass("active");
        });
        $("#deposit").click(function () {
            $(".deposit-content").css({ 'display': 'block' });
            $(".withdraw-content").css({ 'display': 'none' })
        })
        $("#withdraw").click(function () {
            $(".deposit-content").css({ 'display': 'none' });
            $(".withdraw-content").css({ 'display': 'block' })
        })

    }
}

export default switchPage;
