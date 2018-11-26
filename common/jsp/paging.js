 
var pagingfn = {
    type : "default", //  fix or default. 
    offset : "5",
    totalCnt : "0", 
    currPage : "1",
    splitCnt : "10",   
    class_btnfirst : "btnpage-first",   
    class_btnprev : "btnpage-prev",     
    class_btnnext : "btnpage-next",     
    class_btnlast : "btnpage-last",     
    class_btncurrent : "btnpage-list current",   
    class_btnlist : "btnpage-list",   
    initPage : function(){   
    pagingfn.currPage = 1;
        if (pagingfn.offset%2 == "0")
            pagingfn.offset = parseInt(pagingfn.offset)+1;
        pagingfn.makePageNav(1);  
    } ,
    appendListStr : function(){},
    makePageNav : function(i) { 
        var str = "";
        var totalPage = Math.ceil((pagingfn.totalCnt / pagingfn.splitCnt)); 
        str = pagingfn.makePageNavStr(totalPage, i);
        $("#pageNav").empty();
        $("#pageNav").append(str);
        pagingfn.appendListStr(); 
    } ,
      makePageNavStr : function(totalPage, curr) {
        pagingfn.currPage = curr;
        var i = 1; 
        var str = "";
        if (pagingfn.offset < totalPage && pagingfn.currPage > 2) {   
            str += " <a href=\"javascript:pagingfn.makePageNav('1');\" class=\""+pagingfn.class_btnfirst+"\">처음 페이지</a>";
        }
        if (pagingfn.currPage > 1) {  
            str += " <a href=\"javascript:pagingfn.makePageNav('" + parseInt(parseInt(pagingfn.currPage) - 1) + "');\" class=\""+pagingfn.class_btnfirst+"\">이전 페이지</a>";
        }
        var multiplyCnt = Math.ceil((pagingfn.currPage / pagingfn.offset)); 
        var temp=1;
        
        var endOffset = pagingfn.offset;
        endOffset = endOffset * multiplyCnt;  
        if (endOffset > totalPage)
            endOffset = totalPage; 
        if (pagingfn.type === "default"){ 
            while (temp < multiplyCnt) {  
                i = i + parseInt(pagingfn.offset);
                temp += 1;
            }  
            while (i <= endOffset) { 
                if (i == pagingfn.currPage) {
                    str += "<a href=\"#\" class=\""+pagingfn.class_btncurrent+"\">" + i + "</a>";
                }
                else {
                    str += "<a href=\"javascript:pagingfn.makePageNav('"+i+"');\" class=\""+pagingfn.class_btnlist+"\"> " + i + " </a>";
                }
                i += 1;
            }
        }
        else{ 
            while (temp < multiplyCnt) {  
                i = i + parseInt(pagingfn.offset);
                temp += 1;
            }   
            while (i <= endOffset) { 
                if (i == pagingfn.currPage) {
                    str += "<a href=\"#\" class=\""+pagingfn.class_btncurrent+"\">" + i + "</a>";
                }
                else {
                    str += "<a href=\"javascript:pagingfn.makePageNav('"+i+"');\" class=\""+pagingfn.class_btnlist+"\"> " + i + " </a>";
                }
                i += 1;
            } 
        }
        if (pagingfn.currPage < totalPage) {
            str += " <a href=\"javascript:pagingfn.makePageNav('" + parseInt(parseInt(pagingfn.currPage) + 1) + "');\" class=\""+pagingfn.class_btnnext+"\">다음 페이지</a>";
        }
        if (pagingfn.offset < totalPage && pagingfn.currPage < totalPage) {
            str += " <a href=\"javascript:pagingfn.makePageNav('" + totalPage + "');\" class=\""+pagingfn.class_btnlast+"\">마지막 페이지</a>";
        }
        return str;
    } 
}