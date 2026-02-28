function addTask() {
    const subjectInput = document.getElementById("subject");
    const deadlineInput = document.getElementById("deadline");
    const hoursInput = document.getElementById("hours");

    const subject=subjectInput.value;
    const deadline=deadlineInput.value;
    const hours=hoursInput.value;


    if(subject===""||deadline===""||hours===""){
        alert("Please fill all fields");
        return;
    }

    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.textContent = subject + " - " + deadline + " - " + hours + " hours ";

    // create delete button
    const deletebutton = document.createElement("button");
    deletebutton.textContent = "Delete";

    // delete logic
    deletebutton.onclick = function(){
        taskList.removeChild(li);
    };

    // attach button inside li
    li.appendChild(deletebutton);

    // then add li to list
    taskList.appendChild(li);

    //clear input
    subjectInput.value="";
    deadlineInput.value="";
    hoursInput.value="";

}