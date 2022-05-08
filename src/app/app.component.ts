import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'firstIdea';
   myForm:any =FormGroup;
  constructor(private http: HttpClient,private formB:FormBuilder) {
   // this.onSubmit()
  
  }


  ngOnInit(): void {
    this.myForm = this.formB.group({
      first_name:'',
      last_name : '',
      email:'',
      message:'',
    
    }
      )
      let abc = document.getElementById('exampleModal');
      console.log(abc)
 
      
  }
  onSubmit(FormData:FormGroup) {
    console.log(FormData.value)
    console.log(FormData.valid)
    if(this.myForm.value.email == ''){
      return
    }
    let data = {
      service_id: "service_qy2xzxw",
      template_id: 'template_4n2zhwf',
      user_id: 'kK966v7aBlCURHQor',
      template_params: {
        wesite_name:"ideaFirst",
        from_name:FormData.value.first_name + ' '+ FormData.value.last_name,
        to_name:"Nitin Goswami",
        email:FormData.value.email,
        message:FormData.value.message ,
        
       
      }
      
    };
   
  
    this.http.post('https://api.emailjs.com/api/v1.0/email/send', data, { responseType: 'text' })
      .subscribe((result) => {
        this.myForm.reset();
        let abc = document.getElementById('exampleModal');
    console.log(abc)
   
       
        
            }, (error: HttpErrorResponse) => {
        console.log(error.message)
        alert('Oops... ' + error.message);
      }
    );
  }



  


}
