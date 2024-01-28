import { Injectable } from '@angular/core';
import { BaseDto } from '../Models/BaseDto';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }


  Countrys:BaseDto[]=[{
    id:1,
    name:"India",
    
  },
  {
    id:2,
    name:"Uae",
  },
  {
    id:3,
    name:"Us",
  }
]

Skills:BaseDto[]=[{
  id:1,
  name:"java",
  
},
{
  id:2,
  name:"c++",
},
{
  id:3,
  name:"Angualr",
},
{
  id:4,
  name:"React",
}

]

Degree:BaseDto[]=[{
  id:1,
  name:"MCA",
  
},
{
  id:2,
  name:"BCA",
},
{
  id:3,
  name:"MBA",
}]


Days:BaseDto[]=[{
  id:1,
  name:"1",
  
},
{
  id:2,
  name:"2",
},
{
  id:3,
  name:"3",

},
{
  id:4,
  name:"4",
},
{
  id:5,
  name:"5",

},
{
  id:6,
  name:"6",
},
{
  id:7,
  name:"7",

},
{
  id:8,
  name:"8",
},
{
  id:9,
  name:"9",

},
{
  id:10,
  name:"10",
},
{
  id:11,
  name:"11",

},
]
Deignation:BaseDto[]=[
  {
    id:4,
    name:"Full-stack developer",
  },
  {
    id:5,
    name:"Anguale Developer",
  },
  {
    id:6,
    name:".Net developer",
  },
  {
    id:7,
    name:"Manager",
  },
  {
  
  id:1,
  name:"Team Lead",
  
},
]

Employer:BaseDto[]=[
  {
    id:4,
    name:"InfoTech",
  },
  {
    id:5,
    name:"IBM",
  },
  {
    id:6,
    name:"Google",
  },
  {
    id:7,
    name:"FaceBook",
  },
  {
  id:1,
  name:"Oracle",
  
},
]

Visa:BaseDto[]=[
  {
    id:4,
    name:"Visit",
  },
  {
    id:5,
    name:"Uae Residents",
  },
  {
    id:6,
    name:"Student Visa",
  },
  {
    id:7,
    name:"Green Visa",
  },
  {
  
  id:1,
  name:"Family visa",
  
},
]

Nationality:BaseDto[]=[
  {
    id:4,
    name:"India",
  },
  {
    id:5,
    name:"Uae",
  },
  {
    id:6,
    name:"Us",
  },
  {
    id:7,
    name:"China",
  },
  {
  
  id:1,
  name:"Russia",
  
},
]

University:BaseDto[]=[
  {
    id:4,
    name:"Abu Dhabi University",
  },
  {
    id:5,
    name:"Al Ain University",
  },
  {
    id:6,
    name:"Khalifa University",
  },
  {
    id:7,
    name:"New York University, Abu Dhabi",
  },
  {
  
  id:1,
  name:"British University College",
  
},
]

Religion:BaseDto[]=[
  {
    id:4,
    name:"Buddhism",
  },
  {
    id:5,
    name:"Islam",
  },
  {
    id:6,
    name:"Judaism",
  },
  {
    id:7,
    name:"Hinduism",
  },
  {
  
  id:1,
  name:"Sikhism",
  
},
{
  
  id:9,
  name:"Christianity",
  
},
]

CountryCode:BaseDto[]=[
  {
    id:4,
    name:"+971",
  },
  {
    id:5,
    name:"+91",
  },
  {
    id:6,
    name:"+1",
  },
  {
    id:7,
    name:"+7",
  },
  {
  
  id:1,
  name:"+86",
  
},

]


Currency:BaseDto[]=[
  {
    id:4,
    name:"INR	₹",
  },
  {
    id:5,
    name:"EGP	£",
  },
  {
    id:6,
    name:"CAD	$",
  },
  {
    id:7,
    name:"USD	$",
  },
  {
  
  id:1,
  name:"CRC	₡",
  
},
]


Months:BaseDto[]=[
  {
    id:4,
    name:"Januvary",
  },
  {
    id:5,
    name:"February",
  },
  {
    id:6,
    name:"March",
  },
  {
    id:7,
    name:"April",
  },
  {
  
  id:1,
  name:"May",
  
},
]

fieldOfstudy:BaseDto[]=[
  {
    id:4,
    name:"Engineering",
  },
  {
    id:5,
    name:"Medicin",
  },
  {
    id:6,
    name:"Law",
  },
  {
    id:7,
    name:"Psychology",
  },
  {
  
  id:1,
  name:"Chemistry",
  
},
{
  id:2,
  name:"Literature",
},
{
  id:3,
  name:"Administration",
}  
]
Stats:BaseDto[]=[
  {
    id:4,
    name:"Dubai",
  },
  {
    id:5,
    name:"Abu dhabi",
  },
  {
    id:6,
    name:"Ajman",
  },
  {
    id:7,
    name:"Tamilnadu",
  },
  {
  
  id:1,
  name:"Karnadaka",
  
},
{
  id:2,
  name:"Delhi",
},
{
  id:3,
  name:"kerala",
}  
]


Yeras:BaseDto[]=[
  {
    id:4,
    name:"2024",
  },
  {
    id:5,
    name:"2023",
  },
  {
    id:6,
    name:"2022",
  },
  {
    id:7,
    name:"2021",
  },
  {
  
  id:1,
  name:"2020",
  
},
{
  id:2,
  name:"2019",
},
{
  id:3,
  name:"2018",
}
]

HigestEducation:BaseDto[]=[{
  id:1,
  name:"Masters",
  
},
{
  id:2,
  name:"Bachelore Degree",
},
{
  id:3,
  name:"Doctrate",
}]

  
State:BaseDto[]=[{
  id:1,
  name:"Delhi",
  
},
{
  id:2,
  name:"Duabi",
},
{
  id:3,
  name:"California",
}


]
}
