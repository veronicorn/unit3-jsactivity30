const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];


const command = prompt('enter a command');

//print
if (command.toLowerCase() === 'print'){
  for (let i = 0; i < employeeList.length; i++){
  render(employeeList[i].name);
  render(employeeList[i].officeNum);
  render(employeeList[i].phoneNum);
  render('----------');
  }
}

//verify
else if (command.toLowerCase() === 'verify'){

  const verify = prompt('enter an employee name to verify');
  const message = false;

  for (i = 0; i < employeeList.length; i++){
    if (verify === employeeList[i].name.toLowerCase()){
    message = true;
    }
  }

  render(message);
}

//lookup
else if (command.toLowerCase() === 'lookup'){

  const lookup = prompt('enter an employee name to lookup contact details');

  for (i = 0; i < employeeList.length; i++){
    if (lookup === employeeList[i].name.toLowerCase()){
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum); 
    }
  }
}

//contains string
else if (command.toLowerCase() === 'contains'){

  const inputString = prompt('enter a string to list employees');

  for (i = 0; i < employeeList.length; i++){
    if (employeeList[i].name.toLowerCase().includes(inputString)){
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum); 
    }
  }
}

//update--fix case sensitivity issue with this one
else if (command.toLowerCase() === 'update'){

  const updateName = prompt('enter an employee name to update');
  const updateField = prompt('enter officeNum or phoneNum to update');
  const newValue = prompt('enter a value to update');

  for (let i = 0; i < employeeList.length; i++){
    if (updateName === employeeList[i].name.toLowerCase()){
      if (updateField === "officeNum"){
        employeeList[i].officeNum = newValue;
      }
      else if (updateField === "phoneNum"){
        employeeList[i].phoneNum = newValue;
      }
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum); 
    }
  }
}

//add
else if (command.toLowerCase() === 'add'){

  const employeeName = prompt('enter a new employee name to add to directory');
  const officeNum = prompt('enter new employee office number');
  const telephoneNum = prompt('enter new employee telephone number');

  employeeList.push({name: employeeName, officeNum: officeNum, phoneNum: telephoneNum});
  
  for (i = 0; i < employeeList.length; i++){
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
  }
}

//delete
else if (command.toLowerCase() === 'delete'){

  const deleteEmployeeName = prompt('enter the name of an employee to delete');
  const index = -1;

  for (i = 0; i < employeeList.length; i++){
    if (employeeList[i].name.toLowerCase() === deleteEmployeeName){
      index = i;
    }
  }

  employeeList.splice(index, 1);
    for (i = 0; i < employeeList.length; i++){
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
    }
}