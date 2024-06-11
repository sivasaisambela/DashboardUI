import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
 
   Designation:string="";
   Username:string="";
   NoOfTeamMembers:number=0;
   TotalCostOfAllProjects:number=0;
   PendingTasks:number=0;
   UpComingProjects:number=0;
   ProjectCost:number=0;
   CurrentExpenditure:number=0;
   AvailableFunds:number=0;
   ToDay: Date=new Date();
   Clients:string[]=[];
   Projects:string[]=[];
   Years:number[]=[];
   TeamMembersSummary:any=[];
   TeamMembers:any=[];

    constructor(private dashboardService: DashboardService){

    }
  ngOnInit(): void 
  {
    this.Designation="Team Leader";
    this.Username="John Doe";
    this.NoOfTeamMembers=67;
    this.TotalCostOfAllProjects=240;
    this.PendingTasks=15;
    this.UpComingProjects=2;
     this.ProjectCost=2113507;
     this.CurrentExpenditure=96788;
     this.AvailableFunds=23231;

    this.Clients = ["ABC Infotech Ltd.","DEF Solutions","GHI Systems"];
    this.Projects= ["Project A","Project B","Project C","Project D"];

    for(var i=2021;i<=2024;i++)
      {
        this.Years.push(i);
      }

      this.TeamMembersSummary= this.dashboardService.getTeamMembersSummary();
      // this.TeamMembersSummary=[
      //   {Region:"East",TeamMembersCount:20,TemporarilyUnavailableMembers:4},
      //   {Region:"West",TeamMembersCount:17,TemporarilyUnavailableMembers:2},
      //   {Region:"South",TeamMembersCount:19,TemporarilyUnavailableMembers:1},
      //   {Region:"North",TeamMembersCount:22,TemporarilyUnavailableMembers:1}
      // ];

      this.TeamMembers=[
          {
            Region:"East",Members:[
            {ID:1,Name:"Ford",Status:"Available"},
            {ID:2,Name:"Miller",Status:"Available"},
            {ID:3,Name:"Jones",Status:"Busy"},
            {ID:4,Name:"James",Status:"Busy"}
          ]
          },
          {
            Region:"West",Members:[
              {ID:5,Name:"Lios",Status:"Available"},
              {ID:6,Name:"Joe",Status:"Available"},
              {ID:7,Name:"Glen",Status:"Busy"},
              {ID:8,Name:"Cleveland",Status:"Available"}
            ]
          },
          {
            Region:"South",Members:[
              {ID:9,Name:"Peter",Status:"Busy"},
              {ID:10,Name:"Smith",Status:"Busy"},
              {ID:11,Name:"Garfield",Status:"Available"},
              {ID:12,Name:"Sobers",Status:"Busy"}
            ]
          },
          {
            Region:"North",Members:[
              {ID:12,Name:"Chris",Status:"Available"},
              {ID:13,Name:"Meg",Status:"Busy"},
              {ID:14,Name:"Stewie",Status:"Busy"},
              {ID:14,Name:"Brian",Status:"Available"}
            ]
          }
      ];

  }
  onProjectChange($event:any)
  {
    console.log($event.target.innerHTML);
     if($event.target.innerHTML=="Project A")
      {
        this.ProjectCost=2113507;
        this.CurrentExpenditure=96788;
        this.AvailableFunds=23231;
      }
      else if($event.target.innerHTML=="Project B")
        {
          this.ProjectCost=2434343;
          this.CurrentExpenditure=43432;
          this.AvailableFunds=36463;
        }
        else if($event.target.innerHTML=="Project C")
          {
            this.ProjectCost=6565656;
            this.CurrentExpenditure=43211;
            this.AvailableFunds=56413;
          }
          else
          {
            this.ProjectCost=3211331;
            this.CurrentExpenditure=42231;
            this.AvailableFunds=64111;
          }
        
  }
  
}
