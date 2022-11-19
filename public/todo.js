

function showTask() {
   
    var task =  document.getElementById('createTask').value;

    var d = document.createElement('div');
    d.className = "task-d";
    var p = document.createElement('p'); 
    const newContent = document.createTextNode(task);
    p.appendChild(newContent);
    p.className = "task-p";



    d.appendChild(p); 


    document.getElementById('TaskPanel').appendChild(d);
    // var div = document.getElementsByTagName('p');
    // console.log(div.innerHTML);
    // var p = document.createElement('p');


    //document.getElementById('createTask').value;
    // p.innerHTML = "<object data='todo-taskPane-iteml.html' width='500' height='200'></object>";
    // document.getElementById('TaskPanel').appendChild(p);


  



}





