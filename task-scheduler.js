const taskList=[
    {
        taskName:'sum of digit',
        dueDate:new Date("jan 1, 2024 01:15:00"),
        priority:'1',
        completed:'no',
        getTaskDetails:()=>
        {
    
        },
        toggleCompletion:()=>
        {
    
        }
    },
    {
        taskName:'array sum',
        dueDate:new Date("jan 13, 2024 01:15:00"),
        priority:'2',
        completed:'no',
        getTaskDetails:()=>
        {
    
        },
        toggleCompletion:()=>
        {
    
        }
    },
    {
        taskName:'add numbers',
        dueDate:new Date("jan 23, 2024 01:15:00"),
        priority:'3',
        completed:'no',
        getTaskDetails:()=>
        {
    
        },
        toggleCompletion:()=>
        {
    
        }
    },
    {
        taskName:'print string',
        dueDate:new Date("jan 27, 2024 01:15:00"),
        priority:'4',
        completed:'no',
        getTaskDetails:()=>
        {
    
        },
        toggleCompletion:()=>
        {
    
        }
    },
    {
        taskName:'print array',
        dueDate:new Date("feb 1, 2024 01:15:00"),
        priority:'5',
        completed:'no',
        getTaskDetails:()=>
        {
    
        },
        toggleCompletion:()=>
        {
    
        }
    },
];
const uploadBtnEle=document.querySelectorAll('.upload-btn');
let htmlcode=`<tr>
        <th>taskName</th>
        <th>dueDate</th>
        <th>priority</th>
        <th>completed</th>
        <th>submit</th>
    </tr>`;

    for(let i=0;i<taskList.length;i++)
    {
        htmlcode+=`<tr>
            <td>${taskList[i].taskName}</td>
            <td>${taskList[i].dueDate.getDate()}.${taskList[i].dueDate.getMonth()+1}.${taskList[i].dueDate.getFullYear()}</td>
            <td>${taskList[i].priority}</td>
            <td>${taskList[i].completed}</td>
            <td class="upload-btn"><a href="" class="upload-btn">upload</a></td>`;
    }
    document.querySelector('table').innerHTML=htmlcode;
    document.querySelector('.upload-btn').addEventListener('click',()=>{
        document.querySelector('.main-box').classList.remove('hidden');
    })
    