// $("#add").click(function(){
//   alert("Hello!");
// });

// 給定區塊變數，方便之後操作


// --------------------------------------------------
// 定義新增的 Task

// var generateElement = function(task){

//   var parent = $(); // 新增的 Task 直接放到 Pending

//   var wrapper = $("<div />", { // 新增一個 div

//   }).appendTo();

//   $("<div />", {

//   }).appendTo();

//   $("<div />", {
//   }).appendTo();

//   $("<div />", {

//   }).appendTo();
// };


// --------------------------------------------------
// 設定 Local Storage

// var i = 0;
// for (i = 0; i < localStorage.length; i++) {

//   var taskID = "task-" + i;

//   // 把資料從 Local Storage 取出來
//   var data = JSON.parse(localStorage.getItem(taskID));

//   generateElement(data);

// }


// --------------------------------------------------
// 新增資料

// $().click(function () {
//   if () {

//     var taskID = "task-" + i;

//     // 取得輸入格的值
//     var

//     // 設定傳入 generateElement 的資料
//     var taskInfo = {
//       "id" : taskID,
//       "code": "1",
//       "title": title,
//       "date": date,
//       "description": description
//     };

//     // 呼叫新增 Task 的函式

    
//     // 存入 Local Storage
//     localStorage.setItem(taskID, JSON.stringify(taskInfo));


//     // 清空輸入格


//     i++;
//   }

//   else if () { 
//     alert();
//     return;
//   };

//   $(".todo-task").draggable({ revert: true, revertDuration:200 });

// });


// --------------------------------------------------
// 清空輸入的資料

// var clearInput = function() {
// }

// $().click(function(){
// })


// --------------------------------------------------
// 新增刪除功能

// $("#delete-div").droppable({
//   drop: function(event, ui) {
//     var element = ui.helper, // Task 本身
//         taskID = element.attr("id"); // 取得 Task 的 ID

//     element.remove(); // 刪除物件的 HTML

//     if(taskID[5] == (localStorage.length - 1)){ // taskID = "task-n", taskID[5] = n
//       localStorage.removeItem(taskID);
//     }
//     //如果有一個以上的 Task，必須更新 Local Storage
//     else if(localStorage.length > 1){

//       var start = Number(taskID[5]) + 1; // n+1

//       for(j = start; j <= localStorage.length; j++){ // 取得大於 n 之後的所有數字 

//         var taskID = "task-" + j;

//         var data = JSON.parse(localStorage.getItem(taskID)); // 將 "task-(n+1)" 取出來
//         localStorage.removeItem(taskID); // 將 "task-(n+1)" 刪除

//         taskID = "task-" + (j - 1); // 將 "task-(n+1)" 改回 "task-n"
//         data.id = taskID;
//         localStorage.setItem(taskID, JSON.stringify(data)); // 將 "task-n" 存回去
//       }
//     }
//   }
// });


// --------------------------------------------------
// 讓每個 Section 都可以被 Drop

// $.each(codes, function(index, value) {
//   $(value).droppable({
//     drop: function(event, ui) {
//       var element = ui.helper,
//           taskID = element.attr("id");

//       element.remove(); // 刪除原本的物件

//       var data = JSON.parse(localStorage.getItem(taskID));
//       localStorage.removeItem(taskID);
//       data.code = index;
//       generateElement(data);
//       localStorage.setItem(taskID, JSON.stringify(data));

//       $(".todo-task").draggable({ revert: true, revertDuration:200 });
//     }
//   });
// });
