///import core
///commands 段落格式,居左,居右,居中,两端对齐
///commandsName  JustifyLeft,JustifyCenter,JustifyRight,JustifyJustify
///commandsTitle  居左对齐,居中对齐,居右对齐,两端对齐
/**
 * @description 居左右中
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     justify执行对齐方式的命令
 * @param   {String}   align               对齐方式：left居左，right居右，center居中，justify两端对齐
 * @author zhanyi
 */
UE.plugins['justify']=function(){
    $.each('justifyleft justifyright justifycenter justifyfull'.split(' '),function(i,cmdName){
        UE.commands[cmdName] = {
            execCommand:function (cmdName) {
                return this.document.execCommand(cmdName);
            },
            queryCommandValue: function (cmdName) {
                return   this.document.queryCommandValue(cmdName) === 'true' ? cmdName.replace(/justify/) : '';
            },
            queryCommandState: function (cmdName) {
                return this.document.queryCommandState(cmdName) ? 1 : 0
            }
        };
    })
};
