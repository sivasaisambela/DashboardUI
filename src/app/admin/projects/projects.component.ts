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
  newProject: Project = new Project();
  editProject:Project = new Project();
  editIndex:number=0;
  deleteIndex:number=0;
  deleteProject:Project = new Project();
  searchBy:string="ProjectName";
  searchText:string="";
  constructor(private projectsService:ProjectsService){

  }

ngOnInit(): void {
  this.projectsService.getAllProjects().subscribe(
  (response:Project[])=>{
    this.projects=response;
  }
  );
}

 onSaveClick(){
  this.projectsService.insertProject(this.newProject).subscribe(
    
    (response)=>{
      var p:Project=new Project();
      p.projectID=response.projectID;
      p.projectName=response.projectName;
      p.teamSize=response.teamSize;
      this.projects.push(p);
  
    },
    (error)=>{
      console.log(error);
    }
  );
 }

 onEditClick(event:any,index:number){
  this.editProject.projectID=this.projects[index].projectID;
  this.editProject.projectName = this.projects[index].projectName;
  this.editProject.teamSize = this.projects[index].teamSize;
  this.editIndex=index;
 }

 onUpdateClick(){
  this.projectsService.updateProject(this.editProject).subscribe(
    (response:Project)=>{
      var p:Project = new Project();
      p.projectID=response.projectID;
      p.projectName= response.projectName;
      p.teamSize = response.teamSize;
      this.projects[this.editIndex]=p;
    },
    (error)=>{
      console.log(error);
    }
  );
 }

 onDeleteClick(event:any,index:number){
  this.deleteIndex=index;
  this.deleteProject.projectID=this.projects[index].projectID;
  this.deleteProject.projectName=this.projects[index].projectName;
  this.deleteProject.teamSize=this.projects[index].teamSize;
 }

 onDeleteConfirm(){
  this.projectsService.deleteProject(this.deleteProject.projectID).subscribe(
    (response)=>{
      this.projects.splice(this.deleteIndex,1);
    },
    (error)=>{
      console.log(error);
    }
  );
 }

 onSearchClick(){
   this.projectsService.searchProjects(this.searchBy,this.searchText).subscribe(
    (response:Project[])=>{
      this.projects=response;
    },
    (error)=>{console.log(error);}
   );
 }

}
