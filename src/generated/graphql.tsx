import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  getOrders: Array<Order>;
  getProducts: Array<Product>;
  getCategories: Array<Category>;
  getRoles: Array<Role>;
  checkAuth?: Maybe<User>;
  getUsers: Array<User>;
  getProductOrder: Array<ProductOrder>;
  getProductOrders: Array<ProductOrder>;
};


export type QueryGetOrdersArgs = {
  id: Scalars['String'];
};


export type QueryGetProductOrderArgs = {
  id: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  id?: Maybe<Scalars['ID']>;
  productOrders: Array<ProductOrder>;
  employee: User;
  customersOrder: Customers;
  cost: Scalars['Float'];
  products: Array<Product>;
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
};

export type ProductOrder = {
  __typename?: 'ProductOrder';
  productId: Scalars['ID'];
  orderId: Scalars['ID'];
  count: Scalars['Float'];
  price: Scalars['Float'];
  order: Order;
  product: Product;
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  name: Scalars['String'];
  category?: Maybe<Category>;
  productOrders: Array<ProductOrder>;
  files: Array<File>;
  price: Scalars['Float'];
  orders: Array<Order>;
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  product?: Maybe<Array<Product>>;
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  id: Scalars['ID'];
  name: Scalars['String'];
  location: Scalars['String'];
  product?: Maybe<Product>;
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  age: Scalars['Float'];
  roles: Role;
  order: Array<Order>;
  username: Scalars['String'];
  email: Scalars['String'];
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['Float'];
  title?: Maybe<Scalars['String']>;
  users?: Maybe<Array<User>>;
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Customers = {
  __typename?: 'Customers';
  id: Scalars['Float'];
  name: Scalars['String'];
  handphone: Scalars['String'];
  email: Scalars['String'];
  orders: Array<Order>;
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  insertNewOrder: OrderResponse;
  insertNewProduct: ProductResponse;
  insertNewImage: Scalars['Boolean'];
  updateProduct: ProductResponse;
  insertNewCategory: CategoryResponse;
  insertNewRole: RoleResponse;
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
};


export type MutationInsertNewOrderArgs = {
  options: InsertOrder;
};


export type MutationInsertNewProductArgs = {
  files: Array<Scalars['Upload']>;
  categoryID: Scalars['String'];
  name: Scalars['String'];
};


export type MutationInsertNewImageArgs = {
  file: Scalars['Upload'];
};


export type MutationUpdateProductArgs = {
  id: Scalars['String'];
  value: Scalars['String'];
  name: Scalars['String'];
};


export type MutationInsertNewCategoryArgs = {
  name: Scalars['String'];
};


export type MutationInsertNewRoleArgs = {
  title: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UserRegister;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type OrderResponse = {
  __typename?: 'OrderResponse';
  errors?: Maybe<Array<FieldError>>;
  order?: Maybe<Order>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type InsertOrder = {
  customer_id?: Maybe<Scalars['String']>;
  handphone: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  products: Array<InsertProduct>;
};

export type InsertProduct = {
  productId: Scalars['String'];
  count: Scalars['Float'];
};

export type ProductResponse = {
  __typename?: 'ProductResponse';
  errors?: Maybe<Array<FieldError>>;
  product?: Maybe<Product>;
};


export type CategoryResponse = {
  __typename?: 'CategoryResponse';
  errors?: Maybe<Array<FieldError>>;
  category?: Maybe<Category>;
};

export type RoleResponse = {
  __typename?: 'RoleResponse';
  errors?: Maybe<Array<FieldError>>;
  role?: Maybe<Role>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UserRegister = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  age: Scalars['Float'];
  rolesId: Scalars['Float'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'firstName' | 'lastName' | 'age'>
  & { roles: (
    { __typename?: 'Role' }
    & Pick<Role, 'title'>
  ) }
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type InsertNewImageMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type InsertNewImageMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'insertNewImage'>
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type InsertNewProductMutationVariables = Exact<{
  name: Scalars['String'];
  categoryID: Scalars['String'];
  files: Array<Scalars['Upload']>;
}>;


export type InsertNewProductMutation = (
  { __typename?: 'Mutation' }
  & { insertNewProduct: (
    { __typename?: 'ProductResponse' }
    & { product?: Maybe<(
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'name' | 'created_at' | 'updated_at'>
      & { category?: Maybe<(
        { __typename?: 'Category' }
        & Pick<Category, 'id' | 'name'>
      )> }
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type RegisterMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  age: Scalars['Float'];
  rolesId: Scalars['Float'];
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName' | 'age' | 'username' | 'email'>
      & { roles: (
        { __typename?: 'Role' }
        & Pick<Role, 'title'>
      ) }
    )> }
  ) }
);

export type CheckAuthQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckAuthQuery = (
  { __typename?: 'Query' }
  & { checkAuth?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type GetCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoryQuery = (
  { __typename?: 'Query' }
  & { getCategories: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'created_at' | 'updated_at'>
  )> }
);

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  firstName
  lastName
  age
  roles {
    title
  }
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const InsertNewImageDocument = gql`
    mutation InsertNewImage($file: Upload!) {
  insertNewImage(file: $file)
}
    `;
export type InsertNewImageMutationFn = Apollo.MutationFunction<InsertNewImageMutation, InsertNewImageMutationVariables>;

/**
 * __useInsertNewImageMutation__
 *
 * To run a mutation, you first call `useInsertNewImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertNewImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertNewImageMutation, { data, loading, error }] = useInsertNewImageMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useInsertNewImageMutation(baseOptions?: Apollo.MutationHookOptions<InsertNewImageMutation, InsertNewImageMutationVariables>) {
        return Apollo.useMutation<InsertNewImageMutation, InsertNewImageMutationVariables>(InsertNewImageDocument, baseOptions);
      }
export type InsertNewImageMutationHookResult = ReturnType<typeof useInsertNewImageMutation>;
export type InsertNewImageMutationResult = Apollo.MutationResult<InsertNewImageMutation>;
export type InsertNewImageMutationOptions = Apollo.BaseMutationOptions<InsertNewImageMutation, InsertNewImageMutationVariables>;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    user {
      ...RegularUser
    }
    errors {
      field
      message
    }
  }
}
    ${RegularUserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const InsertNewProductDocument = gql`
    mutation InsertNewProduct($name: String!, $categoryID: String!, $files: [Upload!]!) {
  insertNewProduct(name: $name, categoryID: $categoryID, files: $files) {
    product {
      id
      name
      category {
        id
        name
      }
      created_at
      updated_at
    }
    errors {
      field
      message
    }
  }
}
    `;
export type InsertNewProductMutationFn = Apollo.MutationFunction<InsertNewProductMutation, InsertNewProductMutationVariables>;

/**
 * __useInsertNewProductMutation__
 *
 * To run a mutation, you first call `useInsertNewProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertNewProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertNewProductMutation, { data, loading, error }] = useInsertNewProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *      categoryID: // value for 'categoryID'
 *      files: // value for 'files'
 *   },
 * });
 */
export function useInsertNewProductMutation(baseOptions?: Apollo.MutationHookOptions<InsertNewProductMutation, InsertNewProductMutationVariables>) {
        return Apollo.useMutation<InsertNewProductMutation, InsertNewProductMutationVariables>(InsertNewProductDocument, baseOptions);
      }
export type InsertNewProductMutationHookResult = ReturnType<typeof useInsertNewProductMutation>;
export type InsertNewProductMutationResult = Apollo.MutationResult<InsertNewProductMutation>;
export type InsertNewProductMutationOptions = Apollo.BaseMutationOptions<InsertNewProductMutation, InsertNewProductMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($firstName: String!, $lastName: String!, $age: Float!, $rolesId: Float!, $username: String!, $password: String!, $email: String!) {
  register(
    options: {firstName: $firstName, lastName: $lastName, age: $age, rolesId: $rolesId, username: $username, password: $password, email: $email}
  ) {
    errors {
      field
      message
    }
    user {
      id
      firstName
      lastName
      age
      username
      email
      roles {
        title
      }
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      age: // value for 'age'
 *      rolesId: // value for 'rolesId'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CheckAuthDocument = gql`
    query CheckAuth {
  checkAuth {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useCheckAuthQuery__
 *
 * To run a query within a React component, call `useCheckAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckAuthQuery({
 *   variables: {
 *   },
 * });
 */
export function useCheckAuthQuery(baseOptions?: Apollo.QueryHookOptions<CheckAuthQuery, CheckAuthQueryVariables>) {
        return Apollo.useQuery<CheckAuthQuery, CheckAuthQueryVariables>(CheckAuthDocument, baseOptions);
      }
export function useCheckAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckAuthQuery, CheckAuthQueryVariables>) {
          return Apollo.useLazyQuery<CheckAuthQuery, CheckAuthQueryVariables>(CheckAuthDocument, baseOptions);
        }
export type CheckAuthQueryHookResult = ReturnType<typeof useCheckAuthQuery>;
export type CheckAuthLazyQueryHookResult = ReturnType<typeof useCheckAuthLazyQuery>;
export type CheckAuthQueryResult = Apollo.QueryResult<CheckAuthQuery, CheckAuthQueryVariables>;
export const GetCategoryDocument = gql`
    query GetCategory {
  getCategories {
    id
    name
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetCategoryQuery__
 *
 * To run a query within a React component, call `useGetCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoryQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
        return Apollo.useQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, baseOptions);
      }
export function useGetCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
          return Apollo.useLazyQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, baseOptions);
        }
export type GetCategoryQueryHookResult = ReturnType<typeof useGetCategoryQuery>;
export type GetCategoryLazyQueryHookResult = ReturnType<typeof useGetCategoryLazyQuery>;
export type GetCategoryQueryResult = Apollo.QueryResult<GetCategoryQuery, GetCategoryQueryVariables>;