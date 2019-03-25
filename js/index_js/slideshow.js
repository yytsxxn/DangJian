
    window.onload = function () {
        var ide
        ide = $('.btn-box li').index();//当页面加载完成后获取li的索引

        // 数字键切换图片
        $('.btn-box li').on('click', function () {
            $(this).addClass('sel').siblings().removeClass('sel')
            ide = $(this).index();
            $('.img-box img').eq($(this).index()).addClass('active').siblings().removeClass('active');
        })

        // 上一张图片切换
        $('#prew').on('click', function () {
            ide = ide - 1;
            if(ide==-1){
                ide=$('.btn-box li').length-1;
            }
            $('.btn-box li').eq(ide).addClass('sel').siblings().removeClass('sel')
            $('.img-box img').eq(ide).addClass('active').siblings().removeClass('active');
            
        })

        // 下一张图片切换
        $('#arrow').on('click', function () {
            ide = ide + 1;
            if(ide==$('.btn-box li').length){
                ide=0;
            }
            $('.btn-box li').eq(ide).addClass('sel').siblings().removeClass('sel');
            $('.img-box img').eq(ide).addClass('active').siblings().removeClass('active');
        })
    }
