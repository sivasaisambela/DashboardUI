import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getTeamMembersSummary():any[]{
    var TeamMembersSummary=[
      {Region:"East",TeamMembersCount:20,TemporarilyUnavailableMembers:4},
      {Region:"West",TeamMembersCount:18,TemporarilyUnavailableMembers:3},
      {Region:"South",TeamMembersCount:22,TemporarilyUnavailableMembers:2},
      {Region:"North",TeamMembersCount:15,TemporarilyUnavailableMembers:2}
    ];
    return TeamMembersSummary;
  }
}
