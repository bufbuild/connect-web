// Copyright 2020-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-connect-web v0.0.9 with parameter "ts_nocheck=false,target=ts"
// @generated from file buf/alpha/registry/v1alpha1/user.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import {CountUsersRequest, CountUsersResponse, CreateUserRequest, CreateUserResponse, DeactivateUserRequest, DeactivateUserResponse, DeleteUserRequest, DeleteUserResponse, GetUserByUsernameRequest, GetUserByUsernameResponse, GetUserRequest, GetUserResponse, ListOrganizationUsersRequest, ListOrganizationUsersResponse, ListUsersRequest, ListUsersResponse, UpdateUserServerRoleRequest, UpdateUserServerRoleResponse} from "./user_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * UserService is the User service.
 *
 * @generated from service buf.alpha.registry.v1alpha1.UserService
 */
export const UserService = {
  typeName: "buf.alpha.registry.v1alpha1.UserService",
  methods: {
    /**
     * CreateUser creates a new user with the given username.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.UserService.CreateUser
     */
    createUser: {
      name: "CreateUser",
      I: CreateUserRequest,
      O: CreateUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetUser gets a user by ID.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.UserService.GetUser
     */
    getUser: {
      name: "GetUser",
      I: GetUserRequest,
      O: GetUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetUserByUsername gets a user by username.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.UserService.GetUserByUsername
     */
    getUserByUsername: {
      name: "GetUserByUsername",
      I: GetUserByUsernameRequest,
      O: GetUserByUsernameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListUsers lists all users.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.UserService.ListUsers
     */
    listUsers: {
      name: "ListUsers",
      I: ListUsersRequest,
      O: ListUsersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListOrganizationUsers lists all users for an organization.
     * TODO: #663 move this to organization service
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.UserService.ListOrganizationUsers
     */
    listOrganizationUsers: {
      name: "ListOrganizationUsers",
      I: ListOrganizationUsersRequest,
      O: ListOrganizationUsersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteUser deletes a user.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.UserService.DeleteUser
     */
    deleteUser: {
      name: "DeleteUser",
      I: DeleteUserRequest,
      O: DeleteUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Deactivate user deactivates a user.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.UserService.DeactivateUser
     */
    deactivateUser: {
      name: "DeactivateUser",
      I: DeactivateUserRequest,
      O: DeactivateUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateUserServerRole update the role of an user in the server.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.UserService.UpdateUserServerRole
     */
    updateUserServerRole: {
      name: "UpdateUserServerRole",
      I: UpdateUserServerRoleRequest,
      O: UpdateUserServerRoleResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CountUsers returns the number of users in the server by the user state provided.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.UserService.CountUsers
     */
    countUsers: {
      name: "CountUsers",
      I: CountUsersRequest,
      O: CountUsersResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

