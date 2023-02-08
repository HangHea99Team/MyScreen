$(document).ready(function () {
    $('#text-advice').empty()
    $.ajax({
        type: "GET",
        url: "https://api.adviceslip.com/advice",
        data: {},
        success: function (response) {
            const advice = JSON.parse(response)
            let msg = advice['slip']['advice']
            $('#advice-text').text(msg)

        }
    })
});