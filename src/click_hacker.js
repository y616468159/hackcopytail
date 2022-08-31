(function () {
    // CSDN 关注博主即可阅读全文
    let nodeArr = document.getElementsByClassName('hide-article-box hide-article-pos text-center');
    if (nodeArr.length === 1) {
        nodeArr[0].remove();
        let contentNode = document.getElementById('article_content');
        contentNode.style.height = '';
        contentNode.style.overflow = '';
    }

    // CSDN 免登录复制
    function doSome(nodeArr) {
        for(let item of nodeArr) {
            item.style.setProperty('user-select', 'text')
        };
    }
    doSome(document.querySelectorAll('#content_views pre'))
    doSome(document.querySelectorAll('#content_views pre code'));

    // CSDN 可编辑
    chrome.storage.local.get('editableCSDN', (result) => {
        if (result.editableCSDN) {
            document.body.contentEditable='true';
            document.designMode='on';
        }
    })

    chrome.storage.onChanged.addListener(function(changes, namespace) {
        if (changes.editableCSDN.newValue) {
            document.body.contentEditable = 'true';
            document.designMode = 'on';
        } else {
            document.body.contentEditable = 'inherit';
            document.designMode = 'off';
        }
    });
})();

let more_btn = document.getElementById("btn-readmore");

if (more_btn) {
    more_btn.click();
}