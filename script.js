let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let ans = arr.filter(function(value, index){return value.profession ==="developer"})
    ans.map(function(value){console.log("Printed via using Map:", value)})
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(value, index)){
      if(value.profession==="developer"){
        console.log("Printed via using ForEach", value)
      }
    }

    }
  
  
  function addData() {
    //Write your code here, just console.log
    let newData = {
      id:4,
      name:"Kunal",
      age:"20",
      profession:"intern",
    }
    arr.push(newData);
    console.log("Updated array after adding new data:", arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let ans = arr.filter(function(value, index){return value.profession!=="admin"})
    console.log("After deleting Profession:Admin :" ,ans)
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr=[
      {id: 5, name: "emma", age:"22", profession:"designer"},
      {id:6, name:"alex", age:"24", profession:"analyst"},
      {id:7, name:"ryan", age:"21", profession:"engineer"},
    ];
    arr= [...arr, ...newArr]
    console.log("Updated array after adding newObject:", arr)
  }