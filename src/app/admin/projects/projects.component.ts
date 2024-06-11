import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  projects:any=[];
  constructor(private projectsService:ProjectsService){

  }

ngOnInit(): void {
  this.projectsService.getAllProjects().subscribe(
  (response:Project[])=>{
    this.projects=response;
  }
  );
}

}
