/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Updates a managed private endpoint.
 *
 * @summary Updates a managed private endpoint.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-02-01/examples/KustoManagedPrivateEndpointsUpdate.json
 */
import {
  ManagedPrivateEndpoint,
  KustoManagementClient
} from "@azure/arm-kusto";
import { DefaultAzureCredential } from "@azure/identity";

async function kustoManagedPrivateEndpointsUpdate() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = "kustorptest";
  const clusterName = "kustoCluster";
  const managedPrivateEndpointName = "managedPrivateEndpointTest";
  const parameters: ManagedPrivateEndpoint = {
    groupId: "blob",
    privateLinkResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.Storage/storageAccounts/storageAccountTest",
    requestMessage: "Please Approve Managed Private Endpoint Request."
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.managedPrivateEndpoints.beginUpdateAndWait(
    resourceGroupName,
    clusterName,
    managedPrivateEndpointName,
    parameters
  );
  console.log(result);
}

kustoManagedPrivateEndpointsUpdate().catch(console.error);
