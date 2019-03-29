import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  template: `
    <table>
      ================================================<br>
      <tr *ngFor="let event of events | async">
        ID = {{event.id}} <br>
        Regulator = {{event.Regulator}} <br>
        Industry = {{event.Industry}} <br>
        RequiredCredits = {{event.RequiredCredits}} <br>
        AcquiredCredits = {{event.AcquiredCredits}} <br>
        LearnerId = {{event.LearnerId}} <br>
        ================================================
      </tr>
    </table>
    <button (click)="createExample()">add thing</button>
    <button (click)="deleteExample()">remove thing</button>
  `,
})
export class AppComponent implements OnInit {
  events: Observable<any[]>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.listExamples();
  }

  listExamples() {
    this.events = this.apollo
      .watchQuery({
        query: gql`
          query {
            listStatusReports {
              items {
                id
                Regulator
                Industry
                RequiredCredits
                AcquiredCredits
                LearnerId   
              }
            }  
          }
        `,
      })
      .valueChanges.pipe(pluck('data', 'listStatusReports', 'items'));
  }

  createExample(){
    this.apollo.mutate({
        mutation: gql`
          mutation createStatusReport($createexampleinput: CreateStatusReportInput!) {
            createStatusReport(input: $createexampleinput) {
              id
              Regulator
              Industry
              RequiredCredits
              AcquiredCredits
              LearnerId
            }
          }
        `,
        variables: {
          createexampleinput: {
            Regulator: "ABC",
            Industry: "Pokemon",
            RequiredCredits: "10",
            AcquiredCredits: "5",
            LearnerId: "123"
          }
        },
      }).subscribe(); 
      this.listExamples();
  }

  deleteExample(){
    this.apollo.mutate{{
      mutation: gql`
        mutation deleteStatusReport(){
          
        }
      `,
    }}
  }
}
