//用于创建仓库初始状态，并导出一个函数。
const defaultStatus = {
    num: 1
}


//导出一个函数
//如果有警告就在其上一行加这行注释
//eslint-disable-next-line
export default (state=defaultStatus,action) =>{
    let newState = JSON.parse(JSON.stringify(state))
    // 推荐使用switch case
    // if(action.type==='addNum'){
    //     newState.num+=action.value;
    // }
    switch(action.type){
        case 'addNum':
            newState.num+=action.value;
            break;
        default:
            break;
    }
    return newState;
}