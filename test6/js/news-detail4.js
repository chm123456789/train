  
$(document).ready(function () {
    axios.get('https://mock-api.com/vzMZvbgG.mock/detail4')
        .then(function (res) {
            console.log("res", res.data);
            var i;
            var item;
            for (i = 0; i < res.data.length; ++i) {
                item = res.data[i];
                console.log('item', item);
                $('#four').append('<h4 style="text-align: center;">' + item.title  +'</h4>' + '<p>' + item.detail + '</p>' );
            }
        })
        .catch(function (e) {
            console.log('e', e);
        });
    console.log('continue');
});
