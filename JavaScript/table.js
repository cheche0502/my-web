//新增数据函数
/*function addrow(){
    var table = document.getElementById('table');//获取表格标签这个节点我们才能添加
    //console.log(table);
    var length = table.rows.length;
    //console.log(length);

    //插入行节点
    var newRow = table.insertRow(length);
    console.log(newRow);
    
}     */
function addrow(){
            var table = document.getElementById('table');//获取表格标签这个节点我们才能添加
            //console.log(table);
            
            // 获取表格当前行数
            var length = table.rows.length;
            console.log(length);

            //插入行节点
            var newRow = table.insertRow(length);
            
            // 创建单元格并设置内容
            var cell1  = newRow.insertCell(0);//这个insertCell是专门为表格设计的函数
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            
            cell1.innerHTML = "新用户";
            cell2.innerHTML = "无联系方式";
            cell3.innerHTML = '<button>编辑</button> <button>删除</button>';
        }          