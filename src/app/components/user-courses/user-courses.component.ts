import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css']
})
export class UserCoursesComponent {
constructor(private user:UserService){}

course:any[]=[];
temp:any[]=[];
roadmaptemp:any[]=[];
durationtemp:any[]=[];
selected:any
id:any;

ngOnInit(): void {
this.getAll()
}

getAll() {
  this.user.getData().subscribe(
    (res: any[]) => {
      this.course = res;

    });
  }
  getCourses(id: any) {
    this.id = id;
    this.selected = this.course.find(course => course.id == this.id);
  
    if (this.selected) {
      if (typeof this.selected.roadmap === 'string') {
        // Convert roadmap string into an array, splitting by new lines
        this.roadmaptemp = this.selected.roadmap.split('\n').map((line: string) => line.trim()).filter((line: string) => line !== '');
      } else {
        // If roadmap is already an array, use it directly
        this.roadmaptemp = this.selected.roadmap;
      }
  
      this.durationtemp = this.selected.duration;
    }
  }
  


}


