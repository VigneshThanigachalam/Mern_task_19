const get_workday=async(country_code,start_date,end_date)=>{    
    const respond=await fetch(`https://holidayapi.com/v1/workdays?pretty&key=666a6e88-5caa-4eb8-9a27-dee9f6b9113c&country=${country_code}&start=${start_date}&end=${end_date}`);
    const days=await respond.json();  
    document.getElementById("no_days").innerHTML=days.workdays;    // console.log(days.workdays);
}


const days=await respond.json();
document.getElementById("no_days").innerHTML=days.workdays;// console.log(days.workdays);}
const form_data=document.getElementById("details");
form_data.addEventListener('submit',(e)=>{
    e.preventDefault();
     const data={};
    Array.from(e.target.elements).forEach((element)=>{
         if(element.nodeName=="INPUT"){ data[element.name]=element.value;
     }});// console.log(data);
 get_workday(data.country,data.start_date,data.end_date)});