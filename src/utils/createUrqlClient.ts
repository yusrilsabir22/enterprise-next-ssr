import {cacheExchange} from '@urql/exchange-graphcache'
import { dedupExchange, fetchExchange } from 'urql';
import { CheckAuthDocument, CheckAuthQuery, LoginMutation, LogoutMutation } from '../generated/graphql';
import { betterUpdateQuery } from './betterUpdateQuery';
export const createUrqlClient = (ssrExchange: any) => ({
    url: "http://localhost:4001/graphql",
  fetchOptions: {
    credentials: "include" as const
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          logout: (_result, args, cache, info) => {
            betterUpdateQuery<LogoutMutation, CheckAuthQuery>(cache, 
              {query: CheckAuthDocument},
              _result,
              () => ({checkAuth: null})
            )
          },
          login: (_result, args, cache, info) => {
            betterUpdateQuery<LoginMutation, CheckAuthQuery>(cache, 
              { query: CheckAuthDocument }, 
              _result,
              (result, query) => {
                if(result.login.errors) {
                  return query
                } else {
                  return {
                    checkAuth: result.login.user 
                  }
                }
              }
            )
          }
        }
      }
    }), 
    ssrExchange,
    fetchExchange]
});