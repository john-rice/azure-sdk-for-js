/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerServiceClient } from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Contains extra metadata on each revision, including supported revisions, cluster compatibility and available upgrades
 *
 * @summary Contains extra metadata on each revision, including supported revisions, cluster compatibility and available upgrades
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/aks/stable/2023-09-01/examples/ManagedClustersList_MeshRevisionProfiles.json
 */
async function listMeshRevisionProfilesInALocation() {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const location = "location1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedClusters.listMeshRevisionProfiles(
    location
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listMeshRevisionProfilesInALocation();
}

main().catch(console.error);
