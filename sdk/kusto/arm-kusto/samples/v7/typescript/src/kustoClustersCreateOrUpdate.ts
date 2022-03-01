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
 * This sample demonstrates how to Create or update a Kusto cluster.
 *
 * @summary Create or update a Kusto cluster.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-02-01/examples/KustoClustersCreateOrUpdate.json
 */
import { Cluster, KustoManagementClient } from "@azure/arm-kusto";
import { DefaultAzureCredential } from "@azure/identity";

async function kustoClustersCreateOrUpdate() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = "kustorptest";
  const clusterName = "kustoCluster";
  const parameters: Cluster = {
    allowedIpRangeList: ["0.0.0.0/0"],
    enableAutoStop: true,
    enableDoubleEncryption: false,
    enablePurge: true,
    enableStreamingIngest: true,
    identity: { type: "SystemAssigned" },
    location: "westus",
    publicIPType: "DualStack",
    publicNetworkAccess: "Enabled",
    sku: { name: "Standard_L8s", capacity: 2, tier: "Standard" }
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.clusters.beginCreateOrUpdateAndWait(
    resourceGroupName,
    clusterName,
    parameters
  );
  console.log(result);
}

kustoClustersCreateOrUpdate().catch(console.error);
