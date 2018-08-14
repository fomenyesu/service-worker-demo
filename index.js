if ('serviceWorker' in navigator) {
    console.log('浏览器支持serviceWorker')
    $('#isSupport').text('支持');


    // 开始注册service workers
    navigator.serviceWorker.register('./sw-demo-cache.js', {
        scope: './'
    }).then(registration => {
        console.log('service worker注册成功:', registration)
        $('#isSuccess').text('注册成功');

        let serviceWorker
        if (registration.installing) {
            serviceWorker = registration.installing
            console.log('当前注册状态：installing')
            $('#state').text('installing');
        } else if (registration.waiting) {
            serviceWorker = registration.waiting
            console.log('当前注册状态：waiting')
            $('#state').text('waiting');
        } else if (registration.active) {
            serviceWorker = registration.active
            console.log('当前注册状态：active')
            $('#state').text('active');
        }
        if (serviceWorker) {
            console.log(serviceWorker.state)
            $('#swState').text(serviceWorker.state);
            serviceWorker.addEventListener('statechange', e => {
                console.log('&emsp;状态变化为' + e.target.state)
                $('#swState').append('&emsp;状态变化为' + e.target.state);
            })
        }
    }).catch(error => {
        console.log('service worker注册失败:', error)
        $('#isSuccess').text('注册没有成功');
    })
} else {
    console.log('浏览器不支持serviceWorker')
    $('#isSupport').text('不支持');
}

fetch('https://api.github.com/_private/browser/stats', {
	method: 'get'
}).then(function(response) {
	console.log(response);
}).catch(function(err) {
	// Error :(
    console.log(err);
});
setTimeout(()=>{
fetch('https://api.github.com/_private/browser/stats', {
	method: 'get'
}).then(function(response) {
	console.log(response);
}).catch(function(err) {
	// Error :(
    console.log(err);
});
})



