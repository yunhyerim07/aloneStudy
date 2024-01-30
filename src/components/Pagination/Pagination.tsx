const maxPageCnt = 10;
let resultList = [];
function getPaginationArr(currPage, pageCnt) {
  if ((currPage + 1) % maxPageCnt === 1) {
    const idx = 1;
    resultList = [currPage];
    while (resultList.length < maxPageCnt && currPage + idx < pageCnt) {

    }
  }
}
