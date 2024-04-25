
async function api() {
    const response = await fetch("https://node-9n0t.onrender.com/usersData");
    let data = await response.json();
    data = data.reverse()
    console.log(data);
    function Insert_Data() {
      document.getElementById("count").innerHTML= 'Total Records : '+data.length;
      var table = document.getElementById("datas");
      table.innerHTML="";
      var tr="";
      data.forEach((x,index)=>{
        let i=0;
         tr+='<tr>';
         tr+='<td style="padding-right: 30px;">'+(index+1)+'</td>'+'<td style="padding-right: 30px;">'+x.name+'</td>'+'<td style="padding-right: 30px;">'+x.phone+'</td>'+'<td style="padding-right: 10px">'+x.message+'</td>'+'<td>'+new Date(x.date).toLocaleString()+'</td>'
         tr+='</tr>'
         i=i+1
    
      })
      table.innerHTML+=tr;
    }
    Insert_Data()
  }
  api();

  function save(){
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let data = {"name":name,"phone":phone,"message":message};
    if(name || phone || message){
        fetch("https://node-9n0t.onrender.com/addUsers",{
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }).then(res=>{
            if(res){
                document.getElementById("name").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("message").value = "";
                alert("Message Sent Sucessfully")
            }
        })
    }
}

// async function getData(){
//     const response = await fetch("https://node-9n0t.onrender.com/usersData");
//     const data = await response.json();
//     console.log(data);
// }
  