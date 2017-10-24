/**
 * 点击页面右上角联系我按钮以及点击邮件地址
 */
// 邮箱授权码 eakdgkwazzuibjea
$("#contactMe, #email").click(function () {
    $.confirm({
        title: '有什么话想发到老孙邮箱？',
        content: '' +
        '<form class="formName">' +
        '<div class="form-group">' +
        '<label>请在这里输入</label>' +
        '<textarea rows="3" class="name form-control" required />' +
        '</div>' +
        '<div class="form-group">'+
        '<label>请留下您的联系方式</label>'+
        '<input type="email" required placeholder="EmailAddress@xxx.xxx" class="email form-control">'+
        '</div>'+
        '</form>',
        buttons: {
            formSubmit: {
                text: '发送',
                btnClass: 'btn-blue',
                action: function () {
                    var name = this.$content.find('.name').val();
                    var email = this.$content.find('.email').val();
                    if(!name || !email){
                        $.alert('请输入内容哦😀');
                        return false;
                    }
                    $.ajax({
                        url: 'actions/sendEmail.php',
                        data: {
                            body : name,
                            email : email
                        },
                        type: 'post',
                        dataType: 'json',
                        async: false,
                        success: function (data, status) {
                            $.alert(data + " ; " + status);
                        },
                        error: function () {

                        }
                    });
                    $.alert("已经发送到老孙邮箱啦🙃");
                }
            },
            cancel: {
                text: '取消'
            }
        },
        onContentReady: function () {
            // bind to events
            var jc = this;
            this.$content.find('form').on('submit', function (e) {
                // if the user submits the form by pressing enter in the field.
                e.preventDefault();
                jc.$$formSubmit.trigger('click'); // reference the button and click it
            });
        }
    });
});

/**
 * 点击二手市场项目标题
 */
$("#markerTitle").click(function () {
    $.alert("部署不上😟😟😟");
});

/**
 * 点击webTM项目标题
 */
$("#webtmTitle").click(function () {
    $.alert("目前只有后台算法的代码😥");
});

/**
 * 点击仿真系统项目
 */
$("#project1_img1").click(function () {
    $.alert("后续会部署到服务器上。");
});
$("#project1_title").click(function () {
    $.alert("后续会部署到服务器上。");
});

/**
 * bootstrap提示工具初始化
 */
$(function () {
    $("[data-toggle='tooltip']").tooltip({
        html: true
    });
});

/**
 * bootstrap弹出框初始化
 */
// $(function (){
//     $("[data-toggle='popover']").popover({
//         html : true
//     });
// });