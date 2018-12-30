import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  rates: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql` {
            rates(currency: "USD") {
                currency
                rate
            }
          }
        `,
      })
      .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
        this.rates = result.data && result.data.rates;
        this.loading = result.loading;
        this.error = result.errors;
      });
  };
}